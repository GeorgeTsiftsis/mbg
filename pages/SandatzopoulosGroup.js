import MembersOfSandaltzopoulosGroup from "../components/MembersOfSandaltzopoulosGroup";
function SandatzopoulosGroup() {
  return (
    <div className=" items-center justify-items flex flex-col">
      <h1 className="text-center font-manrope text-5xl underline py-8">
        Μέλη Εργαστηρίου
      </h1>
      <div className="font-manrope flex flex-wrap items-center max-w-5xl justify-center">
        <MembersOfSandaltzopoulosGroup />
      </div>
    </div>
  );
}

export default SandatzopoulosGroup;
