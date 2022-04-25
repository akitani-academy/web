const _V = require("components/_V");
import { getExperiences } from "lib/sitemapGET";

const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	res.setHeader("Content-Type", "text/xml");
	res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
	res.write(sitemapXML(await getExperiences()));
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;

function sitemapXML(posts) {
	let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

	posts.forEach((post) => {
		xml += `
			<url>
				<loc>https://www.akitani-academy.jp/experiences/${post.id}</loc>
				<lastmod>${post.date}</lastmod>
			</url>
			`;
	});

	xml += `</urlset>`;
	return xml;
}
