import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import List from "components/widget/LinkList";

export default function Page({
  eiken,
  UniversityEntranceExams,
  toeic,
  toefl,
  other,
}) {
  //   console.log(eiken);
  return (
    <>
      <h1>合格へのHow To</h1>
      <h2>英検の合格対策</h2>
      <List data={eiken} />
      <h2>大学受験の合格対策</h2>
      <List data={UniversityEntranceExams} />
      <h2>TOEICの対策</h2>
      <List data={toeic} />
      <h2>TOEFLの対策</h2>
      <List data={toefl} />
      <h2>その他の対策</h2>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      eiken: await getPost("16"),
      UniversityEntranceExams: await getPost("29"),
      toeic: await getPost("18"),
      toefl: await getPost("20"),
      other: await getPost("16"),
    },
  };
}

async function getPost(catID) {
  var data = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?per_page=100&categories=" +
      catID
  ).then((res) => res.json());
  data = data.map((e, i) => [e.listTitle, "/method/" + e.slug]);
  return data;
}
