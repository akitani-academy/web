import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import List from "components/widget/LinkList";
import ExperiencesList from "components/widget/ExperiencesList";

import css from "styles/View.module.scss";
import css_experiences from "styles/experiences.module.scss";

export default function Page({ data }) {
	return (
		<>
			<Head title="合格実績と体験記" breadcrumb={[["実績", "/experiences"]]} />
			<h1>合格実績 と 体験記</h1>
			<p>
				秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。圧倒的な実績に合わせて合格体験記を数多く掲載しております。
			</p>
			<List data={data.map((e, i) => [e.name, "#" + e.slug])} />
			{data.map((e, i) => (
				<>
					<h2 id={e.slug} key={i} className={css.h2}>
						{e.name}
						{e.description && <small>{e.description}</small>}
					</h2>
					{2 < e.child_list.length && (
						<List data={e.child_list.map((e, i) => [e.name, "#" + e.slug])} />
					)}
					{e.child_list.map(
						(e1, i) =>
							0 < e1.post.length && (
								<>
									<section id={e1.slug}>
										<div className={classNames(css.experiences, css_experiences.list)}>
											<div className={css.shortTitle}>
												{e1.img ? (
													<div className={css.titleImg}>
														<img src={e1.img} alt="" />
														{e1.description && (
															<>
																<small>{e1.description}</small>
															</>
														)}
													</div>
												) : (
													<div className={css.experiencesTitle}>
														<img src="/aa.svg" alt="" className={css.aa} />
														<h3 key={i}>
															{e1.name}
															{e1.description && (
																<>
																	<br />
																	<small>{e1.description}</small>
																</>
															)}
														</h3>
														<img src="/aa.svg" alt="" className={css.aa2} />
													</div>
												)}
												{0 < e1.countView && (
													<>
														<div className={css.data}>
															過去1年：{e1.yearCount}名<br />
															累計：{e1.count}名
														</div>
													</>
												)}
											</div>
											<ExperiencesList data={e1} />
										</div>
									</section>
								</>
							)
					)}
				</>
			))}
		</>
	);
}

import Layout from "/components/layout";
import classNames from "classnames";
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
