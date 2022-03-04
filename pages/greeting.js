import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Page({ wpDATA }) {
  return (
    <>
      <h1 data-subtitle={wpDATA.subTitle}>{wpDATA.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: wpDATA.content }} />
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
