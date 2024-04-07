import { posts } from '../posts';

export const prerender = true;

export async function GET() {
  const headers = { 'Content-Type': 'application/xml' };
  const blogUrl = 'https://shilangyu.dev/blog';

  const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>shilangyu.dev</title>
				<description>Blogging about programming languages, math, or things in between.</description>
				<link>${blogUrl}</link>
				<atom:link href="${blogUrl}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
          .map(
            ({ name, meta }) => `
						<item>
							<title>${meta.title}</title>
							<description>${meta.description}</description>
							<link>${blogUrl}/${name}</link>
							<guid isPermaLink="true">${blogUrl}/${name}</guid>
							<pubDate>${meta.date.toUTCString()}</pubDate>
						</item>
					`,
          )
          .join('')}
			</channel>
		</rss>
	`.trim();

  return new Response(xml, { headers });
}
