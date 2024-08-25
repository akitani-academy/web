import classNames from "classnames";
import Link from "next/link";

import css from "styles/LinkList.module.scss";

function linkList({ data, vertical = false }) {
  return (
    <>
      <ul className={classNames(
        css.LinkList,
        { [css.vertical]: vertical }
      )}>
        {data.map((e, i) => (
          <li key={i}>

            <Link legacyBehavior href={String(e[1])}>
              <a>
                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25813 3.51613L8.742 7L5.25813 10.4839" stroke="white" stroke-width="1.16129" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {e[0]}
              </a>
            </Link>

            {/* {e[1].slice(0, 1) == "#" ? (
              <Link legacyBehavior href={String(e[1])}>
                <a>
                  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25813 3.51613L8.742 7L5.25813 10.4839" stroke="white" stroke-width="1.16129" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  {e[0]}
                </a>
              </Link>
            ) : (
              <Link legacyBehavior href={String(e[1])}>
                <a>{e[0]}</a>
              </Link>
            )} */}

          </li>
        ))}
      </ul>
    </>
  );
}

export default linkList;
