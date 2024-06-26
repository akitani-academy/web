import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Image from "next/image";

import Layout from "components/layout";
import Head from "components/head";
import Contact from "components/widget/Contact"
import ContactButton from "components/ContactButton/ContactButton"
import ExperiencesListBox from "components/Experiences/ExperiencesListBox";

import css_global from "styles/global.module.scss";
import css_contact from "styles/contact.module.scss";
export default function Page({ wpDATA, experiencesData }) {
  return (
    <>
      <Head
        url={"/news"}
        title={wpDATA.title + "｜NEWS"}
        description={wpDATA.summary.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')}
        breadcrumb={[
          ["トップページ", ""],
          [wpDATA.subTitle, "/news"]
        ]}
      />
      <article className={css_global.card}>
        <div className="thumbnail" >
          <Image
            alt={"秋谷光子アカデミィの生徒のの写真"}
            src={wpDATA.thumbnail}
            // width={"400"}
            // height={"300"}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <h1 data-subtitle={wpDATA.subTitle} dangerouslySetInnerHTML={{ __html: parser.translateHTMLString(wpDATA.title) }} />
        <div className="news" dangerouslySetInnerHTML={{ __html: parser.translateHTMLString(wpDATA.content) }} />
        <h2>当塾の実績</h2>
        <p>
          秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計176人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。
        </p>
        <ExperiencesListBox
          data={experiencesData}
          button={{
            text: "すべての「 実績と体験記 」をみる",
            link: "/experiences"
          }}
        />
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

  return {
    props: {
      wpDATA, experiencesData
    },
  };
}
