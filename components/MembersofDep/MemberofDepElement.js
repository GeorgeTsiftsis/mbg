function MemberofDepElement({ membername, role, img, sector, link, color }) {
  return (
    <div
      style={{ background: color }}
      className="flex font-manrope  flex-col w-full  sm:w-auto p-4 m-6 border-myblue border-2 items-center rounded-lg bg-myfooter"
    >
      <img className="rounded-t-lg w-72" src={img} alt="photoOfMember" />
      <h1 className="my-2 text-white">{membername} </h1>
      <p className="text-white break-all w-52 text-center "> {role}</p>
      <p className="text-white   text-center "> {sector} </p>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <button className="bg-myblue hover:opacity-90 p-2 my-4 text-white border-white border-2 rounded-xl">
          Βιογραφικό
        </button>
      </a>
    </div>
  );
}

export default MemberofDepElement;
