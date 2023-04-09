import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import LinkList from "components/widget/LinkList";

import css from "styles/View.module.scss";

function Page({ data, name }) {
	let router = useRouter();
	let now = router.query[name];
	if (now) {
		if (now == "schoolup") {
			now = "junior-high";
		}
		data = data.find(function (e) {
			return e.slug === now;
		});
		return (
			<>
				<section className={css.View}>
					<h2
						className={css.title}
						id={name}
						data-subtitle={name == "course" ? "コース" : "授業形態"}
					>
						<span>{data.title}</span>{name == "course" ? "コース" : ""}
					</h2>
					<section className={css.flex}>
						<article className={css.article}>
							{data.gallery && (
								<div className={css.gallery}>
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
							<h3>コースの説明</h3>
							<div
								className={css.courseBody}
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
							<section className={css.taikenki}>
								<div className={css.inner}>
									<h4>体験記</h4>
									<div className={css.scroll}>
										<ul>
											{data.post.map((e, i) => (
												<li key={i}>
													<Link legacyBehavior href={"/experiences/" + e.id}>
														<a>
															<span className={css.taikenki_title}>
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
										<a className={css.more}>
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
