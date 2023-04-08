import Image from "next/image";

import Layout from "components/layout";
import Head from "components/head";
import Contact from "components/widget/Contact"

import css_contact from "styles/contact.module.scss";
export default function Page({ wpDATA }) {
  return (
    <>
      <Head
        title={wpDATA.title + "｜NEWS"}
        description={wpDATA.summary}
        breadcrumb={[[wpDATA.subTitle, "/news"]]}
      />
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
      <h1 data-subtitle={wpDATA.subTitle}>{wpDATA.title}</h1>
      <article className="news" dangerouslySetInnerHTML={{ __html: wpDATA.content }} />
      <aside className={css_contact.contact}>
        <Contact short="true" />
      </aside>
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

  return {
    props: {
      wpDATA,
    },
  };
}
