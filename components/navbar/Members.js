import Link from "next/link";
import { useRouter } from "next/router";

function Members() {
  const router = useRouter();

  const memberrs = [
    { nameofLab: "Sandatzopoulos Lab", href: "/SandatzopoulosGroup" },

    {
      nameofLab: "DarkMatters Group",
      href: "http://theranostics.mbg.duth.gr/DarkMatters/index.html",
    },
  ];
  return (
    <div className=" md:absolute ">
      <ul className="font-fancy  md:relative md:bottom-0 md:right-7 z-10 opacity-70 bg-white rounded-lg px-2">
        {memberrs.map(({ nameofLab, href }) => (
          <li key={href} className=" hover:text-blue-400   z-10 md:text-left">
            <Link href={href}>
              <a
                className={`text-xl underline  ${
                  router.asPath === href ? "text-blue-400" : ""
                }`}
                passhref={href}
              >
                {nameofLab}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Members;
