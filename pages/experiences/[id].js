import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import List from "components/widget/LinkList";

let _V = require("/components/_V.js");
import { useRouter } from "next/router";

export default function Page({ post }) {
  const router = useRouter();
  return (
    <>
      <Head
        title={post.title}
        breadcrumb={[
          ["実績", "/experiences"],
          [post.title, router.asPath],
        ]}
      />
      <h1 data-subTitle="秋谷光子アカデミィの">{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </>
  );
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// この関数はビルド時に呼び出されます。
export async function getStaticPaths() {
  // 外部APIエンドポイントを呼び出して記事を取得します。
  const rest_url =
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/results?per_page=100&_fields=id";

  const res = await fetch(rest_url);
  const totalpages = await res.headers.get("x-wp-totalpages");
  var posts = await res.json();

  for (let i = 1; i <= totalpages; i++) {
    let resData = await fetch(rest_url + "&page=" + i);
    let postsData = await resData.json();
    posts = posts.concat(postsData);
  }

  // 記事に基づいてプリレンダリングしたいパスを取得します
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  // ビルド時にこれらのパスだけをプリレンダリングします。
  // { fallback: false } は他のルートが404になることを意味します。
  return { paths, fallback: false };
}

// ビルド時にも呼び出されます。
export async function getStaticProps({ params }) {
  // paramsは記事の`id`を含みます。
  // ルートが/posts/1のような時、params.id は1です。
  const post = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/results/" + params.id
  ).then((res) => res.json());

  // 記事データをprops経由でページに渡します。
  return { props: { post } };
}
