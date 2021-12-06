import SingleMemberofLab from "../components/SingleMemberofLab";
function SandatzopoulosGroup() {
  return (
    <>
      <h1 className="text-center text-5xl underline">Μέλη Εργαστηρίου</h1>
      <div className="font-manrope flex flex-wrap items-center justify-center">
        <SingleMemberofLab />
        <SingleMemberofLab />
        {/* <SingleMemberofLab lastName="Maria Tokamani" img="./avatar2.png" />
        <SingleMemberofLab lastName="Maria Tokamani" img="./avatar3.png" /> */}
      </div>
    </>
  );
}

export default SandatzopoulosGroup;
