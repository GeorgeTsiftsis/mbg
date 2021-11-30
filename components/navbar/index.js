// import Logo from '../../public/copyLabLetterheadsmall.png'
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineCloseCircle,
  AiOutlineArrowDown,
} from "react-icons/ai";
import links from "./links";
import { useRouter } from "next/router";
import { Link as Scroller, animateScroll as scroll } from "react-scroll";
import Members from "./Members";

function Navbar() {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [members, setMembers] = useState(false);

  return (
    <nav>
      <div className="flex items-center  justify-around ">
        <img
          // width="600"
          className="w-3/4 max-w-xl pb-4"
          src="/copyLabLetterheadsmall.png"
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
          "md:flex flex-grow justify-items items-center" +
          (navbarOpen ? "" : "hidden")
        }
      >
        <ul className="flex flex-col md:flex-row md:justify-center w-full text-center flex-wrap">
          <li className="m-1 border-2 font-medium font-manrope rounded-lg text-gray-700 hover:text-blue-400 md:border-0 md:rounded-none md:px-4 border-light-blue-400">
            <Scroller
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a className="text-xl">ΔΡΑΣΕΙΣ</a>
            </Scroller>
          </li>
          <button onClick={() => setMembers(!members)}>
            <li
              className="flex font-medium font-manrope m-1 hover:text-blue-400 items-center justify-center rounded-lg border-2 border-light-blue-400 text-gray-700 md:px-4 md:border-0 md:rounded-none"
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
            {members && <Members />}
          </button>

          {links.map(({ name, href }) => (
            <li
              className="m-1 font-manrope text-gray-700 hover:text-blue-400 text-xl border-2 border-light-blue-400 rounded-lg md:px-4 md:border-0 md:rounded-none"
              key={name}
            >
              <Link href={href}>
                <a
                  className={`text-xl   ${
                    router.asPath === href ? "text-blue-400" : ""
                  }`}
                  passhref={href}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
