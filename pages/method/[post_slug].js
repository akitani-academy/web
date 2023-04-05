import Head from "components/head";

import List from "components/widget/LinkList";

let _V = require("/components/_V.js");

import css_index from "styles/index.module.scss";
import css from "styles/contact.module.scss";
import Contact from "components/widget/Contact"

import { useRouter } from "next/router";

export default function Page({ post }) {
	const router = useRouter();
	return (
		<>
			<Head
				title={"秋谷アカデミィの" + post.title + "｜横浜・自由が丘"}
				breadcrumb={[
					["合格へのHowTo", "/method"],
					[post.title, router.asPath],
				]}
			/>

			<h2 data-subTitle="秋谷光子アカデミィの">合格へのHow To</h2>
			<p>
				秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。圧倒的な実績をもとにノウハウを合格のHowToとして公開しています。
			</p>
			<List data={[["その他の合格対策を見る", "/method"]]} />

			<article className={css_index.card}>
				<h1 data-subTitle="秋谷光子アカデミィの">{post.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.content }} />
			</article>

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
