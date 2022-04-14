import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import css from "styles/index.module.scss";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Select from "components/widget/Select";

import course_and_classtype from "styles/course_and_classtype.module.scss";

import Logo from "/public/curriculum.svg";

import { useEffect } from "react";

export default function Page({ top, news, courseData, classtypeData }) {
  useEffect(() => {
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
    document.addEventListener("DOMContentLoaded", resize);
  }, []);

  return (
    <>
      <Head />
      <section className={css.top}>
        <section className={css.topImg}>
          <div className={css.bg}>
            <Image
              src="/miniDSC_1875.jpg"
              layout="fill"
              objectFit="cover"
            ></Image>
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
        <section className={css.news}>
          <h6>NEWS</h6>
          <Link href={"/news"}>
            <a>
              {news.title}（<date>{news.date}</date>）
            </a>
          </Link>
        </section>
      </section>
      <main className={css.main}>
        <article>
          {top.feature.map((e, i) => (
            <>
              <h2
                dangerouslySetInnerHTML={{
                  __html: parser.translateHTMLString(e.title),
                }}
                key={i}
              ></h2>
              <article
                dangerouslySetInnerHTML={{
                  __html: parser.translateHTMLString(e.body),
                }}
              ></article>
              {e.option == "course_and_classtype" && (
                <Link href={"/course_and_classtype"}>
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
                          <h5>コース</h5>
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
                      <img src="x.svg" width={"26px"} height={"26px"} />
                      <div className={course_and_classtype.child}>
                        <div className={course_and_classtype.main}>
                          <h5>授業形態</h5>
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
                <Link href={"/レベル別カリキュラム.pdf"}>
                  <a target="_blank">
                    <div className={css.curriculum}>
                      <Logo />
                    </div>
                  </a>
                </Link>
              )}
            </>
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
  return {
    props: {
      top: await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/7284"
      ).then((res) => res.json()),
      news: await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/6797"
      ).then((res) => res.json()),
      experiences: await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
      ).then((res) => res.json()),
      courseData: courseData.reverse(),
      classtypeData: classtypeData.reverse(),
    },
  };
}
