import Head from "components/head";

import List from "components/widget/LinkList";

let _V = require("/components/_V.js");

import css from "styles/contact.module.scss";
import Contact from "components/widget/Contact"

import { useRouter } from "next/router";

export default function Page({ post }) {
	const router = useRouter();
	return (
		<>
			<Head
				title={"英語専門塾の" + post.title + "｜秋谷アカデミィ｜横浜・自由が丘"}
				breadcrumb={[
					["合格へのHowTo", "/method"],
					[post.title, router.asPath],
				]}
			/>
			<h1 data-subTitle="秋谷光子アカデミィの">{post.title}</h1>
			<List data={[["その他の合格対策を見る", "/method"]]} />

			<article dangerouslySetInnerHTML={{ __html: post.content }}></article>

			<aside className={css.contact}>
				<Contact short="true" />
			</aside>
		</>
	);
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

// この関数はビルド時に呼び出されます。
export async function getStaticPaths() {
	// 外部APIエンドポイントを呼び出して記事を取得します。
	const res = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?per_page=100"
	);
	const posts = await res.json();

	// 記事に基づいてプリレンダリングしたいパスを取得します
	const paths = posts.map((post) => ({
		params: { post_slug: post.slug },
	}));
	// console.log(paths);

	// ビルド時にこれらのパスだけをプリレンダリングします。
	// { fallback: false } は他のルートが404になることを意味します。
	return { paths, fallback: false };
}

// ビルド時にも呼び出されます。
export async function getStaticProps({ params }) {
	// paramsは記事の`id`を含みます。
	// ルートが/posts/1のような時、params.id は1です。
	const post = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?slug=" +
		params.post_slug
	).then((res) => res.json());

	// 記事データをprops経由でページに渡します。
	return { props: { post: post[0] } };
}
