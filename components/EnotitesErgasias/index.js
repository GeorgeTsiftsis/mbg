import EpikentroChild from "../EpikentroEreunas/EpikentroChild";

EpikentroChild;
function EnotitesErgasias() {
  return (
    <div
      id="EnotitesErgasias"
      className="p-4 space-y-2 font-manrope max-w-6xl text-justify "
    >
      <h1 className="text-blue-400 text-2xl text-center pb-2">
        Ενότητες Εργασίας
      </h1>
      <div className="flex items-center  justify-center w-full border-t-4  flex-wrap ">
        <EpikentroChild
          description="Σύνθεση ανασυνδυασμένων φαρμακευτικών πολυπεπτιδίων σε εργαστηριακή κλίμακα. 
          Ενέργειες Διάχυσης"
          letter="I"
          image="./EnotitesErgasias/pitem1.png"
        />
        <EpikentroChild
          description="Μελέτη της αντιγονικότητας και πρόβλεψη της ανοσογονικότητας των ανασυνδυασμένων φαρμακευτικών πολυπεπτιδίων σε προκλινικό επίπεδο."
          letter="2"
          image="./EnotitesErgasias/pitem2.png"
        />
        <EpikentroChild
          description="Μελέτη της πρωτεϊνικής δομής και της βιοχημικής σταθερότητας των ανασυνδυασμένων πρωτεϊνών με NMR."
          letter="3"
          image="./EnotitesErgasias/pitem3.png"
        />
        <EpikentroChild
          description="Βελτιστοποίηση σύνθεσης φαρμακευτικών πρωτεϊνών σε βιομηχανική κλίμακα."
          letter="4"
          image="./EnotitesErgasias/pitem4.png"
        />
        <EpikentroChild
          description="Εφαρμογή μεθοδολογιών ανάπτυξης και παραγωγής ενέσιμης φαρμακομορφής των πολυπεπτιδίων."
          letter="5"
          image="./EnotitesErgasias/pitem5.png"
        />
        <EpikentroChild
          description="Aνάπτυξη και παραγωγή φαρμακομορφών σε εμφυτεύματα τύπου υδροπηκτής και σε εμφυτεύματα τύπου μικροσφαιριδίων."
          letter="6"
          image="./EnotitesErgasias/pitem6.png"
        />
        <EpikentroChild
          description="Συγκριτική μελέτη δραστικότητας των διαφόρων φαρμακομορφών in vitro."
          letter="7"
          image="./EnotitesErgasias/pitem7.png"
        />
        <EpikentroChild
          description="Συγκριτική μελέτη βιοδιαθεσιμότητας των φαρμακομορφών σε πειραματόζωα."
          letter="8"
          image="./EnotitesErgasias/pitem8.png"
        />
        <EpikentroChild
          description="Μελέτη Σκοπιμότητας -Τεχνοοικονομική μελέτη. εΔΩ 2-3-4 Λεξεις ΑΚΟΜΑ"
          letter="9"
          image="./EnotitesErgasias/pitem9.png"
        />
      </div>
    </div>
  );
}

export default EnotitesErgasias;
