/* eslint-disable react/no-unknown-property */

import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import css from "styles/index.module.scss";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Select from "components/widget/Select";

import course_and_classtype from "styles/course_and_classtype.module.scss";

import Logo from "/public/curriculum.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Slideshow from "components/widget/Slideshow"
import LinkList from "components/widget/LinkList";

import UseSWR from "swr";
function lbState() {
	const { lbData, lbMutate } = UseSWR("lb_state", () => window.count);
	return {
		lbData: lbData || false,
		lbMutate: (count) => {
			window.count = count;
			lbMutate();
		},
	};
}

import { useEffect } from "react";

import LoopCarousel from 'components/widget/LoopCarousel';
import styles from 'styles/LoopCarousel.module.scss';
export default function Page({ top, news, courseData, classtypeData, teacherList }) {
	const { lbData, lbMutate } = lbState();
	const handleIncFC = () => lbMutate(!lbData);

	useEffect(() => {
		resize();
		window.addEventListener("resize", resize);
		// document.addEventListener("load", resize);
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
	});

	const nowImg =
		"https://akitani-academy.jp/_next/image?url=https%3A%2F%2Fyoshikitam.wpx.jp%2Fakitani%2Fwp-content%2Fuploads%2F2022%2F04%2F292A1543.jpg&w=1920&q=75";
	const imgList = [
		"https://akitani-academy.jp/_next/image?url=https%3A%2F%2Fyoshikitam.wpx.jp%2Fakitani%2Fwp-content%2Fuploads%2F2022%2F04%2F292A1543.jpg&w=1920&q=75",
		"https://akitani-academy.jp/_next/image?url=https%3A%2F%2Fyoshikitam.wpx.jp%2Fakitani%2Fwp-content%2Fuploads%2F2022%2F04%2F292A1663.jpg&w=1920&q=75",
	];

	// console.log(teacherList)
	let teacherListOdd = teacherList.filter(num => Number(num) % 2 !== 0);
	let teacherListEven = teacherList.filter(num => Number(num) % 2 === 0);
	// console.log(news)


	return (
		<>
			<Head
				description={top.description}
			/>
			<section className={css.top}>
				<section className={css.topImg}>
					<div className={css.bg}>
						<Slideshow images={[
							{
								alt: "秋谷光子アカデミィの田園調布校の写真",
								src: "/miniDSC_1875.jpg",
								width: 2100,
								height: 1395
							}, {
								alt: "秋谷光子アカデミィの講師による授業風景",
								src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/02/292A1372.jpg",
								width: 2048,
								height: 1365
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
				{/* <section className={css.news}>
					<h2 data-subTitle="NEWS">{news.title}</h2>
					<Link legacyBehavior href={"/news"}>
						<a>
							{news.title}（<date>{news.date}</date>）
						</a>
					</Link>
				</section> */}
			</section>
			<main className={css.main}>
				<article>

					<section className={css.news}>
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
					</section>


					{top.feature.map((e, i) => (
						<>
							<h2
								dangerouslySetInnerHTML={{
									__html: parser.translateHTMLString(e.title),
								}}
								key={i}
								id={i}
							></h2>
							<article
								dangerouslySetInnerHTML={{
									__html: parser.translateHTMLString(e.body),
								}}
							></article>
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
														<li key={i}>
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
												// layout="fill"
												// objectFit="cover"
												></Image>
											</li>
										))}
									</ul>
								</LoopCarousel>
							)}
						</>
					))}
				</article>
				<Nav />
			</main>
			{lbData == "true" && (
				<section className={lbState + " lb_" + String(lbData)}>
					<div>
						<Image src={nowImg} layout="fill" objectFit="cover"></Image>
					</div>
					<ul>
						{imgList.map((e, i) => (
							<li key={i}>
								<Image
									src={imgList[i]}
									layout="fill"
									objectFit="cover"
									alt={`秋谷光子アカデミィの校内の写真${i}`}
									fill
									sizes="33vw"
								/>
							</li>
						))}
					</ul>
				</section>
			)}
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

import Header from "components/header";
import Footer from "components/footer";
import Nav from "components/nav";
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

	let teacherList = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
	).then((res) => res.json());
	teacherList = teacherList.sort((a, b) => a.infoCount - b.infoCount).reverse();

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
			teacherList
		},
	};
}
