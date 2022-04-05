import "the-new-css-reset/css/reset.css";
import "../styles/globals.scss";

// import Head from "components/head";

import Layout from "/components/layout";

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       {/* <Head></Head> */}
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   );
// }

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
