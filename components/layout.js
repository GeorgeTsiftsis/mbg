import Navbar from "./navbar/index";
import { useRouter } from "next/router";
import SecondNavbar from "./navbar/SecondNavbar";

import Footer from "./footer";

function Layout({ children }) {
  const router = useRouter();
  let navbar;
  if (router.asPath == "/Polypeppharm") {
    navbar = <SecondNavbar />;
  } else if (router.asPath == "/Polypeppharm/EreunitikesOmades") {
    navbar = <SecondNavbar />;
  } else if (router.asPath == "/Polypeppharm/Sinergates") {
    navbar = <SecondNavbar />;
  } else {
    navbar = <Navbar />;
  }
  return (
    <>
      {navbar}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
