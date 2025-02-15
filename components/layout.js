import { useRouter } from "next/router";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

function Layout({ children }) {
  const router = useRouter();
  const hiddenPaths = ["/contact", "/courseContact"];

  return (
    <>
      <Header />
      <main>
        <article>{children}</article>
        {!hiddenPaths.includes(router.pathname) && <Nav />}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
