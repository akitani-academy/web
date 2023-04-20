const _V = require("components/_V");
import { sitemapsListGET } from "lib/sitemapGET";

const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	res.setHeader("Content-Type", "text/xml");
	res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
	res.write(sitemapXML(sitemapsListGET()));
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;

function sitemapXML(posts) {
	let xml = `<?xml version="1.0" encoding="UTF-8"?>
				<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

	posts.forEach((post) => {
		xml += `<sitemap><loc>
				${_V.meta.baseURL + "/sitemaps/" + post}
				</loc></sitemap>`;
	});

	xml += `</sitemapindex>`;
	return xml;
}
