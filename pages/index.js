/* eslint-disable react/no-unknown-property */

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Head from "components/head";
import Header from "components/header";
import Footer from "components/footer";
import Nav from "components/nav";
import LinkList from "components/widget/LinkList";
import Select from "components/widget/Select";
import Slideshow from "components/widget/Slideshow"
import LoopCarousel from 'components/widget/LoopCarousel';

import css from "styles/index.module.scss";
import course_and_classtype from "styles/course_and_classtype.module.scss";
// import styles from 'styles/LoopCarousel.module.scss';
import Logo from "/public/curriculum.svg";
import classNames from "classnames";

export default function Page({ top, news, courseData, classtypeData, teacherList }) {

	useEffect(() => {
		resize();
		window.addEventListener("resize", resize);
		function resize() {
			if (450 > window.innerWidth) {
				document.querySelector(".selectArea").style.transform =
					"scale(" + window.innerWidth / 450 + ")";
				document.querySelector(".selectArea").style.width =
					100 * (450 / window.innerWidth) + "vw";
			} else {
				document.querySelector(".selectArea").style.transform = "";
				document.querySelector(".selectArea").style.width = "";
			}
		}
	}, []);

	// TASK: 先生のカードリストのオートスクロールを実装予定
	// let teacherListOdd = teacherList.filter(num => Number(num) % 2 !== 0);
	// let teacherListEven = teacherList.filter(num => Number(num) % 2 === 0);

	return (
		<>
			<Head
				description={top.cfs.description}
			/>
			<section className={css.top}>
				<section className={css.topImg}>
					<div className={css.bg}>
						<Slideshow images={[
							{
								alt: "秋谷光子アカデミィの講師による授業風景",
								src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/02/292A1372.jpg",
								width: 2048,
								height: 1365
							}, {
								alt: "秋谷光子アカデミィの田園調布校の写真",
								src: "/miniDSC_1875.jpg",
								width: 2100,
								height: 1395
							}, {
								alt: "秋谷光子アカデミィの講師による中学生の授業風景",
								src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/02/292A1785.jpg",
								width: 2048,
								height: 1365
							}, {
								alt: "秋谷光子アカデミィの講師による先生の授業風景",
								src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/02/292A1558.jpg",
								width: 2048,
								height: 1365
							}, {
								alt: "秋谷光子アカデミィの講師による大学生の授業風景",
								src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/02/292A1398.jpg",
								width: 2048,
								height: 1365
							}, {
								alt: "秋谷光子アカデミィの綱島校の写真",
								src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/04/292A1543.jpg",
								width: 2048,
								height: 1365
							}, {
								alt: "秋谷光子アカデミィの中高生の授業風景",
								src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2023/04/DSC01268のコピー.jpg",
								width: 2048,
								height: 1365
							}
						]} seconds={5} />
					</div>
					<div>
						<h2 className={css.messageH2}>
							英検に <wbr />
							合格しながら、
							<wbr />
							大学合格を果たす
							<wbr />
							英語塾。
						</h2>
						<h3>
							社会人をはじめ、
							<wbr />
							小学校で3級、
							<wbr />
							中学校で2級、
							<wbr />
							高校で準1級も多数合格。
						</h3>
					</div>
				</section>
			</section>
			<main className={css.main}>
				<article>

					{/* <section className={classNames(
						css.news,
						// css.card
					)}>
						<h2 data-subTitle={`NEWS｜${news.date}`}>{news.title}</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: parser.translateHTMLString(news.summary),
							}}>
						</p>
						<div className={css.more}>
							<LinkList data={[
								["詳しく見る", "/news"],
							]} />
						</div>
					</section> */}

					{top.feature.map((e, i) => (
						<div
							id={i}
							key={i}
							className={classNames(
								css.card,
								{ [css.bg]: e.title },
								{ [css.news]: e.option == "news" }
							)}
						>
							<div
								className={css.box}
							>
								{e.title && (
									<h2
										key={i}
									>
										<div
											className={css.subTitle}
											dangerouslySetInnerHTML={{
												__html: parser.translateHTMLString(e.subTitle),
											}}
										/>
										<div
											dangerouslySetInnerHTML={{
												__html: parser.translateHTMLString(e.title),
											}}
										/>
									</h2>
								)}
								<div
									dangerouslySetInnerHTML={{
										__html: parser.translateHTMLString(e.body),
									}}
								></div>
								{e.option == "course_and_classtype" && (
									<Link legacyBehavior href={"/course_and_classtype"}>
										<a className={css.courseAndClasstype}>
											<section
												className={
													course_and_classtype.slect +
													" " +
													css.wrap +
													" selectArea"
												}
											>
												<div className={course_and_classtype.child}>
													<div className={course_and_classtype.main}>
														<div className={course_and_classtype.inputTitle}>コース</div>
														<Select data={courseData} name={"course"} />
													</div>
													<ul>
														{courseData.map((e, i) => (
															<li key={`${e}-${i}`}>
																<input
																	id={e.id}
																	type="radio"
																	name={"courseR"}
																	value={e.title}
																/>
																<label htmlFor={e.id}>{e.title}</label>
															</li>
														))}
													</ul>
												</div>
												<img src="x.svg" width={"26px"} height={"26px"} alt="掛け算のアイコン" />
												<div className={course_and_classtype.child}>
													<div className={course_and_classtype.main}>
														<div className={course_and_classtype.inputTitle}>授業形態</div>
														<Select data={classtypeData} name={"classtype"} />
													</div>
													<ul>
														{classtypeData.map((e, i) => (
															<li key={i}>
																<input
																	id={e.id}
																	type="radio"
																	name={"classtypeR"}
																	value={e.title}
																/>
																<label htmlFor={e.id}>{e.title}</label>
															</li>
														))}
													</ul>
												</div>
											</section>
										</a>
									</Link>
								)}
								{e.option == "curriculum" && (
									<Link legacyBehavior href={"/レベル別カリキュラム.pdf"}>
										<a target="_blank" aria-label="秋谷光子アカデミィのレベル別カリキュラムについて">
											<div className={css.curriculum}>
												<Logo />
											</div>
										</a>
									</Link>
								)}
								{/* {e.option == "teacher" && (
								<>
									<LoopCarousel>
										<div className={css.teacherList}>
											<ul>
												{teacherListOdd.map((e, i) => (
													<li key={i} className={css.teacher}>
														{e.img && (
															<div>
																<Image
																	src={e.img}
																	alt={e.name + "先生の写真"}
																	layout="responsive"
																	width={6240}
																	height={4160}
																></Image>
															</div>
														)}
														<div>{e.name}</div>
														{e.license}
														{e.other && (
															<>
																<p>{e.other}</p>
															</>
														)}
													</li>
												))}
											</ul>
											<ul>
												{teacherListEven.map((e, i) => (
													<li key={i} className={css.teacher}>
														{e.img && (
															<div>
																<Image
																	src={e.img}
																	alt={e.name + "先生の写真"}
																	layout="responsive"
																	width={6240}
																	height={4160}
																></Image>
															</div>
														)}
														<div>{e.name}</div>
														{e.license}
														{e.other && (
															<>
																<p>{e.other}</p>
															</>
														)}
													</li>
												))}
											</ul>
										</div>
									</LoopCarousel>
								</>
							)} */}
								{e.LinkList && (
									<div className={css.more}>
										<LinkList
											data={e.LinkList.map(item => [
												item.Link.text,
												item.Link.url
											])} />
									</div>
								)}
								{e.gallery && (
									<LoopCarousel>
										<ul className={css.gallery}>
											{Object.entries(e.gallery).map((e1, i) => (
												<li key={i}>
													<Image
														alt={"秋谷光子アカデミィの" + i + "番目の内装の写真"}
														src={e1[1].img}
														width={"400"}
														height={"300"}
													></Image>
												</li>
											))}
										</ul>
									</LoopCarousel>
								)}
							</div>
						</div>
					))}
				</article>
				<Nav />
			</main>
			<style jsx>{`
				h2 {
					font-size: 1.875rem;
				}
				h2 span {
					display: inline-block;
				}
				@media (max-width: 600px) {
					h2 {
						font-size: 1.5rem;
					}
				}
			`}</style>
		</>
	);
}

Page.getLayout = function getLayout(children) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export async function getStaticProps() {
	const courseData = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100"
	).then((res) => res.json());
	const classtypeData = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
	).then((res) => res.json());

	let top = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/7284"
	).then((res) => res.json());
	top.feature = Object.values(top.feature);

	// let teacherList = await fetch(
	// 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
	// ).then((res) => res.json());
	// teacherList = teacherList.sort((a, b) => a.infoCount - b.infoCount).reverse();

	return {
		props: {
			top,
			news: await fetch(
				"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/6797"
			).then((res) => res.json()),
			experiences: await fetch(
				"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
			).then((res) => res.json()),
			courseData: courseData.reverse(),
			classtypeData: classtypeData.reverse(),
			// teacherList
		},
	};
}
