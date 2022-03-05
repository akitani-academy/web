import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

let _V = require("/components/_V.js");

import List from "components/widget/LinkList";

export default function Page({ faq }) {
  return (
    <>
      <h1>お問合せありがとうございます。</h1>
      <p>後日、当アカデミーからご連絡させていただきます。</p>
      <List data={[["トップページに戻る", "/"]]} />
    </>
  );
}
export async function getStaticProps() {
  const faq = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/faq?per_page=100&"
  ).then((res) => res.json());

  return {
    props: {
      faq,
    },
  };
}
