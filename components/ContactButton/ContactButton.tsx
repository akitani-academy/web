const _V = require("components/_V.js");
import Head from "components/head";
import List from "components/widget/LinkList";
import css_ContactButton from "./ContactButton.module.scss";
import Link from "next/link";

export default function Button() {
    return (

        <Link href={"/contact"} >
            <div className={css_ContactButton.button}>
                <div className={css_ContactButton.icon}>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.41667 3.16669H16.0833C16.9542 3.16669 17.6667 3.87919 17.6667 4.75002V14.25C17.6667 15.1209 16.9542 15.8334 16.0833 15.8334H3.41667C2.54584 15.8334 1.83334 15.1209 1.83334 14.25V4.75002C1.83334 3.87919 2.54584 3.16669 3.41667 3.16669Z" stroke="#AB2F23" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.6667 4.75L9.75 10.2917L1.83334 4.75" stroke="#AB2F23" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className={css_ContactButton.text}>
                    <strong>お問い合わせ・資料請求</strong>
                    <small>学習方法含め詳しくアドバイス</small>
                </div>
            </div>
        </Link>
    );
}