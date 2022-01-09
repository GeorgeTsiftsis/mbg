function MembersofEreunitikes({
  membername,
  sector,
  role,
  img,
  color,
  unisector,
}) {
  return (
    <div
      style={{ background: color }}
      className="flex flex-col w-full  sm:w-auto p-4 m-6  items-center border-2 "
    >
      <img className="rounded-full w-72" src={img} alt="photoOfMember" />
      <h1 className="my-2 underline text-black">{membername} </h1>
      <p
        style={{ maxWidth: "15rem", height: "100px" }}
        className="text-black  text-center  "
      >
        {role}
      </p>
      {unisector && (
        <p
          style={{ maxWidth: "15rem", height: "100px" }}
          className="text-black  text-center"
        >
          {unisector}
        </p>
      )}
      <p
        style={{ maxWidth: "15rem", height: "100px" }}
        className="text-black text-center  py-1 "
      >
        {sector}
      </p>
    </div>
  );
}

export default MembersofEreunitikes;
