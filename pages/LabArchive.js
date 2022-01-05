import { NextSeo } from "next-seo";
import PhdHolders from "../components/PhdHolders";
import MastersHolders from "../components/MasterHolders";
import BachelorHolders from "../components/BachelorHolders";

function LabArchive() {
  return (
    <>
      <NextSeo
        title="Διατριβές Theranotics MBG Duth"
        description="Οι διατριβές των εργαστηρίων του Theranotics MBG Duth ταξινομημενες ανα χρονολογία "
      />
      <div className="flex flex-col items-center justify-center">
        <PhdHolders />
        <MastersHolders />
        <BachelorHolders />
      </div>
    </>
  );
}

export default LabArchive;
