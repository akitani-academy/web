import Head from "components/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import List from "components/widget/LinkList";

let _V = require("/components/_V.js");

export default function Page({ post }) {
  return (
    <>
      <Head title={post.title} />
      <h1 data-subTitle="秋田光子アカデミィの">{post.title}</h1>
      <List data={[["その他の合格対策", "/method"]]} />

      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      <aside>
        <h5>秋谷光子アカデミィへのお問い合わせ</h5>
        <h6>電話での問い合わせ</h6>
        <ul>
          {_V.access.map((e, i) => (
            <li key={i}>
              <a href={"tel:" + e.tel}>
                <span>{e.name}</span>：<span>{e.tel}</span>（13:00-16:00）
              </a>
            </li>
          ))}
        </ul>
        <h6>資料請求</h6>
        <Link href={"/contact"}>
          <a>その他のお問い合わせ</a>
        </Link>
      </aside>
    </>
  );
}

// この関数はビルド時に呼び出されます。
export async function getStaticPaths() {
  // 外部APIエンドポイントを呼び出して記事を取得します。
  const res = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?per_page=100"
  );
  const posts = await res.json();

  // 記事に基づいてプリレンダリングしたいパスを取得します
  const paths = posts.map((post) => ({
    params: { post_slug: post.slug },
  }));
  // console.log(paths);

  // ビルド時にこれらのパスだけをプリレンダリングします。
  // { fallback: false } は他のルートが404になることを意味します。
  return { paths, fallback: false };
}

// ビルド時にも呼び出されます。
export async function getStaticProps({ params }) {
  // paramsは記事の`id`を含みます。
  // ルートが/posts/1のような時、params.id は1です。
  const post = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?slug=" +
      params.post_slug
  ).then((res) => res.json());

  // 記事データをprops経由でページに渡します。
  return { props: { post: post[0] } };
}
