import { external, routes } from '$lib/routes';
import { normalizeUrl } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';
import { posts } from '../blog/posts';
import type { EntryGenerator } from './$types';

// When changing the URL of this website, some older links got invalidated. This page redirects old links to the new ones.
const redirects: Record<string, string> = {
  'SVM-from-scratch': routes.blog.post(posts.find((e) => e.name === 'svm-explained')!),
  TicTacToe: external.githubPages('TicTacToe'),
  'ram-runner': external.githubPages('ram-runner'),
  'genetic.ts': external.githubPages('genetic.ts'),
  'async-worker': external.githubPages('async-worker'),
  'formal-lang': external.githubPages('formal-lang'),
  'register-transformations': external.githubPages('register-transformations'),
  'uni-notes': external.githubPages('uni-notes'),
  'balanced-parentheses-dart-3': routes.blog.post(
    posts.find((e) => e.name === 'balanced-parentheses-dart-3')!,
  ),
  'WUT-CG': external.githubPages('WUT-CG'),
  'AaC-pi': external.githubPages('AaC-pi'),
  'AIF-emotion-detection': external.githubPages('AIF-emotion-detection'),
  'NLP-language-complexity': external.githubPages('NLP-language-complexity'),
  'SE2-CBT': external.githubPages('SE2-CBT'),
  'visible-height-css': external.githubPages('visible-height-css'),
  'use-async-react': external.githubPages('use-async-react'),
  'EOOP20L-neural-network': external.githubPages('EOOP20L-neural-network'),
};

export function load({ params }) {
  const [head, ...rest] = normalizeUrl(params.redirect).split('/');
  const destination = Object.entries(redirects).find(([src]) => head === src)?.[1];

  if (!destination) error(404, 'Not found');

  redirect(301, normalizeUrl(destination) + (rest.length ? '/' + rest.join('/') : ''));
}

export const entries: EntryGenerator = () => {
  const entries = Object.keys(redirects).map((source) => ({ redirect: source }));

  return entries;
};
