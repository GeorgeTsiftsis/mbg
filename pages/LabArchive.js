import { dataarchive1 } from "../components/ArchiveData/index";
import { useState } from "react";
function LabArchive() {
  const [vis19, setVis19] = useState(false);

  return (
    <div className="flex flex-col p-4 max-4-xl items-center justify-center font-manrope">
      <h1 className="text-5xl underline  text-center py-4 ">Αρχείο</h1>
      <p className="py-2 text-center">
        Παρακάτω μπορείτε να βρείτε τις πτυχιακές διατριβές των εργαστηρίων μας
        ταξινομημενες ανα χρονολογία
      </p>
      <h1 className=" text-xl p-2 font-semibold"> Διδακτορικές Διατριβές </h1>
      <ul className="flex flex-col items-center justify-center">
        <button
          onClick={() => setVis19(!vis19)}
          className="text-xl px-2 py-1 border-2  shadow-2xl rounded-xl text-white bg-blue-400"
        >
          2019
        </button>
        {vis19 && (
          <a
            href="https://www.didaktorika.gr/eadd/handle/10442/46049"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="max-w-5xl py-3 hover:text-blue-400 text-justify">
              {dataarchive1}
            </li>
          </a>
        )}
        <li className="text-xl px-2 py-1 border-2  shadow-2xl rounded-xl text-white bg-blue-400">
          2018
        </li>
        <li className="text-xl px-2 py-1 border-2  shadow-2xl rounded-xl text-white bg-blue-400">
          2017
        </li>
        <li className="text-xl px-2 py-1 border-2  shadow-2xl rounded-xl text-white bg-blue-400">
          2014
        </li>
        <li className="text-xl px-2 py-1 border-2  shadow-2xl rounded-xl text-white bg-blue-400">
          2013
        </li>
        <li className="text-xl px-2 py-1 border-2  shadow-2xl rounded-xl text-white bg-blue-400">
          2007
        </li>
      </ul>
    </div>
  );
}

export default LabArchive;
