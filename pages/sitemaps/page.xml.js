const _V = require("components/_V");
import { getPages } from "lib/sitemapGET";

const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	res.setHeader("Content-Type", "text/xml");
	res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
	res.write(sitemapXML(await getPages()));
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;

function sitemapXML(posts) {
	let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

	posts.forEach((post) => {
		if (post.slug != "course_and_classtype") {
			if (post.slug == "index") {
				post.slug = "";
			} else {
				post.slug = `/${post.slug}`;
			}
			xml += `
			<url>
				<loc>${_V.meta.baseURL}${post.slug}</loc>
				<lastmod>${post.dateSitemap}</lastmod>
			</url>
			`;
		}
	});

	xml += `
			<url>
				<loc>${_V.meta.baseURL}/access</loc>
				<lastmod>2023-04-23</lastmod>
			</url>
			`;

	xml += `</urlset>`;
	return xml;
}
