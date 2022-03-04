import { useRouter } from "next/router";
import Link from "next/link";

let _V = require("./_V.js");

import css from "styles/header.module.scss";

const siteTitle = function (url) {
  if (url[1] == "") {
    return (
      <h1>
        <Link href={"/"}>
          <a>
            <small>英語専門塾</small>秋谷光子アカデミィ
          </a>
        </Link>
      </h1>
    );
  } else {
    return (
      <h2>
        <Link href={"/"}>
          <a>
            <small>英語専門塾</small>秋谷光子アカデミィ
          </a>
        </Link>
      </h2>
    );
  }
};

function Page() {
  const router = useRouter();
  let url = router.pathname.split("/");

  const pageBack = () => {
    const currentPath = router.pathname;
    if (!document.referrer) {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <>
      <header className={css.header + " " + url[1]}>
        <section className={css.inner}>
          {siteTitle(url)}
          <section className={css.menu}>
            {" "}
            <Link href={"/access"}>
              <a>
                <ul className={css.addr}>
                  {_V.access.map((e, i) => (
                    <li key={i}>
                      <span className={css.name}>{e.name}</span>
                      <br />
                      <span className={css.tel}>{e.tel}</span>
                    </li>
                  ))}
                </ul>
              </a>
            </Link>
            <ul className={css.meta}>
              <li>
                <Link href={"/contact"}>
                  <a className="contact">資料請求</a>
                </Link>
              </li>
              <li className="spOnly sp-menu">MENU</li>
            </ul>
          </section>
          {url[1] == "method" && url[2] && (
            <Link href="/course_and_system">
              <a>コース説明にもどる</a>
            </Link>
          )}
        </section>
      </header>
    </>
  );
}

export default Page;
