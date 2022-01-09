import MembersOfSandaltzopoulosGroup from "../components/MembersOfSandaltzopoulosGroup";
import Graduates from "../components/MembersOfSandaltzopoulosGroup/Graduates";
import { NextSeo } from "next-seo";
function SandatzopoulosGroup() {
  return (
    <>
      <NextSeo
        title="Μέλη Εργαστηρίου του Theranostics MBG Duth"
        description="Τα Μέλη του εργαστηρίου μας"
      />
      <div className=" items-center justify-items flex flex-col">
        <h1 className="text-center font-manrope text-5xl underline py-8">
          Μέλη Εργαστηρίου
        </h1>
        <div className="font-manrope flex flex-wrap items-center max-w-5xl justify-center">
          <MembersOfSandaltzopoulosGroup />
        </div>
        <Graduates />
      </div>
    </>
  );
}

export default SandatzopoulosGroup;
