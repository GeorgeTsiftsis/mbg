function MembersofEreunitikes({ membername, sector, role, img, color }) {
  return (
    <div
      style={{ background: color }}
      className="flex font-manrope  flex-col w-full  sm:w-auto p-4 m-6 border-myblue border-2 items-center rounded-lg bg-myfooter"
    >
      <img className="rounded-t-lg w-72" src={img} alt="photoOfMember" />
      <h1 className="my-2 text-white">{membername} </h1>
      <p className="text-white  w-52 text-center "> {role}</p>
      <p style={{ maxWidth: "15rem" }} className="text-white  text-center ">
        {sector}
      </p>
    </div>
  );
}

export default MembersofEreunitikes;
