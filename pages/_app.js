import "the-new-css-reset/css/reset.css";
import "../styles/globals.scss";

import Layout from "/components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
