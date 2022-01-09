// import Logo from '../../public/copyLabLetterheadsmall.png'
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineArrowDown,
  AiOutlineCloseCircle,
} from "react-icons/ai";

import { useRouter } from "next/router";
import { Link as Scroller } from "react-scroll";
import Members from "./Members";

function SecondNavbar() {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [members, setMembers] = useState(false);

  return (
    <nav className="font-manrope">
      <div className="flex items-center max-w-5xl  justify-around ">
        <Link passHref href="/">
          <img
            // width="600"
            className=" w-1/3 max-w-xl pb-4"
            src="/mbgduthlogo.jpg"
            alt="mbg-logo"
          />
        </Link>
        <img
          // width="600"
          className=" w-1/3  max-w-xl pb-4"
          src="/PolypepPharmlogosmall.jpg"
          alt="mbg-logo"
        />

        {!navbarOpen ? (
          <AiOutlineMenu
            className="md:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
            size="2em"
          />
        ) : (
          <AiOutlineCloseCircle
            className="md:hidden"
            size="2em"
            onClick={() => setNavbarOpen(!navbarOpen)}
          />
        )}
      </div>

      <div
        className={
          "md:flex flex-grow bg-mygreen text-white  " +
          (navbarOpen ? "" : " hidden")
        }
      >
        <ul className="flex md:flex-row text-white flex-col md:justify-center w-full text-center flex-wrap ">
          <li className="flex text-white font-medium text-xl m-1 hover:text-blue-400 items-center justify-center rounded-lg border-2 border-light-blue-400  md:px-4 md:border-0 md:rounded-none">
            <Link href="/">ΑΡΧΙΚΗ</Link>
          </li>
          <button onClick={() => setMembers(!members)}>
            <li
              className="flex font-medium  m-1 hover:text-blue-400 items-center justify-center rounded-lg border-2 border-light-blue-400 md:px-4 md:border-0 md:rounded-none"
              key="StaffKey"
            >
              <a
                className={`text-xl pr-1 ${
                  router.asPath === "/Staff" ? "text-blue-400" : ""
                }`}
                passhref={"Staff"}
              >
                ΜΕΛΗ
              </a>

              <AiOutlineArrowDown />
            </li>
            {members && (
              <div className=" text-black md:absolute">
                <div className="  md:relative md:bottom-0 md:right-7 z-10 ">
                  <Members name="Συνεργάτες" href="/Polypeppharm/Sinergates" />
                  <Members
                    name="Ερευνητικές Ομάδες"
                    href="/Polypeppharm/EreunitikesOmades"
                  />
                </div>
              </div>
            )}
          </button>
          <li className="flex text-white font-medium text-xl  m-1 hover:text-blue-400 items-center justify-center rounded-lg border-2 border-light-blue-400  md:px-4 md:border-0 md:rounded-none">
            {router.asPath == "/Polypeppharm" ? (
              <Scroller
                activeClass="active"
                to="Polypeppharm"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                POLYPEPPHARM
              </Scroller>
            ) : (
              <Link href="/Polypeppharm">POLYPEPPHARM </Link>
            )}
          </li>
          <li className="flex text-white font-medium text-xl  m-1 hover:text-blue-400 items-center justify-center rounded-lg border-2 border-light-blue-400  md:px-4 md:border-0 md:rounded-none">
            {router.asPath == "/Polypeppharm" ? (
              <Scroller
                activeClass="active"
                to="Koinopraxia"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                ΚΟΙΝΟΠΡΑΞΙΑ
              </Scroller>
            ) : (
              <Link href="/Polypeppharm">ΚΟΙΝΟΠΡΑΞΙΑ </Link>
            )}
          </li>
          <li className="flex text-white font-medium text-xl m-1 hover:text-blue-400 items-center justify-center rounded-lg border-2 border-light-blue-400  md:px-4 md:border-0 md:rounded-none">
            {router.asPath == "/Polypeppharm" ? (
              <Scroller
                activeClass="active"
                to="EnotitesErgasias"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                ΕΝΟΤΗΤΕΣ ΕΡΓΑΣΙΑΣ
              </Scroller>
            ) : (
              <Link href="/Polypeppharm">ΕΝΟΤΗΤΕΣ ΕΡΓΑΣΙΑΣ</Link>
            )}
          </li>

          <li className="flex font-medium m-1 hover:text-blue-400 items-center justify-center rounded-lg border-2 border-light-blue-400 text-white md:px-4 md:border-0 md:rounded-none">
            <Scroller
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
              className="text-xl"
            >
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Scroller>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SecondNavbar;
