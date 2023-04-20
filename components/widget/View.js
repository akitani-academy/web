import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Head from "components/head";
import LinkList from "components/widget/LinkList";

import css_view from "styles/View.module.scss";

function Page({ data, name }) {
	let router = useRouter();
	let now = router.query[name];
	if (now) {
		data = data.find(function (e) {
			return e.slug === now;
		});
		return (
			<>
				<section className={css_view.View}>
					<h1
						className={css_view.title}
						// id={name}
						data-subtitle="秋谷光子アカデミィの"
					>
						<span>{data.title}</span>{name == "course" && "コース"}
					</h1>
					<section className={css_view.flex}>
						<article className={css_view.article}>
							{data.gallery && (
								<div className={css_view.gallery}>
									<ul>
										{data.gallery.map((e, i) => (
											<li key={i}>
												<Image
													src={e.img}
													width={"180"}
													height={"120"}
													objectFit={"cover"}
												/>
											</li>
										))}
									</ul>
								</div>
							)}
							<h3>{name == "course" ? "コース" : "授業形態"}の説明</h3>
							<div
								className={css_view.courseBody}
								dangerouslySetInnerHTML={{ __html: data.content }}
							/>
							{data.menu.length > 0 && (
								<>
									<h3>より具体的な合格対策</h3>
									<LinkList
										data={data.menu.map((e, i) => [
											e.title,
											"/method/" + e.slug,
										])}
									/>
								</>
							)}
						</article>
						{data.post.length > 0 && (
							<section className={css_view.taikenki}>
								<div className={css_view.inner}>
									<h4>体験記</h4>
									<div className={css_view.scroll}>
										<ul>
											{data.post.map((e, i) => (
												<li key={i}>
													<Link legacyBehavior href={"/experiences/" + e.id}>
														<a>
															<span className={css_view.taikenki_title}>
																{e.title}
															</span>
															<br />
															<span>{e.student}</span>
														</a>
													</Link>
												</li>
											))}
										</ul>
									</div>
									<Link legacyBehavior href={"/experiences"}>
										<a className={css_view.more}>
											<span>もっと見る</span>
										</a>
									</Link>
								</div>
							</section>
						)}
					</section>
				</section>
			</>
		);
	} else {
		return <></>;
	}
}

export default Page;
