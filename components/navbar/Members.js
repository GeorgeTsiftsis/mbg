import Link from "next/link";
import { useRouter } from "next/router";

function Members(props) {
  const router = useRouter();

  const memberrs = [
    { nameofLab: props.name, href: props.href, state: props.state },

    // {
    //   nameofLab: "DarkMatters Group",
    //   href: "http://theranostics.mbg.duth.gr/DarkMatters/index.html",
    // },
  ];
  return (
    <ul className="font-fancy opacity-70 bg-white rounded-lg px-2">
      {memberrs.map(({ nameofLab, href, state }) => (
        <li key={href} className=" hover:text-blue-400   z-10 md:text-left">
          <Link href={href}>
            <a
              onClick={() => state(false)}
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
  );
}

export default Members;
