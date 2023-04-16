import { useRouter } from "next/router";

import Layout from "components/layout";
import Head from "components/head";
import LinkList from "components/widget/LinkList";
import Contact from "components/widget/Contact"

import css_experiences from "styles/experiences.module.scss";
import css_contact from "styles/contact.module.scss";
export default function Page({ post }) {
  const router = useRouter();
  return (
    <>
      <Head
        title={`${post.title}｜合格体験記`}
        breadcrumb={[
          ["実績", "/experiences"],
          [post.title, router.asPath],
        ]}
      />
      <h2 data-subTitle="秋谷光子アカデミィの">合格体験記</h2>
      <p>
        秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。圧倒的な実績に合わせて合格体験記を数多く掲載しております。
      </p>
      <LinkList data={[["その他の合格体験記を見る", "/experiences"]]} />
      <article className={css_experiences.article}>
        <h1>{post.title}</h1>
        <h2>{post.student}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <aside className={css_contact.contact}>
        <Contact short="true" />
      </aside>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const rest_url =
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/results?per_page=100&_fields=id,title";

  const res = await fetch(rest_url);
  const totalpages = await res.headers.get("x-wp-totalpages");
  var posts = await res.json();

  for (let i = 1; i <= totalpages; i++) {
    let resData = await fetch(rest_url + "&page=" + i);
    let postsData = await resData.json();
    posts = posts.concat(postsData);
  }

  posts = posts.filter(item => item.title !== "");

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/results/" + params.id
  ).then((res) => res.json());

  return { props: { post } };
}
