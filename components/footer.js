import Link from "next/link";

let _V = require("./_V.js");

import base from "styles/base.module.scss";
import css from "styles/footer.module.scss";

function Page() {
  let fA = [
    ["/", "トップページ"],
    ["/contact", "お問い合わせ"],
  ];
  return (
    <>
      <footer className={css.footer}>
        <section className={css.inner}>
          <section>
            <div className={css.header}>
              <h6>
                <small>英語専門塾</small>秋谷光子アカデミィ
              </h6>
              <ul className={css.menu}>
                {fA.map((e, i) => (
                  <li key={i}>
                    <Link href={e[0]}>
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
        </section>
      </footer>
    </>
  );
}

export default Page;
