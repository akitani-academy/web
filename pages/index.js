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
  newsArchiveData,
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
          <div className={`${css_index.news} ${css_index.card}`}>
            <div className={css_index.box}>
              <h2>
                <div className={css_index.subTitle}>NEWS</div>
                <div>{newsArchiveData.title}</div>
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: parser.translateHTMLString(newsArchiveData.content),
                }}></div>
              <div className={css_index.breakingNews}>
                <Link href={"/news1"}>
                  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25813 3.51613L8.742 7L5.25813 10.4839" stroke="white" stroke-width="1.16129" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  {newsArchiveData.title + "を見る"}
                </Link>
              </div>
            </div>
          </div>
          {top.feature.map((e, i) => (
            <div
              id={i}
              key={i}
              className={classNames(
                css_index.card,
                { [css_index.bg]: e.title },
                // { [css_index.news]: e.option == "news" },
                {
                  [css_index.marginBottom]: [
                    // "news",
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

  // let teacherList = await fetch(
  // 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
  // ).then((res) => res.json());
  // teacherList = teacherList.sort((a, b) => a.infoCount - b.infoCount).reverse();

  let newsArchiveData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/news-archive"
  ).then((res) => res.json());
  newsArchiveData = newsArchiveData[0];

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
      newsArchiveData,
    },
  };
}
