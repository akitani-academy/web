
import classNames from "classnames";

import Layout from "components/layout";
import Head from "components/head";
import List from "components/widget/LinkList";
import ContactButton from "components/ContactButton/ContactButton"

import css_index from "styles/index.module.scss";

export default function Page({
  eiken,
  UniversityEntranceExams,
  toeic,
  toefl,
  gakko,
  other,
}) {
  return (
    <>
      <Head
        url={"/method"}
        title="合格への授業方針"
        breadcrumb={[
          ["トップページ", ""],
          ["合格への授業方針", "/method"]
        ]}
        description="秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。圧倒的な実績をもとにノウハウを合格への当塾の指導方針を公開しています。"
      />
      <article className={classNames(css_index.card, css_index.bg)}>
        <h1>合格への授業方針</h1>
        <p>
          秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。圧倒的な実績をもとにノウハウを合格への当塾の指導方針を公開しています。
        </p>
        <h2>英検の合格対策</h2>
        <List data={eiken} />
        <h2>大学受験の合格対策</h2>
        <List data={UniversityEntranceExams} />
        <h2>小中高学生の学校成績UP対策</h2>
        <List data={gakko} />
        <h2>TOEICの対策</h2>
        <List data={toeic} />
        <h2>TOEFLの対策</h2>
        <List data={toefl} />
        <h2>その他の対策</h2>
        <List data={other} />
      </article>
      <ContactButton />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
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
