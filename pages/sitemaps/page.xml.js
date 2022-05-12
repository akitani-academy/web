const _V = require("components/_V");
import { getPages, getCourseData, getClasstypeData } from "lib/sitemapGET";

const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	res.setHeader("Content-Type", "text/xml");
	res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
	res.write(
		sitemapXML(
			await getPages(),
			await getCourseData(),
			await getClasstypeData()
		)
	);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;

function sitemapXML(posts, getCourseData, getClasstypeData) {
	let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

	posts.forEach((post) => {
		let slug = "/" + post.slug;
		if (slug == "/index") {
			slug = "";
		}

		xml += `
			<url>
				<loc>https://akitani-academy.jp${slug}</loc>
				<lastmod>${post.dateSitemap}</lastmod>
			</url>
			`;

		if (slug == "/course_and_classtype") {
			getCourseData.forEach((course) => {
				xml += `
						<url>
							<loc>https://akitani-academy.jp/course_and_classtype?course=${course.slug}</loc>
							<lastmod>${post.dateSitemap}</lastmod>
						</url>
						`;
				getClasstypeData.forEach((classtype) => {
					xml += `
							<url>
								<loc>https://akitani-academy.jp/course_and_classtype?course=${course.slug}&amp;classtype=${classtype.slug}</loc>
								<lastmod>${post.dateSitemap}</lastmod>
							</url>
							`;
				});
			});
			getClasstypeData.forEach((classtype) => {
				xml += `
						<url>
							<loc>https://akitani-academy.jp/course_and_classtype?classtype=${classtype.slug}</loc>
							<lastmod>${post.dateSitemap}</lastmod>
						</url>
						`;
			});
		}
	});

	xml += `</urlset>`;
	return xml;
}
function url(e) {
	return `
		<url>
			<loc>https://akitani-academy.jp${slug}</loc>
			<lastmod>${post.dateSitemap}</lastmod>
		</url>
		`;
}
