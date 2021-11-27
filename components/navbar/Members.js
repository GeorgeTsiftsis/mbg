import Link from "next/link";
import { useRouter } from "next/router";

function Members() {
  const router = useRouter();

  const memberrs = [
    { nameofLab: "Sandatzopoulos Lab", href: "/Sandatzopoulos" },
    { nameofLab: "Galanis Lab", href: "/Galanis" },
    { nameofLab: "Giannakakis Lab", href: "/Giannakakis" },
  ];
  return (
    <div className=" md:absolute">
      <ul className="font-fancy  md:relative md:bottom-0 md:right-7 z-10 opacity-60 rounded-lg px-2">
        {memberrs.map(({ nameofLab, href }) => (
          <li key={href} className=" hover:text-blue-400">
            <Link href={href}>
              <a
                className={`text-lg underline  ${
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
