import Navbar from "./navbar/index";
import { useRouter } from "next/router";
import SecondNavbar from "./navbar/SecondNavbar";

import Footer from "./footer";

function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      {router.asPath !== "/Polypeppharm" &&
      router.asPath !== "/Polypeppharm/Sinergates" &&
      router.asPath !== "/Polypeppharm/EreunitikesOmades" ? (
        <Navbar />
      ) : (
        <SecondNavbar />
      )}
      <main className="font-manrope">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
