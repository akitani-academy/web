import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import List from "components/widget/LinkList";

import css from "styles/ExperiencesList.module.scss";

export default function Page({ data }) {
  let option = {
    date: true,
  };
  return (
    <>
      <ul className={css.ExperiencesList}>
        {data.post.map((e, i) => (
          <li key={i}>
            <time>{e.date}</time>
            <div className={css.meta}>
              <span>{e.student}</span>
              {e.title && (
                <span>
                  <Link href={"/experiences/" + e.id}>
                    <a>体験記：{e.title}</a>
                  </Link>
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
