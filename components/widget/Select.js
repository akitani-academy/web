import { useRouter } from "next/router";
import Router from "next/router";

import css from "styles/Select.module.scss";

function Page({ data, name }) {
  const router = useRouter();
  function pushQuery(e) {
    Router.push(
      {
        query: { ...router.query, [name]: e.target.value },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  }
  return (
    <>
      <div className={css.main}>
        <select onChange={pushQuery} name={name + "S"}>
          <option disabled selected>
            選択する
          </option>
          {data.map((e, i) => (
            <option
              value={e.title}
              key={i}
              selected={router.query[name] == e.title ? true : false}
            >
              {e.title}
            </option>
          ))}
        </select>
        <ul>
          {data.map((e, i) => (
            <li key={i}>
              <input
                id={e.id}
                type="radio"
                name={name + "R"}
                value={e.title}
                onChange={pushQuery}
              />
              <label htmlFor={e.id}>{e.title}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
