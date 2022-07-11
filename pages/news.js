import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

export default function Page({ wpDATA }) {
  return (
    <>
      <Head title={wpDATA.subTitle} breadcrumb={[[wpDATA.subTitle, "/news"]]} />
      <h1 data-subtitle={wpDATA.subTitle}>{wpDATA.title}</h1>
      <article className="news" dangerouslySetInnerHTML={{ __html: wpDATA.content }} />
    </>
  );
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  let wpDATA = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=news"
  ).then((res) => res.json());
  wpDATA = wpDATA[0];

  return {
    props: {
      wpDATA,
    },
  };
}
