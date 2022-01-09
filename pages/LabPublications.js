import Publications from "../components/Publications";
import { NextSeo } from "next-seo";

function LabPublications() {
  return (
    <>
      <NextSeo
        title="Δημοσιεύσεις Theranostics MBG Duth"
        description="Δημοσιεύσεις που έχουν αναρτηθεί απο μέλη του Theranostics MBG Duth"
      />
      <div className="flex flex-col p-4 items-center justify-center ">
        <h1 className="text-5xl underline  text-center py-4 ">Publications</h1>
        <Publications />
      </div>
    </>
  );
}

export default LabPublications;
