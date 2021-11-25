// import Logo from '../../public/copyLabLetterheadsmall.png'
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import links from "./links";

function Navbar() {
  const [open, close] = useState(true);

  const handleClick = () => {
    close((close) => (close = !close));
  };
  // const isolatehandleClick = () => {
  //   closeIsolate((closeIsolate) => (closeIsolate = !closeIsolate));
  // };
  return (
    <nav>
      <div className="flex items-center justify-around ">
        <img
          // width="600"
          className="w-3/4 max-w-xl pb-4"
          src="/copyLabLetterheadsmall.png"
          alt="mbg-logo"
        />

        {open ? (
          <AiOutlineMenu
            className="md:hidden"
            onClick={handleClick}
            size="2em"
          />
        ) : (
          <AiOutlineCloseCircle
            className="md:hidden"
            size="2em"
            onClick={handleClick}
          />
        )}
      </div>

      <ul
        className={
          open
            ? "flex flex-col text-center flex-wrap md:flex-row md:justify-center"
            : "hidden md:flex-row"
        }
      >
        {links.map(({ name, href }) => (
          <li
            className="m-1 md:px-4 border-b-2 md:border-b-0	 border-light-blue-400 underline font-manrope text-gray-700 hover:text-blue-400  font-medium"
            key={name}
          >
            <Link href={href}>
              <a className="text-lg" passhref={href}>
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <h1>New font</h1>
      <h2 className="font-fancy">New font</h2>
    </nav>
  );
}

export default Navbar;
