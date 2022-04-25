import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import css from "styles/greeting.module.scss";

export default function Page({ wpDATA }) {
	return (
		<>
			<Head
				title={wpDATA.subTitle}
				breadcrumb={[[wpDATA.subTitle, "/greeting"]]}
			/>
			<div className={css.tmb}>
				<Image
					src={"/292A1489.jpg"}
					width={"2048"}
					height={"1365"}
					objectFit={"cover"}
				/>
			</div>
			<h1
				data-subtitle={wpDATA.subTitle}
				dangerouslySetInnerHTML={{
					__html: parser.translateHTMLString(wpDATA.title),
				}}
			></h1>
			<article
				dangerouslySetInnerHTML={{
					__html: parser.translateHTMLString(
						"<article>" + wpDATA.content + "</article>"
					),
				}}
			/>
		</>
	);
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	let wpDATA = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=greeting"
	).then((res) => res.json());
	wpDATA = wpDATA[0];

	return {
		props: {
			wpDATA,
		},
	};
}
