import Link from "next/link";
import { useRouter } from "next/router";

function Members(props) {
  const router = useRouter();

  const memberrs = [
    {
      nameofLab: props.name,
      href: props.href,
      state: props.state,
      target: props.target,
      rel: props.rel,
    },

    // {
    //   nameofLab: "DarkMatters Group",
    //   href: "http://theranostics.mbg.duth.gr/DarkMatters/index.html",
    // },
  ];
  return (
    <ul className="opacity-70 bg-white rounded-lg px-2">
      {memberrs.map(({ nameofLab, href, state, target, rel }) => (
        <li key={href} className=" hover:text-blue-400   z-10 md:text-left">
          <Link href={href}>
            <a
              onClick={() => !state}
              className={`text-xl underline  ${
                router.asPath === href ? "text-blue-400" : ""
              }`}
              passhref={href}
              target={target}
              rel={rel}
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
