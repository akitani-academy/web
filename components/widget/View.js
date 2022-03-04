import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import LinkList from "components/widget/LinkList";

function Page({ data, name }) {
  const router = useRouter();
  let now = router.query[name];
  if (now) {
    data = data.find(function (e) {
      return e.title === now;
    });
    return (
      <>
        <h2 id={name}>{data.title}</h2>
        {data.menu && (
          <div>
            <h3>より具体的な合格対策</h3>
            <LinkList
              data={data.menu.map((e, i) => [e.title, "/method/" + e.slug])}
            />
          </div>
        )}
        <article dangerouslySetInnerHTML={{ __html: data.content }} />
        {data.gallery && (
          <ul>
            {data.gallery.map((e, i) => (
              <li key={i}>
                <Image
                  src={e.img}
                  width={"200"}
                  height={"170"}
                  objectFit={"fill"}
                />
              </li>
            ))}
          </ul>
        )}
        {data.post && (
          <>
            <h4>体験記</h4>
            <ul>
              {data.post.map((e, i) => (
                <li key={i}>
                  <Link href={"/experiences/" + e.id}>
                    <a>
                      {e.title}
                      <span>{e.student}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  } else {
    return <></>;
  }
}

export default Page;
