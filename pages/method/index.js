import classNames from "classnames";

import Layout from "components/layout";
import Head from "components/head";
import List from "components/widget/LinkList";
import ContactButton from "components/ContactButton/ContactButton"

import css_index from "styles/index.module.scss";


import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

export default function Page({
  paragraph,
  eiken,
  UniversityEntranceExams,
  toeic,
  toefl,
  gakko,
  other,
}) {

  // console.log(paragraph)
  return (
    <>
      <Head
        url={"/method"}
        title={paragraph.subTitle}
        breadcrumb={[
          ["トップページ", ""],
          ["合格への授業方針", "/method"]
        ]}
        description="秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。圧倒的な実績をもとにノウハウを合格への当塾の指導方針を公開しています。"
      />
      <article className={classNames(css_index.card, css_index.bg)}>
        <h1>{paragraph.subTitle}</h1>
        <div dangerouslySetInnerHTML={{
          __html: parser.translateHTMLString(paragraph.cfs.header),
        }} />
        <h2>英検合格対策</h2>
        <List data={eiken} />
        <h2>大学受験合格対策</h2>
        <List data={UniversityEntranceExams} />
        <h2>小中高校生の学校成績UP対策</h2>
        <List data={gakko} />
        <h2>TOEICの対策</h2>
        <List data={toeic} />
        <h2>IELTSとTOEFL対策</h2>
        <List data={toefl} />
        <h2>その他の対策</h2>
        <List data={other} />
        <div dangerouslySetInnerHTML={{
          __html: parser.translateHTMLString(paragraph.cfs.footer),
        }} />
      </article>
      <ContactButton />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {

  var paragraph = await fetch("https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/8291").then((res) => res.json());

  // console.log(paragraph)
  return {
    props: {
      paragraph,
      eiken: await getPost("16"),
      UniversityEntranceExams: await getPost("29"),
      toeic: await getPost("18"),
      toefl: await getPost("20"),
      gakko: await getPost("22"),
      other: await getPost("81"),
    },
  };
}

async function getPost(catID) {
  var data = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?per_page=100&categories=" +
    catID
  ).then((res) => res.json());
  data = data.map((e, i) => [e.listTitle, "/method/" + e.slug + "#content"]).reverse();
  return data;
}
