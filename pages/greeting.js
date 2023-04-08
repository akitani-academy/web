import Head from "components/head";
import Image from "next/image";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Layout from "components/layout";
import Contact from "components/widget/Contact"

import css from "styles/greeting.module.scss";
import css_contact from "styles/contact.module.scss";

export default function Page({ wpDATA }) {
	return (
		<>
			<Head
				title={wpDATA.subTitle}
				description={wpDATA.summary}
				breadcrumb={[[wpDATA.subTitle, "/greeting"]]}
			/>
			<div className={css.tmb}>
				<Image
					src={"/292A1489.jpg"}
					width={"2048"}
					height={"1365"}
					sizes={"560"}
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
					__html: wpDATA.content,
				}}
			/>
			<aside className={css_contact.contact}>
				<Contact short="true" />
			</aside>
		</>
	);
}

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
