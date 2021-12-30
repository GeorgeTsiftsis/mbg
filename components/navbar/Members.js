import Link from "next/link";
import { useRouter } from "next/router";

function Members(props) {
  const router = useRouter();

  const memberrs = [
    { nameofLab: props.name, href: props.href },

    // {
    //   nameofLab: "DarkMatters Group",
    //   href: "http://theranostics.mbg.duth.gr/DarkMatters/index.html",
    // },
  ];
  return (
    <div className="  ">
      <ul className="font-fancy opacity-70 bg-white rounded-lg px-2">
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
