const _V = require("./_V.js");
import { useRouter } from "next/router";
import Link from "next/link";
import UseSWR from "swr";

import css from "styles/header.module.scss";
import classNames from "classnames";

const siteTitle = function (url) {
  if (url[1] == "") {
    return (
      <h1 className={css.title}>
        <Link legacyBehavior href={"/"}>
          <a>
            <small>英語専門塾</small>
            秋谷光子アカデミィ
          </a>
        </Link>
      </h1>
    );
  } else {
    return (
      <div className={css.title}>
        <Link legacyBehavior href={"/"}>
          <a>
            <small>英語専門塾</small>
            秋谷光子アカデミィ
          </a>
        </Link>
      </div>
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

  // const pageBack = () => {
  //   const currentPath = router.pathname;
  //   if (!document.referrer) {
  //     router.push("/");
  //   } else {
  //     router.back();
  //   }
  // };

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
                      <span className={css.tel}>{e.tel}</span>
                    </li>
                  ))}
                </ul>
              </a>
            </Link>
            <ul className={css.meta}>
              <li className={classNames(
                css.spMENU,
                { [css.close]: data }
              )}
                onClick={handleInc}
              >

                {!data ? (
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.74023 12.3747H21.7402" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.74023 6.37471H21.7402" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.74023 18.3747H21.7402" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                ) : (
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.541 6.72656L6.54102 18.7266" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.54102 6.72656L18.541 18.7266" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                )}

                <div>
                  {!data ? (
                    <>MENU</>
                  ) : (
                    <>CLOSE</>
                  )}
                </div>
              </li>
            </ul>
          </section>
          {/* {url[1] == "method" && url[2] && (
            <Link legacyBehavior href={"/course_and_classtype"}>
              <a className={css.backButton}>コース説明にもどる</a>
            </Link>
          )} */}
        </section>
      </header>
    </>
  );
}

export default Page;
