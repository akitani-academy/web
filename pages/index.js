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
import TopSlideshow from "components/TopSlideshow/TopSlideshow";
import LoopCarousel from "components/widget/LoopCarousel";
import Button from "components/Button/Button";
import ExperiencesListBox from "components/Experiences/ExperiencesListBox";
import ContactButton from "components/ContactButton/ContactButton";

import css_index from "styles/index.module.scss";

import Logo from "/public/curriculum.svg";

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
        title="英語専門塾 秋谷光子アカデミィ - 英検1級180人合格の圧倒的な実績｜横浜,綱島,自由が丘,田園調布"
        url=""
        description={top.cfs.description}
        breadcrumb={[["トップページ", ""]]}
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
                {
                  [css_index.marginBottom]: [
                    "news",
                    "experiences",
                    "experiences2",
                    "experiences3",
                  ].includes(e.option),
                }
              )}
            >
              <div className={css_index.box}>
                {e.title && (
                  <h2 key={i}>
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
                      data={e.LinkList.map((item) => [
                        item.Link.text,
                        item.Link.url,
                      ])}
                    />
                  </div>
                )}
                {e.option == "experiences" && (
                  <ExperiencesListBox
                    data={experiencesData}
                    filter={{ parent: ["eiken", "child_eiken"] }}
                    button={{
                      text: "すべての「 英検合格実績 」をみる",
                      link: "/experiences#eiken",
                    }}
                  />
                )}
                {e.option == "experiences2" && (
                  <ExperiencesListBox
                    data={experiencesData}
                    filter={{ parent: ["college"] }}
                    button={{
                      text: "すべての「 大学合格実績 」をみる",
                      link: "/experiences#college",
                    }}
                  />
                )}
                {e.option == "experiences3" && (
                  <ExperiencesListBox
                    data={experiencesData}
                    filter={{
                      parent: ["student", "highschool", "child_eiken"],
                    }}
                    button={{
                      text: "すべての「 小中学生の実績 」をみる",
                      link: "/experiences#student",
                    }}
                  />
                )}
                {e.option == "course_and_classtype" && (
                  <>
                    <div className={css_index.courseBox}>
                      {courseData.map((e, i) => (
                        <Button href={`/course/${e.slug}`} key={i}>
                          {e.title}
                          <small>コース</small>
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
                    <a
                      target="_blank"
                      aria-label="秋谷光子アカデミィのレベル別カリキュラムについて"
                    >
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
                            alt={
                              "秋谷光子アカデミィの" + i + "番目の内装の写真"
                            }
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
      experiencesData,
      // teacherList
    },
  };
}
