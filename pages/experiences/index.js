import Layout from "components/layout";
import Head from "components/head";
import List from "components/widget/LinkList";
import ExperiencesList from "components/Experiences/ExperiencesList";
import ContactButton from "components/ContactButton/ContactButton"

import css_View from "styles/View.module.scss";

export default function Page({ data }) {
	return (
		<>
			<Head
				url={`/experiences`}
				title="英検1級173人/東大早慶上智9割以上の合格実績と体験記"
				breadcrumb={[
					["トップページ", ""],
					["実績", "/experiences"]
				]}
				description="秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。圧倒的な実績に合わせて合格体験記を数多く掲載しております。"
			/>
			<h1>合格実績 と 体験記</h1>
			<p>
				秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。圧倒的な実績に合わせて合格体験記を数多く掲載しております。
			</p>
			<List data={data.map((e, i) => [e.name, "#" + e.slug])} />
			{data.map((e, i) => (
				<>
					<h2 id={e.slug} key={i} className={css_View.h2}>
						{e.name} 実績
						{e.description && <small>{e.description}</small>}
					</h2>
					{2 < e.child_list.length && (
						<List data={e.child_list.map((e, i) => [e.name, "#" + e.slug])} />
					)}
					{e.child_list.map(
						(e1, i) =>
							0 < e1.post.length && (
								<ExperiencesList data={e1} key={i} />
							)
					)}
				</>
			))}
			<ContactButton />
		</>
	);
}

Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	let data = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
	).then((res) => res.json());

	return {
		props: {
			data,
		},
	};
}
