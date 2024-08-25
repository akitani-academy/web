import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <article>{children}</article>
        <Nav />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
