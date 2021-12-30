import Link from "next/link";

function Programmata() {
  return (
    <div className="font-manrope flex flex-col justify-center items-center">
      <h1 className="text-center text-5xl underline py-4">Προγράμματα</h1>
      <h1 className=" p-2 text-3xl"> Sandaltzopoulos Laboratory</h1>
      <h1 className=" text-2xl text-left">Ενεργά ερευνητικά προγράμματα</h1>
      <img className="w-1/4 rounded-xl" src="./lampes.png" />
      <ul className="flex flex-col text-blue-400 items-center justify-center">
        <li className=" hover:text-blue-300 p-2">
          <Link passHref href="/Polypeppharm">
            <a target="_blank" rel="noopener noreferrer">
              PolypepPharm: Βελτιωμένα γενόσημα πολυπεπτιδικά φάρμακα με
              καινοτόμες φαρμακοτεχνικές μορφές.
            </a>
          </Link>
        </li>
        <li className=" hover:text-blue-300 pb-2 ">
          <a
            passHref
            href="http://fishmid.aua.gr"
            target="_blank"
            rel="noopener noreferrer"
          >
            FishMID: Έλεγχος αυθεντικότητας και νοθείας αλιευμάτων της ελληνικής
            αγοράς με μοριακή ταυτοποίηση.
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Programmata;
