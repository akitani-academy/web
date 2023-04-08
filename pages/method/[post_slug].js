import { useRouter } from "next/router";
import Layout from "components/layout";
import Head from "components/head";
import List from "components/widget/LinkList";
import Contact from "components/widget/Contact"

import css_index from "styles/index.module.scss";
import css_contact from "styles/contact.module.scss";

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

			<aside className={css_contact.contact}>
				<Contact short="true" />
			</aside>
		</>
	);
}

Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
	const res = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?per_page=100"
	);
	const posts = await res.json();

	const paths = posts.map((post) => ({
		params: { post_slug: post.slug },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const post = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?slug=" +
		params.post_slug
	).then((res) => res.json());

	return { props: { post: post[0] } };
}
