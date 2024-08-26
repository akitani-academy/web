import Link from "next/link";

import classNames from "classnames";

import css from "./cta.module.scss";

export default function CtaBox() {
  return (
    <>
      <div className={css.cta_box}>
        <h2>
          <span className={css.balloon}>最短距離で目標達成できる</span>
          <br />
          <span className={css.block}>カリキュラムをご案内</span>
        </h2>

        <div className={css.cta}>
          <p>
            まずは
            <span className={css.red_box}>無料体験レッスン</span>
            <span className={css.red_box}>資料請求</span>
            から
          </p>
          <div>
            <a href={`/contact`}>
              お問い合わせ・<span>無料体験レッスンを申し込む</span>
            </a>
            <a href={`/contact`}>資料を請求する</a>
          </div>
        </div>
      </div>
    </>
  );
}
