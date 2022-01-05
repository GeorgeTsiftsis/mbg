import Publications from "../components/Publications";
import { NextSeo } from "next-seo";

function LabPublications() {
  return (
    <>
      <NextSeo
        title="Δημοσιεύσεις Theranotics MBG Duth"
        description="Δημοσιεύσεις που έχουν δημοσιευθεί απο μέλη του Theranotics MBG Duth"
      />
      <div className="flex flex-col p-4 items-center justify-center font-manrope">
        <h1 className="text-5xl underline  text-center py-4 ">Publications</h1>
        <Publications />
      </div>
    </>
  );
}

export default LabPublications;
