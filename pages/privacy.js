import Head from "components/head";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Layout from "components/layout";
import ContactButton from "components/ContactButton/ContactButton"

import css_global from "styles/global.module.scss";

export default function Page({ wpDATA }) {
	return (
		<>
			<Head
				url={"/greeting"}
				title={wpDATA.subTitle}
				description={wpDATA.summary}
				breadcrumb={[
					["トップページ", ""],
					[wpDATA.subTitle, "/greeting"]
				]}
			/>
			<article className={css_global.card}>
				<h1
					dangerouslySetInnerHTML={{
						__html: parser.translateHTMLString(wpDATA.title),
					}}
				></h1>
				<div
					dangerouslySetInnerHTML={{
						__html: parser.translateHTMLString(wpDATA.wp_body),
					}}
				/>
			</article>
			<ContactButton />
		</>
	);
}

Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	let wpDATA = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=privacy"
	).then((res) => res.json());
	wpDATA = wpDATA[0];

	return {
		props: {
			wpDATA,
		},
	};
}
