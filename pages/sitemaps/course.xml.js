const _V = require("components/_V");
import { getCourseData } from "lib/sitemapGET";

const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	res.setHeader("Content-Type", "text/xml");
	res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
	res.write(sitemapXML(await getCourseData()));
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;

function sitemapXML(posts) {
	let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

	posts.forEach((post) => {

		let link = `${_V.meta.baseURL}/course/${post.slug}`;
		
		`https://www.bing.com/indexnow?url=${link}&key=fcfe89ccc4c04cb598c32cf6c6edc79e`

		xml += `
			<url>
				<loc>${link}</loc>
				<lastmod>${post.modified}</lastmod>
			</url>
			`;
	});

	xml += `</urlset>`;
	return xml;
}
