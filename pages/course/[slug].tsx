const _V = require("components/_V.js");
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Head from "components/head";
import Header from "components/header";
import Footer from "components/footer";
import Nav from "components/nav";
import Contact from "components/widget/Contact"
import LinkList from "components/widget/LinkList";
import ExperiencesListBox from "components/Experiences/ExperiencesListBox";
import TopSlideshow from "components/TopSlideshow/TopSlideshow"
import ContactButton from "components/ContactButton/ContactButton"

import css_contact from "styles/contact.module.scss";
import css_view from "styles/View.module.scss";
import css_index from "styles/index.module.scss";

export default function Page({ data, experiencesData, description }) {

    const router = useRouter();
    const { slug } = router.query;

    // console.log(data.content)

    return (
        <>
            <Head
                title={(data.seoTitle) ? `${data.seoTitle} 英語専門塾 秋谷光子アカデミィ｜横浜,綱島,自由が丘,田園調布` : `${data.title}コース`}
                breadcrumb={[
                    ["トップページ", ""],
                    [`${data.title}コース`, slug]
                ]}
                description={data.description ? data.description : ""}
                url={`/course/${slug}`}
            />

            <Header />
            {/* <TopSlideshow /> */}

            <main className={css_index.main}>

                <div className={css_view.View}>
                    <div className={css_view.card} >
                        <div id="content" />

                        {(data.category.length > 1) && (
                            <div className={css_view.experiences}>
                                <ExperiencesListBox
                                    data={experiencesData}
                                    filter={data.category}
                                    button={{
                                        text: "すべての「 実績と体験記 」をみる",
                                        link: "/experiences"
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

                                <h1>
                                    <span>{data.title}</span>コース
                                </h1>
                                {/* <h3>コースの説明</h3> */}
                                <div
                                    className={css_view.courseBody}
                                    dangerouslySetInnerHTML={{ __html: parser.translateHTMLString(data.content) }}
                                />
                                {data.menu.length > 0 && (<>
                                    <h3>さらに具体的な合格対策</h3>
                                    <LinkList
                                        data={data.menu.map((e, i) => [
                                            e.title,
                                            "/method/" + e.slug,
                                        ])}
                                    />
                                </>)}
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
                                        <h5>体験記</h5>
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
                    <div className={css_index.card}>
                        <h2 data-subTitle="秋谷光子アカデミィの" className={classNames("h2", "marginTop0")}>
                            コース別学習
                        </h2>
                        <div
                            className={css_view.courseBody}
                            dangerouslySetInnerHTML={{ __html: parser.translateHTMLString(description[0].wp_body) }}
                        />
                    </div>
                </div>
                <Nav />
            </main>
            <ContactButton />
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

    const description = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=course_and_classtype"
    ).then((res) => res.json());

    return {
        props: {
            data: post[0],
            experiencesData,
            description
        }
    };
}
