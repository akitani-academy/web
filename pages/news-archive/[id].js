import { useRouter } from "next/router";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Layout from "components/layout";
import Head from "components/head";

import Contact from "components/widget/Contact";
import ContactButton from "components/ContactButton/ContactButton";

import css_experiences from "styles/newsArchive.module.scss";
import css_contact from "styles/contact.module.scss";
export default function Page({ post }) {
  const router = useRouter();
  
  return (
    <>
      <Head
        url={router.asPath}
        title={`${post.title}｜NEWS`}
				description={post.summary}
        breadcrumb={[
          ["トップページ", ""],
          ["ニュース", "/news-archive"],
          [post.title, router.asPath],
        ]}
      />
      <article className={css_experiences.article}>
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: parser.translateHTMLString(post.content),
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

export async function getStaticPaths() {
  const rest_url =
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/news-archive?per_page=100&_fields=id,title";

  const res = await fetch(rest_url);
  const totalpages = await res.headers.get("x-wp-totalpages");
  var posts = await res.json();

  for (let i = 1; i <= totalpages; i++) {
    let resData = await fetch(rest_url + "&page=" + i);
    let postsData = await resData.json();
    posts = posts.concat(postsData);
  }

  posts = posts.filter((item) => item.title !== "");

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/news-archive/" + params.id
  ).then((res) => res.json());

  return { props: { post } };
}
