import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { migrate_document, migrate_config, check_template } from '@mdsvex/migrate';

const layouts = ['src/lib/layouts/Blog.svelte'];
// smartypants: your old smartypants option, true if you never set it
// math: true if you used remark-math
const options = { smartypants: true, math: false };

function report(file, notes) {
	for (const note of notes) console.log(`${file}:${note.line}: ${note.message}`);
}

for (const file of globSync('src/**/*.{svx,md}')) {
	const { code, notes } = migrate_document(readFileSync(file, 'utf8'), options);
	writeFileSync(file, code);
	report(file, notes);
}

// for (const file of layouts) report(file, check_template(readFileSync(file, 'utf8')));
