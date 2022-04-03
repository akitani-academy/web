import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

export default function Page({ wpDATA }) {
  return (
    <>
      <Head title={wpDATA.subTitle} />
      <h1
        data-subtitle={wpDATA.subTitle}
        dangerouslySetInnerHTML={{
          __html: parser.translateHTMLString(wpDATA.title),
        }}
      ></h1>
      <article
        dangerouslySetInnerHTML={{
          __html: parser.translateHTMLString("<article>" + wpDATA.content + "</article>"),
        }}
      />
    </>
  );
}
export async function getStaticProps() {
  let wpDATA = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=message"
  ).then((res) => res.json());
  wpDATA = wpDATA[0];

  return {
    props: {
      wpDATA,
    },
  };
}
