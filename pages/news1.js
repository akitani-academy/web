import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Image from "next/image";

import Layout from "components/layout";
import Head from "components/head";
import Contact from "components/widget/Contact";
import ContactButton from "components/ContactButton/ContactButton";
import ExperiencesListBox from "components/Experiences/ExperiencesListBox";

import Link from "next/link";

import css_global from "styles/global.module.scss";
import css_contact from "styles/contact.module.scss";
import css_news from "styles/news1.module.scss";
export default function Page({ wpDATA, experiencesData, newsArchiveData }) {


  return (
    <>
      <Head
        url={"/news1"}
        title={wpDATA.title + "｜NEWS"}
        description={wpDATA.summary.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")}
        breadcrumb={[
          ["トップページ", ""],
          [wpDATA.subTitle, "/news1"],
        ]}
      />
      <article className={css_news.card}>
        <h1
          dangerouslySetInnerHTML={{
            __html: parser.translateHTMLString(newsArchiveData[0].title),
          }}
        />
        <div
          className={css_news.news}
          dangerouslySetInnerHTML={{
            __html: parser.translateHTMLString(newsArchiveData[0].content),
          }}
        />
      </article>

      <article className={`${css_news.past} ${css_news.card}`}>
        <h2 className={css_news.title}>過去のニュース</h2>
        {newsArchiveData.map((e, i) => (
          <>
            <div className={css_news.row}>
              <Link href={"/news-archive/" + e.slug} className={css_news.link}>
                    {e.title}
              </Link>
            </div>
          </>
        ))}
      </article>

      <aside className={css_contact.contact}>
        <Contact short="true" />
      </aside>
      <ContactButton />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  let wpDATA = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=news"
  ).then((res) => res.json());
  wpDATA = wpDATA[0];

  let experiencesData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
  ).then((res) => res.json());

  let newsArchiveData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/news-archive"
  ).then((res) => res.json());

  return {
    props: {
      wpDATA,
      experiencesData,
      newsArchiveData,
    },
  };
}
