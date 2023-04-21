const _V = require("components/_V");
import { sitemapsListGET } from "lib/sitemapGET";

const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	let urls = sitemapsListGET()
	urls = urls.map((url) => `${_V.meta.baseURL}/sitemaps/${url}`)

	res.setHeader("Content-Type", "text/xml");
	res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
	res.write(sitemapXML(urls));
	res.end();

	const sitemaps = [
		'https://www.google.com/ping?sitemap=',
		'https://www.bing.com/indexnow?url=http://www.example.com/product.html&key=fcfe89ccc4c04cb598c32cf6c6edc79e',
	];

	const sitemapUrls = sitemaps.map(sitemap => {
		return urls.map(url => sitemap + encodeURIComponent(url));
	}).flat();

	fetchSitemaps(sitemapUrls)
		.then(results => {
			console.log('Success:', results);
		})
		.catch(error => {
			console.error('Error:', error);
		});

	return {
		props: {},
	};
};

export default Sitemap;

function sitemapXML(urls) {

	let xml = `<?xml version="1.0" encoding="UTF-8"?>
				<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

	urls.forEach((url) => {
		xml += `<sitemap><loc>${url}</loc></sitemap>`;
	});

	xml += `</sitemapindex>`;
	return xml;
}

function fetchSitemaps(sitemaps) {
	const promises = sitemaps.map(sitemapUrl => {
		return fetch(sitemapUrl)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status} ${response.statusText}`);
				}
				return response.text();
			});
	});

	return Promise.all(promises);
}
