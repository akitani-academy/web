import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import List from "components/widget/LinkList";
import ExperiencesList from "components/widget/ExperiencesList";

import css from "styles/View.module.scss";

import { useRouter } from "next/router";

export default function Page({ data }) {
	const router = useRouter();
	return (
		<>
			<Head title="合格実績と体験記" breadcrumb={[["実績", "/experiences"]]} />
			<h1>合格実績 と 体験記</h1>
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
										<div className={css.experiences}>
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
