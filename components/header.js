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
            {/* <Link legacyBehavior href={"/access"}>
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
            </Link> */}
            <ul className={css.meta}>
              <li
                className={classNames(css.spMENU, { [css.close]: data })}
                onClick={handleInc}
              >
                {!data ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="11"
                    viewBox="0 0 25 11"
                  >
                    <g transform="translate(-12005 6489.5)">
                      <line
                        x2="25"
                        transform="translate(12005 -6489)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      />
                      <line
                        x2="25"
                        transform="translate(12005 -6484)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      />
                      <line
                        x2="25"
                        transform="translate(12005 -6479)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30.471"
                    height="16.882"
                    viewBox="0 0 30.471 16.882"
                  >
                    <g transform="translate(-320.265 -23.559)">
                      <line
                        x2="30"
                        y2="16"
                        transform="translate(320.5 24)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      />
                      <line
                        y1="16"
                        x2="30"
                        transform="translate(320.5 24)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                )}
                {/* 
                <div>
                  {!data ? (
                    <>MENU</>
                  ) : (
                    <>CLOSE</>
                  )}
                </div> */}
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
