import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import List from "components/widget/LinkList";

let _V = require("/components/_V.js");

export default function Page({ post }) {
  return (
    <>
      <h1 data-subTitle="秋田光子アカデミィの">{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </>
  );
}

// この関数はビルド時に呼び出されます。
export async function getStaticPaths() {
  // 外部APIエンドポイントを呼び出して記事を取得します。
  const res = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/results?per_page=100"
  );
  const posts = await res.json();

  // 記事に基づいてプリレンダリングしたいパスを取得します
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  // ビルド時にこれらのパスだけをプリレンダリングします。
  // { fallback: false } は他のルートが404になることを意味します。
  return { paths, fallback: true };
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
