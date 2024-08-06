/* eslint-disable react/no-unknown-property */
// const _V = require("components/_V");

import Image from "next/image";
import Link from "next/link";

import classNames from "classnames";
import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Head from "components/head";
import Header from "components/header";
import Footer from "components/footer";
import Nav from "components/nav";
import LinkList from "components/widget/LinkList";
// import TopSlideshow from "components/TopSlideshow/TopSlideshow";
import TopSwiperSlide from "components/TopSwiperSlide/TopSwiperSlide";
import LoopCarousel from "components/widget/LoopCarousel";
import Button from "components/Button/Button";
import ExperiencesListBox from "components/Experiences/ExperiencesListBox";
import ContactButton from "components/ContactButton/ContactButton"

import css_index from "styles/index.module.scss";

import Logo from "/public/curriculum.svg";

export default function Page({ top, courseData, classtypeData, teacherList, experiencesData }) {

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// カルーセルにする画像のソースをリストにします
const images = ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg"];

export default function Page({
  top,
  courseData,
  classtypeData,
  teacherList,
  experiencesData,
}) {
	// TASK: 先生のカードリストのオートスクロールを実装予定
	// let teacherListOdd = teacherList.filter(num => Number(num) % 2 !== 0);
	// let teacherListEven = teacherList.filter(num => Number(num) % 2 === 0);

	return (
		<>
			<Head
				title="英語専門塾 秋谷光子アカデミィ - 英検1級176人合格の圧倒的な実績｜横浜,綱島,自由が丘,田園調布"
				url=""
				description={top.cfs.description}
				breadcrumb={[
					["トップページ", ""]
				]}
			/>

			<TopSlideshow />

			<main className={css_index.main}>
				<article>

					{top.feature.map((e, i) => (
						<div
							id={i}
							key={i}
							className={classNames(
								css_index.card,
								{ [css_index.bg]: e.title },
								{ [css_index.news]: e.option == "news" },
								{ [css_index.marginBottom]: ["news", "experiences", "experiences2", "experiences3"].includes(e.option) }
							)}
						>
							<div
								className={css_index.box}
							>
								{e.title && (
									<h2
										key={i}
									>
										<div
											className={css_index.subTitle}
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
								{e.LinkList && (
									<div className={css_index.more}>
										<LinkList
											data={e.LinkList.map(item => [
												item.Link.text,
												item.Link.url
											])} />
									</div>
								)}
								{e.option == "experiences" && (
									<ExperiencesListBox
										data={experiencesData}
										filter={{ parent: ['eiken', 'child_eiken'] }}
										button={{
											text: "すべての「 英検合格実績 」をみる",
											link: "/experiences#eiken"
										}}
									/>
								)}
								{e.option == "experiences2" && (
									<ExperiencesListBox
										data={experiencesData}
										filter={{ parent: ['college'] }}
										button={{
											text: "すべての「 大学合格実績 」をみる",
											link: "/experiences#college"
										}}
									/>
								)}
								{e.option == "experiences3" && (
									<ExperiencesListBox
										data={experiencesData}
										filter={{ parent: ['student', "highschool", 'child_eiken'] }}
										button={{
											text: "すべての「 小中学生の実績 」をみる",
											link: "/experiences#student"
										}}
									/>
								)}
								{e.option == "course_and_classtype" && (
									<>
										<div
											className={css_index.courseBox}
										>
											{courseData.map((e, i) => (
												<Button href={`/course/${e.slug}#content`} key={i}>
													{e.title}<small>コース</small>
												</Button>
											))}
										</div>


										{/* <Link legacyBehavior href={"/course_and_classtype"}>
											<a className={css_index.courseAndClasstype}>
												<section
													className={
														course_and_classtype.slect +
														" " +
														css_index.wrap +
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
										</Link> */}
									</>
								)}
								{e.option == "curriculum" && (
									<Link legacyBehavior href={"/レベル別カリキュラム.pdf"}>
										<a target="_blank" aria-label="秋谷光子アカデミィのレベル別カリキュラムについて">
											<div className={css_index.curriculum}>
												<Logo />
											</div>
										</a>
									</Link>
								)}
								{/* {e.option == "teacher" && (
								<>
									<LoopCarousel>
										<div className={css_index.teacherList}>
											<ul>
												{teacherListOdd.map((e, i) => (
													<li key={i} className={css_index.teacher}>
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
													<li key={i} className={css_index.teacher}>
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
								{e.gallery && (
									<LoopCarousel>
										<ul className={css_index.gallery}>
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
      
      {/* <TopSlideshow /> */}

      <main className={css_index.main}>
        <div className={css_index.fv}>
          <div className={css_index.fv__inner}>
            <ul>
              <li>英検上位級</li>
              <li>難関大学合格</li>
            </ul>
            <h2>
              志望校合格<span className={css_index.small}>に</span>導く
              <span className={css_index.block}>大学受験英語塾</span>
            </h2>
            <p>
              <span>難関大学合格、内部進学、留学、</span>
              <span>全ての進路を可能にする英語力を育てます。</span>
            </p>
            <div className={css_index.success}>
              <img
                src="./img/top/success_01.png"
                alt="英検1級合格 累計 178名"
              />
              <img
                src="./img/top/success_02.png"
                alt="英検1級合格 合計 42名 在籍"
              />
            </div>
            <div className={css_index.cta}>
              <p>
                <span className={css_index.red_balloon}>
                  最短で目標達成できるカリキュラムをご案内
                </span>
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </div>

        <section className={`${css_index.section} ${css_index.section_01}`}>
          <div
            className={`${css_index.section__inner} ${css_index.section_01__inner}`}
          >
            <h2>
              東大・早慶・上智大など<span>第一志望校に9割以上合格</span>
            </h2>

            <h3>
              <span>2023年合格大学</span>
            </h3>

            <div className={css_index.box}>
              <h4>国立大学</h4>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <ul>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>東京大学</span>
                      <span className={css_index.red}>1</span>名
                    </span>
                  </li>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>一橋大学</span>
                      <span className={css_index.red}>1</span>名
                    </span>
                  </li>
                  <li>・東京工業大学（1名）</li>
                  <li>・横浜国立大学（1名）</li>
                </ul>
              </div>
              <div
                className={`${css_index.box__item} ${css_index.box__item_02}`}
              >
                <ul>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>早稲田大学</span>
                      <span className={css_index.red}>4</span>名
                    </span>
                  </li>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>慶応大学</span>
                      <span className={css_index.red}>12</span>名
                    </span>
                  </li>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>上智大学</span>
                      <span className={css_index.red}>1</span>名
                    </span>
                  </li>
                  <li>・青山学院大学（2名）</li>
                  <li>・明治大学（1名）</li>
                </ul>
              </div>
            </div>

            <p>
              <span className={css_index.block}>その他多数の方が</span>
              <span className={css_index.block}>
                第一志望校に合格しております。
              </span>
            </p>
          </div>
        </section>
        <section className={`${css_index.section} ${css_index.section_02}`}>
          <h2 className={css_index.title_blue}>
            <span>大学受験・英検合格者の声</span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_02__inner}`}
          >
            <h3>
              <span className={css_index.block}>基礎レベルから4技能と</span>
              <span className={css_index.block}>受験英語をマスターして</span>
              <span className={css_index.block}>
                英検上位級・難関大学合格へ
              </span>
            </h3>

            {/* <TopSwiperSlide /> */}
            {/* 
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1} //一度に表示するスライドの数
              pagination={{
                clickable: true,
              }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
              navigation //スライドを前後させるためのボタン、スライドの左右にある
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {experiencesData[1].child_list[0].post.map(
                (src: string, index: number) => {
                  return (
                    <SwiperSlide key={`${index}`}>
                      <Image
                        src={src}
                        layout="responsive"
                        width={640}
                        height={400}
                        alt="test_image"
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper> */}

            <div className={css_index.box}>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <h4>
                  英検合格実績<span>過去1年間（2022年第3回〜2023年第2回）</span>
                </h4>

                <div
                  className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                >
                  <h5>1級（8名）</h5>
                  <ul>
                    <li>横浜市立日吉台西中学校 1年</li>
                    <li>フェリス女学院高校 1年</li>
                    <li>桜蔭学園高校 1年</li>
                    <li>慶応義塾高校 3年</li>
                  </ul>
                  <h5>準1級（15名）</h5>
                  <ul>
                    <li>雙葉学園小学校 6年</li>
                    <li>田園調布雙葉中学校 3年</li>
                  </ul>

                  <a href={`/course/eikenn-pass`}>さらに見る</a>
                </div>
              </div>
            </div>
            <div className={css_index.box}>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <h4>2023年大学合格実績</h4>

                <div
                  className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                >
                  <h5>2023年大学合格実績</h5>
                  <ul>
                    <li>東京大学 理科Ⅱ類 合格（開成高校）</li>
                    <li>東京工業大学 生命理工学院 合格（麻布高校）</li>
                    <li>一橋大学 法学部 合格（豊島岡女子高校）</li>
                    <li>横浜国立大学 理工学部 合格（桐光学園高校）</li>
                  </ul>
                  <h5>内進を含む主な合格大学</h5>
                  <ul>
                    <li>慶応大学 合格（10名）</li>
                    <li>早稲田大学 合格（2名）</li>
                  </ul>

                  <a href={`/course/college`}>さらに見る</a>
                </div>
              </div>
            </div>
            <div className={css_index.box}>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <h4>
                  TOEFL実績<span>過去2年間</span>
                </h4>

                <div
                  className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                >
                  <h5>IBT （120点満点）</h5>
                  <ul>
                    <li>105 慶応大学2年</li>
                    <li>102 医師</li>
                    <li>90 国家公務員</li>
                    <li>90 慶應義塾高校3年</li>
                  </ul>
                  <h5>ITP （677点満点）</h5>
                  <ul>
                    <li>610 慶應大学3年</li>
                    <li>601 横浜国立大学3年</li>
                  </ul>

                  <a href={`/course/toefl`}>さらに見る</a>
                </div>
              </div>
            </div>
            <div className={css_index.box}>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <h4>
                  TOEIC実績<span>過去2年間</span>
                </h4>

                <div
                  className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                >
                  <h5>TOEIC （990点満点）</h5>
                  <ul>
                    <li>985 メーカー勤務</li>
                    <li>975 IT企業勤務</li>
                    <li>960 外資系企業勤務</li>
                    <li>935 慶応大学3年</li>
                    <li>905 早稲田大学4年</li>
                    <li>900 塾講師</li>
                  </ul>

                  <a href={`/course/toeic`}>さらに見る</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_03}`}>
          <h2 className={css_index.title_blue}>
            <span>
              <span className={css_index.block}>難関大学合格を確実にする</span>
              <span className={css_index.block}>秋谷アカデミィで</span>
              <span className={css_index.block}>後悔しない塾選びを</span>
            </span>
          </h2>

          <div
            className={`${css_index.section__inner} ${css_index.section_03__inner}`}
          >
            <h3>
              <span className={css_index.block}>
                当アカデミィにご相談いただく
              </span>
              <span className={css_index.block}>
                生徒の課題・お悩みをご紹介
              </span>
            </h3>

            <ul>
              <li>
                <span className={css_index.block}>正しい受験英語の</span>
                <span className={css_index.block}>学習方法がわからない</span>
              </li>
              <li>
                <span className={css_index.block}>英語が最も苦手で</span>
                <span className={css_index.block}>受験の足を引っ張ると</span>
                <span className={css_index.block}>焦っている</span>
              </li>
              <li>
                <span className={css_index.block}>具体的な自分の弱点が</span>
                <span className={css_index.block}>分析できていない</span>
              </li>
              <li>部活との両立が難しい</li>
              <li>
                <span className={css_index.block}>帰国子女なのに</span>
                <span className={css_index.block}>英語力が日に日に</span>
                <span className={css_index.block}>落ちていく</span>
              </li>
              <li>
                <span className={css_index.block}>英語をマスターして</span>
                <span className={css_index.block}>将来英語を使って</span>
                <span className={css_index.block}>活躍したい</span>
              </li>
            </ul>

            <div className={css_index.box}>
              <h4>
                <span>他にもこんな相談を受けております</span>
              </h4>

              <div className={css_index.box__item}>
                <img src="./img/top/section03_item01.png" />
                <p>
                  <span>
                    <span className={css_index.block}>受験失敗を通して、</span>
                    <span className={css_index.block}>
                      圧倒的英語力の乏しさを痛感…
                    </span>
                    <span className={css_index.block}>
                      自宅浪人では限界を感じている
                    </span>
                  </span>
                </p>
              </div>
              <div className={css_index.box__item}>
                <img src="./img/top/section03_item02.png" />
                <p>
                  <span>
                    <span className={css_index.block}>
                      文法・リーディングは
                    </span>
                    <span className={css_index.block}>
                      自信あるけど、リスニングと
                    </span>
                    <span className={css_index.block}>
                      英会話のスピーキングが苦手…
                    </span>
                  </span>
                </p>
              </div>
              <div className={css_index.box__item}>
                <img src="./img/top/section03_item03.png" />
                <p>
                  <span>
                    <span className={css_index.block}>
                      英検2級まではもっているけど
                    </span>
                    <span className={css_index.block}>
                      準１級の壁を超えられない…
                    </span>
                  </span>
                </p>
              </div>
              <div className={css_index.box__item}>
                <img src="./img/top/section03_item04.png" />
                <p>
                  <span>
                    <span className={css_index.block}>
                      第一志望に必ず受かりたいため
                    </span>
                    <span className={css_index.block}>
                      実績と実力のある講師に
                    </span>
                    <span className={css_index.block}>本気で教えて欲しい</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${css_index.section} ${css_index.section_04}`}>
          <h2>
            <span>
              <span className={css_index.block}>秋谷光子アカデミィでは</span>
              <span className={css_index.block}>
                上記のような課題を解決するため
              </span>
              <span className={css_index.block}>
                <span className={css_index.text_red}>一人ひとり塾長面談</span>
                を行った上で、
              </span>
              <span className={css_index.block}>
                <span className={css_index.text_red}>
                  最適なカリキュラムと学習法
                </span>
                を
              </span>
              <span className={css_index.block}>ご案内します。</span>
            </span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_04__inner}`}
          >
            <h3>
              <span>英語塾選びでよくある落とし穴</span>
            </h3>

            <h4>
              <span className={css_index.block}>
                当アカデミィにご相談いただく
              </span>
              <span className={css_index.block}>
                生徒の課題・お悩みをご紹介
              </span>
            </h4>

            <div className={`${css_index.box} ${css_index.box_01}`}>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h5>
                  学力・レベルを<span>無視したクラス編成</span>
                </h5>
                <p>参加したクラスと自分のレベルに差がある</p>
              </div>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h5>
                  大学生のアルバイトが<span>講師として教えている</span>
                </h5>
                <p>指導経験不足により適切でわかりやすい指導をしてくれない</p>
              </div>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h5>
                  ビデオ学習が<span>メインの学習方法</span>
                </h5>
                <p>学習中の疑問をすぐに解決できない</p>
              </div>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h5>大人数での集団授業</h5>
                <p>
                  1人1人の発音やスピーキングの確認や訂正をしてくれない質問もしにくい
                </p>
              </div>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h5>
                  授業以外の学習は<span>全て自己管理</span>
                </h5>
                <p>勉強の仕方がわからないから成績が伸びない</p>
              </div>
            </div>
          </div>

          <div
            className={`${css_index.section_04__bottom} ${css_index.section_04__bottom}`}
          >
            <h2>
              <span className={css_index.block}>秋谷光子アカデミィなら</span>
              <span className={css_index.block}>
                上記のような心配はいりません。
              </span>
              <span className={css_index.block}>
                <span className={css_index.text_red}>最高の学習環境</span>と
                <span className={css_index.text_red}>実績ある講師陣</span>が
              </span>
              <span className={css_index.block}>目標達成へ導きます。</span>
            </h2>

            <div className={`${css_index.box} ${css_index.box_01}`}>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h3>当アカデミィの学習環境ご案内</h3>
                <div>
                  <ul>
                    <li>レベル別コース・カリキュラムをご用意</li>
                    <li>英検1級 講師42名、学生講師はいません</li>
                    <li>英検1級講師が指導</li>
                    <li>
                      英検1級講師がグループ指導は6名までの少人数制で、1対1個別指導も実力ある英検1級講師が指導
                    </li>
                    <li>
                      授業以外の学習方法から将来のキャリアで役に立つ英語力まで幅広くご指導可能
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={css_index.cta_box}>
            <h2>
              <span className={css_index.balloon}>
                最短距離で目標達成できる
              </span>
              <span className={css_index.block}>カリキュラムをご案内</span>
            </h2>

            <div className={css_index.cta}>
              <p>
                まずは
                <span className={css_index.red_box}>無料体験レッスン</span>
                <span className={css_index.red_box}>資料請求</span>
                から
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_05}`}>
          <h2 className={css_index.title_blue}>
            <span>
              <span className={css_index.block}>秋谷光子アカデミィが</span>
              <span className={css_index.block}>英検や大学受験に強い理由</span>
            </span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_04__inner}`}
          >
            <div className={css_index.course}>
              <div className={css_index.course__item}>
                <h3>
                  <span className={css_index.block}>
                    英検1級講師による6人までの
                  </span>
                  <span className={css_index.block}>
                    グループ指導と1対1個人指導
                  </span>
                </h3>

                <p>
                  グループ指導は学年ごとに、学習目的と習熟度に合わせた6人までの少人数クラス。1対1個人指導は学習目標に合わせた個別のカリキュラムとスケジュールを作成し、倍速でレベルUP。振替え受講も可能です。
                  入塾の際に塾長が面談を行い、お一人お一人に合わせて最短距離で目標達成できるカリキュラムと学習法をご案内いたします。
                </p>

                <div className={css_index.box}>
                  <div className={css_index.box__item}>
                    <dl>
                      <dt>1対1個人指導</dt>
                      <dd>
                        <span className={css_index.block}>
                          個別マンツーマンの
                        </span>
                        <span className={css_index.block}>
                          オリジナルカリキュラム
                        </span>
                      </dd>
                    </dl>
                    <a href="#">コース一覧はこちら</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

			<ContactButton />

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

	// const classtypeData = await fetch(
	// 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
	// ).then((res) => res.json());

	let top = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/7284"
	).then((res) => res.json());
	top.feature = Object.values(top.feature);

	let experiencesData = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
	).then((res) => res.json());

	// console.log(experiencesData)

	// let teacherList = await fetch(
	// 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
	// ).then((res) => res.json());
	// teacherList = teacherList.sort((a, b) => a.infoCount - b.infoCount).reverse();

	return {
		props: {
			top,
			// experiences: await fetch(
			// 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
			// ).then((res) => res.json()),
			courseData: courseData.reverse(),
			// classtypeData: classtypeData.reverse(),
			experiencesData
			// teacherList
		},
	};
}
