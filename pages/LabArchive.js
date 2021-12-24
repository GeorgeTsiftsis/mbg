import { dataarchive1 } from "../components/ArchiveData/index";

import Year from "../components/Year";

function LabArchive() {
  return (
    <div className="flex flex-col p-4 max-4-xl items-center justify-center font-manrope">
      <h1 className="text-5xl underline  text-center py-4 ">Αρχείο</h1>
      <p className="py-2 text-center">
        Παρακάτω μπορείτε να βρείτε τις πτυχιακές διατριβές των εργαστηρίων μας
        ταξινομημενες ανα χρονολογία
      </p>
      <h1 className=" text-xl p-2 font-semibold"> Διδακτορικές Διατριβές </h1>
      <ul className="flex flex-col items-center justify-center">
        <Year
          title="Σεμιλιέτωφ Κατερίνα, Ανάπτυξη και αξιολόγηση συστήματος ανθρωποποιημένων ποντικών ως προκλινικό μοντέλο καινοτόμων αντικαρκινικών ανοσοθεραπειών"
          link="https://www.didaktorika.gr/eadd/handle/10442/46049"
          year="2019"
          state={false}
        />

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
