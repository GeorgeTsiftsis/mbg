import Link from "next/link";
function DraseisChild({ title, title2, desc, button, img, link, link2 }) {
  return (
    <div className="flex flex-col items-center w-62  p-2">
      <img src={img} alt={img + "image"} />
      {title && (
        <h1 className="text-white pb-2  text-center text-xl">{title}</h1>
      )}
      {title2 && (
        <h1
          style={{ maxWidth: "20rem", height: "70px" }}
          className="text-white py-8   text-center text-xl"
        >
          {title2}
        </h1>
      )}

      {desc && <h1 className="text-white text-center w-2/3 ">{desc}</h1>}
      {link && (
        <Link passHref={true} href={link}>
          <button className="p-2 m-8 border-blue-200 bg-mybrown border-2 text-white rounded-xl">
            {button}
          </button>
        </Link>
      )}
      {link2 && (
        <a target="_blank" rel="noopener noreferrer" href={link2}>
          <button className="p-2 m-8 border-blue-200 bg-mybrown border-2 text-white rounded-xl">
            {button}
          </button>
        </a>
      )}
      <span
        style={{ width: "300px" }}
        className="border-b-2 sm:border-b-0 "
      ></span>
    </div>
  );
}

export default DraseisChild;
