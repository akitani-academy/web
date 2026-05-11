const _V = require("./_V.js");
import React, { Fragment } from "react";
import UseSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "components/Button/Button";

import css from "styles/lp_nav.module.scss";

function navSate() {
    const { data, mutate } = UseSWR("state", () => window.count);
    return {
        data: data || false,
        mutate: (count) => {
            window.count = count;
            mutate();
        },
    };
}

function Page() {
    const router = useRouter();
    let url = router.pathname.split("/");

    const { data, mutate } = navSate();
    const handleInc = () => mutate(!data);

    const menu = [
        {
            class: "nav_page",
            content: [
                [
                    "新中学1年生コース受講者の声",
                    "/lp-new-junior-high-school/#nav_01",
                ],
                [
                    "秋谷光子アカデミィの新中学1年生コース",
                    "/lp-new-junior-high-school/#nav_02",
                ],
                [
                    "秋谷光子アカデミィが中学英語に強い理由",
                    "/lp-new-junior-high-school/#nav_03",
                ],
                [
                    "秋谷光子アカデミィの学習ポイント",
                    "/lp-new-junior-high-school/#nav_04",
                ],
                [
                    "秋谷光子アカデミィ入塾までの流れ",
                    "/lp-new-junior-high-school/#nav_05",
                ],
                ["塾長からのメッセージ", "/lp-new-junior-high-school/#nav_06"],
                [
                    "新中学1年生コースでよくある質問",
                    "/lp-new-junior-high-school/#nav_07",
                ],
            ],
        },
    ];

    return (
        <>
            <div className="overlay" onClick={handleInc}></div>
            <nav
                className={css.nav + " nav_" + url[1] + " nav_" + String(data)}
            >
                <section className={css.lp_inner}>
                    <div className="hamburger" onClick={handleInc}>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <section className={css.main}>
                        {menu.map((e1, i1) => (
                            <Fragment key={i1}>
                                {e1.title && (
                                    <div className={e1.class}>{e1.title}</div>
                                )}
                                <ul className={e1.class}>
                                    {e1.content.map((e2, i2) => (
                                        <li key={i2}>
                                            <Link
                                                legacyBehavior
                                                href={`${e2[1]}`}
                                            >
                                                <a
                                                    dangerouslySetInnerHTML={{
                                                        __html: e2[0],
                                                    }}
                                                    onClick={handleInc}
                                                ></a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Fragment>
                        ))}

                        <div className={css.cta}>
                            <Link href={`/contact`}>
                                お問い合わせ・
                                <span>無料体験レッスンを申し込む</span>
                            </Link>
                            <Link href={`/contact`}>資料を請求する</Link>
                        </div>
                    </section>
                </section>
            </nav>
        </>
    );
}

export default Page;
