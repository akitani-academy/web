import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

export default function Page({ wpDATA }) {
  return (
    <>
      <Head
        title={wpDATA.subTitle}
        breadcrumb={[[wpDATA.subTitle, "/recruit"]]}
      />
      <h1
        dangerouslySetInnerHTML={{
          __html: parser.translateHTMLString(wpDATA.subTitle),
        }}
      ></h1>
      <article
        dangerouslySetInnerHTML={{
          __html: parser.translateHTMLString("<p>" + wpDATA.cfs.donyu + "</p>"),
        }}
      />
      {wpDATA.cfs.recruit.map((e, i) => (
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
          {e.loop.map((e2, i) => (
            <>
              <h3
                dangerouslySetInnerHTML={{
                  __html: parser.translateHTMLString(e2.title),
                }}
                key={i}
              ></h3>
              <article
                dangerouslySetInnerHTML={{
                  __html: parser.translateHTMLString(e2.body),
                }}
              ></article>
            </>
          ))}
        </>
      ))}
    </>
  );
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  let wpDATA = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=recruit"
  ).then((res) => res.json());
  wpDATA = wpDATA[0];

  return {
    props: {
      wpDATA,
    },
  };
}
