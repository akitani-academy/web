const _V = require("components/_V.js");
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";

import Head from "components/head";
import Header from "components/header";
import Footer from "components/footer";
import Nav from "components/nav";
import Contact from "components/widget/Contact"
import LinkList from "components/widget/LinkList";

import css_contact from "styles/contact.module.scss";
import css_view from "styles/View.module.scss";
import classNames from "classnames";
import ExperiencesListBox from "components/Experiences/ExperiencesListBox";

export default function Page({ data, experiencesData }) {

    const router = useRouter();
    const { slug } = router.query;

    console.log(data.experiences)

    return (
        <>
            <Head
                title={`${data.title}コース`}
                breadcrumb={[
                    ["トップページ", ""],
                    [`${data.title}コース`, slug]
                ]}
                description={data.description ? data.description : ""}
                url={`${_V.meta.baseURL}/course/${slug}`}
            />
            <Header />
            <main>


                <div className={css_view.View}>

                    <h2 data-subTitle="秋谷光子アカデミィの">コース別学習</h2>
                    <p>
                        秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計173人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。
                    </p>
                    <p>圧倒的な実績をもとに入塾の際に塾長が面談を行い、お一人お一人に合わせて最短距離で目標達成できるカリキュラムをご案内いたします。</p>


                    <div className={css_view.card}>

                        <h1 id="content">
                            <span>{data.title}</span>コース
                        </h1>

                        {(!data.experiences) ? (<></>) : (
                            <div className={css_view.experiences}>
                                <ExperiencesListBox
                                    data={experiencesData}
                                    filter={data.experiences}
                                    button={{
                                        text: "すべての「 実績と体験記 」をみる",
                                        link: "/experiences#student"
                                    }}
                                />
                            </div>
                        )}

                        <section className={css_view.flex}>
                            <article
                                className={classNames(
                                    css_view.article
                                )}
                            >
                                <h3>コースの説明</h3>
                                <div
                                    className={css_view.courseBody}
                                    dangerouslySetInnerHTML={{ __html: data.content }}
                                />
                                {data.menu.length > 0 && (
                                    <>
                                        <h3>より具体的な合格対策</h3>
                                        <LinkList
                                            data={data.menu.map((e, i) => [
                                                e.title,
                                                "/method/" + e.slug,
                                            ])}
                                        />
                                    </>
                                )}
                                {data.gallery && (
                                    <div className={css_view.gallery}>
                                        <ul>
                                            {data.gallery.map((e, i) => (
                                                <li key={i}>
                                                    <Image
                                                        alt="秋谷光子アカデミィの生徒の写真"
                                                        src={e.img}
                                                        width={"180"}
                                                        height={"120"}
                                                    // objectFit={"cover"}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </article>
                            {data.post.length > 0 && (
                                <section
                                    className={classNames(
                                        css_view.taikenki
                                    )}>
                                    <div className={css_view.inner}>
                                        <h4>体験記</h4>
                                        <div className={css_view.scroll}>
                                            <div className={css_view.space} />
                                            <ul>
                                                {data.post.map((e, i) => (
                                                    <li key={i}>
                                                        <Link legacyBehavior href={"/experiences/" + e.id}>
                                                            <a>
                                                                <span className={css_view.taikenki_title}>
                                                                    {e.title}
                                                                </span>
                                                                <br />
                                                                <span>{e.student}</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <Link legacyBehavior href={"/experiences"}>
                                        <a className={css_view.more}>
                                            <span>もっと見る</span>
                                        </a>
                                    </Link>
                                </section>
                            )}
                        </section>
                    </div>
                    <aside className={css_contact.contact}>
                        <Contact short="true" />
                    </aside>
                </div>
                <Nav />
            </main>
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100"
    );
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?slug=" +
        params.slug
    ).then((res) => res.json());

    let experiencesData = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
    ).then((res) => res.json());

    return {
        props: {
            data: post[0],
            experiencesData
        }
    };
}
