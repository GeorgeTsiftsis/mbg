import DraseisChild from "./DraseisChild";
function Draseis() {
  return (
    <div id="section1" className="bg-mygray w-full h-auto pb-6">
      <h1 className="text-center pt-20 font-fancy text-6xl  text-white ">
        ΔΡΑΣΕΙΣ
      </h1>
      <h1 className="text-white text-center font-fancy  pb-8">
        20+ Χρόνια Εμπειρίας
      </h1>
      <div className="flex items-center justify-center w-full border-t-4  flex-wrap ">
        <DraseisChild
          title="Ερευνητικά Προγράμματα"
          desc="Δείτε τα ερευνητικά προγράμματα"
          button="Πατήστε εδώ"
          img="/Services/actions1.png"
          link="/Programmata"
        />
        <DraseisChild
          title="Δημοσιεύσεις"
          desc="Παρακάτω μπορείτε να δείτε όλες τις δημοσιεύσεις"
          button="Πατήστε εδώ"
          img="/Services/actions2.png"
          link="/LabPublications"
        />
        <DraseisChild
          title="Ανακοινώσεις σε συνέδρια"
          desc="Όλες οι ανακοινώσεις των συνεδρίων"
          button="Πατήστε εδώ"
          img="/Services/actions3.png"
          link="/LabPublications"
        />
        <DraseisChild
          title="Πτυχιακές & Διατριβές"
          desc="Πτυχιακές & Διατριβές των εργαστηρίων"
          button="Πατήστε εδώ"
          img="/Services/actions4.png"
          link="/LabArchive"
        />
      </div>
    </div>
  );
}

export default Draseis;
