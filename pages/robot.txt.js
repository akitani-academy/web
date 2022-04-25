const _V = require("components/_V");

export const getServerSideProps = async ({ res }) => {
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
	res.write(`
# *
User-agent: *
Allow: /

# Host
Host: ${_V.meta.baseURL}

# Sitemaps
Sitemap: ${_V.meta.baseURL}/sitemaps/index.xml
    `);
	res.end();

	return {
		props: {},
	};
};

export default () => {
	return null;
};
