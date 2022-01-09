import Link from "next/link";
import { NextSeo } from "next-seo";

function Programmata() {
  return (
    <>
      <NextSeo
        title="Προγράμματα Theranostics MBG Duth"
        description="Eνεργά προγράμματα του Theranostics MBG Duth"
      />
      <div className="font-manrope flex flex-col p-2 justify-center items-center">
        <h1 className="text-center text-5xl underline py-4">Προγράμματα</h1>
        <h1 className="  text-3xl text-center ">Sandaltzopoulos Laboratory</h1>
        <h1 className=" text-xl py-2 text-center">
          Χρηματοδοτούμενα ενεργά ερευνητικά προγράμματα
        </h1>
        <p className="  max-w-4xl text-justify">
          Παρακάτω αναφέρονται τα ενεργά ερευνητικά προγράμματα τα οποία
          λαμβάνουν χρηματοδότηση από διάφορους δημόσιους και ευρωπαικούς
          πόρους, στα οποία είναι επιστημονικά υπεύθυνος ο κ. Σανδαλτζόπουλος
        </p>
        <img
          className="w-full max-w-4xl py-2 rounded-xl"
          src="./lampes.png"
          alt="./imageofanidea"
        />
        <ul className="flex flex-col  text-justify space-y-2 text-blue-400 items-center justify-center">
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
