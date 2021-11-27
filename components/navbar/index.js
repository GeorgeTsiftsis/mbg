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
      <div className="flex items-center justify-around ">
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

      <div className={"md:flex flex-grow " + (navbarOpen ? "" : " hidden")}>
        <ul className="flex md:flex-row flex flex-col md:justify-center w-full text-center flex-wrap ">
          <li className="m-1 md:px-4 border-b-2 md:border-b-0 border-light-blue-400 underline font-manrope text-gray-700 hover:text-blue-400  font-medium">
            <Scroller
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a className="text-lg">ΔΡΑΣΕΙΣ</a>
            </Scroller>
          </li>
          <button onClick={() => setMembers(!members)}>
            <li
              className="m-1  md:px-4 border-b-2 md:border-b-0 border-light-blue-400 underline font-manrope text-gray-700 hover:text-blue-400 font-medium flex items-center justify-center "
              key="aso"
            >
              <a
                className={`text-lg pr-1  ${
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
              className="m-1 md:px-4 border-b-2 md:border-b-0 border-light-blue-400 underline font-manrope text-gray-700 hover:text-blue-400  font-medium"
              key={name}
            >
              <Link href={href}>
                <a
                  className={`text-lg  ${
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

      <h1>New font</h1>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2 className="font-fancy">New font</h2>
      <h2
        id="section1"
        className="font-fancy  h-80 text-lg text-center bg-red-400"
      >
        Draseis
      </h2>
    </nav>
  );
}

export default Navbar;
