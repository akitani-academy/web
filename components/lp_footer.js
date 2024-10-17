const _V = require("./_V.js");

import Link from "next/link";

import css from "styles/lp_footer.module.scss";

function Page() {
  let fA = [
    ["/contact", "問い合わせはこちら"],
    ["/contact", "資料請求はこちら"],
    ["/contact", "無料体験レッスンを受ける"],
  ];
  return (
    <>
      <footer className={css.footer}>
        <div className={css.front}>
          <div className={css.front__inner}>
            <a href="./">
              <small>英語専門塾</small>
              秋谷光子アカデミィ
            </a>
          </div>
        </div>
        <div className={css.bottom}>
          <div className={css.bottom__inner}>
            <ul>
              {fA.map((e, i) => (
                <li key={i}>
                  <Link legacyBehavior href={e[0]}>
                    <a>{e[1]}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              <small>©2024 秋谷光子アカデミィ</small>
            </p>
          </div>
        </div>
        {/* <section className={css.inner}>
          <section>
            <div className={css.header}>
              <h6>
                <small>英語専門塾</small>秋谷光子アカデミィ
              </h6>
              <ul className={css.menu}>
                {fA.map((e, i) => (
                  <li key={i}>
                    <Link legacyBehavior href={e[0]}>
                      <a>{e[1]}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className={css.addr}>
              {_V.access.map((e, i) => (
                <li key={i}>
                  {e.name}
                  <br />
                  {e.address}
                  <br />
                  {e.tel}
                </li>
              ))}
            </ul>
          </section>
          <section className={css.copyright}>
            Copyright © 秋谷光子アカデミィ All Rights Reserved.
          </section>
        </section> */}
      </footer>

      <div className={css.fixed_btn}>
        <Link href={`tel:045-544-6756`}>
          <span class="">
            <img src={`/img/tel.svg`} />
            045-544-6756
          </span>
          <span class="">横浜・綱島本部校</span>
          <span class="">受付時間：10:00～19:00（平日）</span>
        </Link>
        <Link href={`tel:03-5483-5025`}>
          <span class="">
            <img src={`/img/tel.svg`} />
            03-5483-5025
          </span>
          <span class="">自由が丘・田園調布校</span>
          <span class="">受付時間：10:00～19:00（平日）</span>
        </Link>
      </div>

      <div className={css.page_top}>
        <a href="#">
          <img src="/img/page_top.png" />
        </a>
      </div>
    </>
  );
}

export default Page;
