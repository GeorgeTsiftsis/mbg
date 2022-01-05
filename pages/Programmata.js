import Link from "next/link";
import { NextSeo } from "next-seo";

function Programmata() {
  return (
    <>
      <NextSeo
        title="Προγράμματα Theranotics MBG Duth"
        description="Τα ενεργά προγράμματα όλων των εργαστηρίων του Theranotics MBG Duth"
      />
      <div className="font-manrope flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl underline py-4">Προγράμματα</h1>
        <h1 className=" p-2 text-3xl"> Sandaltzopoulos Laboratory</h1>
        <h1 className=" text-xl text-left">Ενεργά ερευνητικά προγράμματα</h1>
        <img
          className="w-3/4 max-w-4xl py-2 rounded-xl"
          src="./lampes.png"
          alt="./imageofanidea"
        />
        <ul className="flex flex-col p-4 text-justify space-y-2 text-blue-400 items-center justify-center">
          <li className=" hover:text-blue-300 ">
            <Link passhref href="/Polypeppharm">
              <a target="_blank" rel="noopener noreferrer">
                1. PolypepPharm: Βελτιωμένα γενόσημα πολυπεπτιδικά φάρμακα με
                καινοτόμες φαρμακοτεχνικές μορφές.
              </a>
            </Link>
          </li>
          <li className=" hover:text-blue-300 pb-2 ">
            <a
              href="http://fishmid.aua.gr"
              target="_blank"
              rel="noopener noreferrer"
            >
              2. FishMID: Έλεγχος αυθεντικότητας και νοθείας αλιευμάτων της
              ελληνικής αγοράς με μοριακή ταυτοποίηση.
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Programmata;
