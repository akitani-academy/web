import Link from "next/link";

import css from "styles/LinkList.module.scss";

function linkList({ data }) {
  return (
    <>
      <ul className={css.LinkList}>
        {data.map((e, i) => (
          <li key={i}>
            {e[1].slice(0, 1) == "#" ? (
              <Link legacyBehavior href={String(e[1])}>
                <a>{e[0]}</a>
              </Link>
            ) : (
              <Link legacyBehavior href={String(e[1])}>
                <a>{e[0]}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default linkList;
