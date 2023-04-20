import fs from "fs";
import { join } from "path";

export function sitemapsListGET() {
	const docsDirectory = join(process.cwd(), "pages", "sitemaps");
	return fs
		.readdirSync(docsDirectory, { withFileTypes: true })
		.map(({ name }) => name.slice(0, -3))
		.filter((item) => item.match(/index.xml/) == null);
}

export async function getExperiences() {
	const rest_url =
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/results?per_page=100&_fields=id,date";

	const res = await fetch(rest_url);
	const totalpages = await res.headers.get("x-wp-totalpages");
	var posts = await res.json();

	for (let i = 1; i <= totalpages; i++) {
		let resData = await fetch(rest_url + "&page=" + i);
		let postsData = await resData.json();
		posts = posts.concat(postsData);
	}

	return posts;
}

export async function getPages() {
	const rest_url =
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?per_page=100&_fields=slug,dateSitemap";

	const res = await fetch(rest_url);
	var posts = await res.json();

	return posts;
}

export async function getCourseData() {
	let res = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100"
	).then((res) => res.json());
	res = res.reverse();
	return res;
}
export async function getClasstypeData() {
	let res = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
	).then((res) => res.json());
	res = res.reverse();
	return res;
}