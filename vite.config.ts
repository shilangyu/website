import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { selectAll } from 'hast-util-select';
import { escapeSvelte, mdsvex, type MdsvexOptions } from 'mdsvex';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import { createHighlighter, type BundledLanguage } from 'shiki';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const mdsvexExtension = '.svx';

// Makes headings with id clickable
// @ts-expect-error - because mdsvex has old dependencies and I don't feel like fucking around with the types here
const autoLinkHeadings = () => (tree) => {
  for (const node of selectAll('h1,h2,h3,h4,h5,h6', tree)) {
    const id = node.properties.id;

    if (id) {
      node.children = [
        {
          type: 'element',
          tagName: 'a',
          properties: {
            // make sure this class is styled in global css
            className: ['linkable-heading'],
            ariaHidden: 'true',
            tabIndex: -1,
            href: `#${id}`,
          },
          children: [...node.children],
        },
      ];
    }
  }
};

const langs: BundledLanguage[] = ['dart'];
const [light, dark] = ['catppuccin-latte', 'dracula-soft'];
const highlighter = await createHighlighter({ themes: [light, dark], langs });

await highlighter.loadLanguage(...langs);

const mdsvexOptions: MdsvexOptions = {
  extensions: [mdsvexExtension],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeSlug, autoLinkHeadings, [rehypeKatexSvelte, { output: 'html' }]],
  layout: join(__dirname, './src/lib/mdsvex/mdsvex.svelte'),
  highlight: {
    highlighter: async (code, lang) => {
      const html = escapeSvelte(
        highlighter.codeToHtml(code, { lang: lang ?? 'text', themes: { dark, light } }),
      );

      return `{@html \`${html}\` }`;
    },
  },
};

export default defineConfig({
  plugins: [
    sveltekit({
      extensions: ['.svelte', mdsvexExtension],
      preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: '404.html',
        precompress: false,
        strict: true,
      }),

      paths: {
        base: process.argv.includes('dev') ? '' : (process.env.BASE_PATH as `/${string}`),
      },
    }),
  ],
});
