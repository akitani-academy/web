import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import css from "styles/index.module.scss";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

export default function Page({ top, news, experiences }) {
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
            </>
          ))}
          {/* {experiences.map((e, i) => (
        <>
          <h2 id={e.slug} key={i} className={css.h2}>
            {e.name}
            {e.description && <small>{e.description}</small>}
          </h2>
          {e.child_list.map((e1, i) => (
            <>
              <section id={e1.slug}>
                <div className={css.experiences}>
                  <div className={css.shortTitle}>
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
                    <div className={css.data}>
                      過去1年：{e1.yearCount}名<br />
                      累計：{e1.count}名
                    </div>
                  </div>
                  <ExperiencesList data={e1} />
                </div>
              </section>
            </>
          ))}
        </>
      ))} */}
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
    },
  };
}
