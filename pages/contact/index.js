import Head from "components/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

let _V = require("/components/_V.js");

import LinkList from "components/widget/LinkList";

export default function Page({ faq }) {
  return (
    <>
      <Script
        src="https://yubinbango.github.io/yubinbango/yubinbango.js"
        strategy="beforeInteractive"
      />
      <Head title="資料請求/お問い合わせ" />
      <h1>資料請求 / お問い合わせ</h1>
      <h2>合格へのHow To</h2>
      <p>
        秋谷光子アカデミィの各種対策勉強方法を公開しています。
        <br />
        勉強する際にご活用ください。
      </p>
      <LinkList
        data={[
          ["英検", "/method"],
          ["大学受験", "/method"],
          ["TOEIC", "/method"],
          ["TOEFL", "/method"],
          ["その他", "/method"],
        ]}
      />
      <h2>電話でのお問い合わせ</h2>
      <ul>
        {_V.access.map((e, i) => (
          <li key={i}>
            <a href={"tel:" + e.tel}>
              <span>{e.name}</span>：<span>{e.tel}</span>（13:00-16:00）
            </a>
          </li>
        ))}
      </ul>
      <h2>資料請求 / お問い合わせ</h2>
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        className="h-adr"
      >
        <input
          type="hidden"
          name="accessKey"
          value="cd44d1ef-1716-4e8d-ae9f-79e80a97692f"
        />
        <h3>お名前</h3>
        <input type="text" name="name" placeholder="田中 太郎" required />
        <h3>ふりがな</h3>
        <input
          type="text"
          name="$ふりがな"
          placeholder="たなか たろう"
          required
        />
        <h3>メールアドレス</h3>
        <input
          type="text"
          name="email"
          placeholder="mail@example.com"
          required
        />
        <h3>お電話番号</h3>
        <input type="text" name="phone" placeholder="01-2345-6789" required />
        <h3>郵便番号</h3>
        <input
          type="text"
          name="$郵便番号"
          className="p-postal-code"
          maxLength="9"
          placeholder="100-8111"
          required
        />
        <h3>ご住所</h3>
        <span className="p-country-name">Japan</span>
        <input
          type="text"
          name="$住所"
          className="p-region p-locality p-street-address p-extended-address"
          placeholder="東京都千代田区千代田1-1"
          required
        />
        <h3>学年</h3>
        <select name="$学年">
          {(() => {
            let items = [];
            [
              ["学生ではない"],
              ["小学", 6],
              ["中学", 3],
              ["高校", 3],
              ["大学受験生"],
              ["専門学校生"],
              ["大学生"],
              ["大学院生"],
            ].map((e, i) => {
              if (e[1]) {
                for (let step = 1; step <= e[1]; step++) {
                  items.push(
                    <option value={e[0]} key={i + "_" + step}>
                      {e[0]}
                      {step}年生
                    </option>
                  );
                }
              } else {
                items.push(
                  <option value={e[0]} key={i}>
                    {e[0]}
                  </option>
                );
              }
            });
            return <>{items}</>;
          })()}
        </select>
        <h3>問い合わせ</h3>
        {(() => {
          let items = [];
          [
            "面談・訪問の予約",
            "資料請求",
            "当アカデミーへのご質問",
            "その他",
          ].map((e, i) => {
            items.push(
              <>
                <input type="checkbox" id={e} name={"$" + e} key={i} />
                <label htmlFor={e}>{e}</label>
              </>
            );
          });
          return <>{items}</>;
        })()}
        <textarea
          name="$問い合わせ"
          placeholder="ご自由にご記入ください。"
        ></textarea>
        <input type="text" name="honeypot" className="honeypot" />
        <input type="hidden" name="replyTo" value="@" />
        <input
          type="hidden"
          name="redirectTo"
          value="https://www.akitani-academy.jp/"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
