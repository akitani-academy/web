import { useRouter } from "next/router";
import Link from "next/link";
import UseSWR from "swr";

let _V = require("./_V.js");

import css from "styles/header.module.scss";

const siteTitle = function (url) {
  if (url[1] == "") {
    return (
      <h1>
        <Link legacyBehavior href={"/"}>
          <a>
            <small>英語専門塾</small>秋谷光子アカデミィ
          </a>
        </Link>
      </h1>
    );
  } else {
    return (
      <h2>
        <Link legacyBehavior href={"/"}>
          <a>
            <small>英語専門塾</small>秋谷光子アカデミィ
          </a>
        </Link>
      </h2>
    );
  }
};

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

  const pageBack = () => {
    const currentPath = router.pathname;
    if (!document.referrer) {
      router.push("/");
    } else {
      router.back();
    }
  };

  const { data, mutate } = navSate();
  const handleInc = () => mutate(!data);

  return (
    <>
      <header className={css.header + " header_" + url[1]}>
        <section className={css.inner}>
          {siteTitle(url)}
          <section className={css.menu}>
            <Link legacyBehavior href={"/access"}>
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
                <Link legacyBehavior href={"/contact"}>
                  <a className={css.contact}>資料請求<br />問い合わせ</a>
                </Link>
              </li>
              <li className={css.spMENU} onClick={handleInc}>
                <span>MENU</span>
              </li>
            </ul>
          </section>
          {url[1] == "method" && url[2] && (
            <Link legacyBehavior href={"/course_and_classtype"}>
              <a className={css.backButton}>コース説明にもどる</a>
            </Link>
          )}
        </section>
      </header>
    </>
  );
}

export default Page;
