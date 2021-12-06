import Link from "next/link";
function DraseisChild({ title, desc, button, img, link }) {
  return (
    <div className="font-fancy flex flex-col items-center w-62  p-2">
      <img src={img} alt={img + "image"} />
      <h1 className="text-white pb-2  text-center text-xl">{title}</h1>
      <h1 className="text-white text-center w-2/3 ">{desc}</h1>
      <Link passHref={true} href={link}>
        <button className="p-2 m-8 border-blue-200 bg-mybrown border-2 text-white rounded-xl">
          {button}
        </button>
      </Link>
      <span
        style={{ width: "300px" }}
        className="border-b-2 sm:border-b-0 "
      ></span>
    </div>
  );
}

export default DraseisChild;
