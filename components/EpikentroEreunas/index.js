import EpikentroChild from "./EpikentroChild";
function EpikentroEreunas() {
  return (
    <div className="flex flex-col   items-center justify-center max-w-7xl">
      <h1 className=" text-blue-400 text-2xl text-center pb-4">
        Επίκεντρο της έρευνας μας είναι
      </h1>
      <div className="flex flex-wrap justify-center self-center flex-col md:flex-row  w-12/12">
        <EpikentroChild
          title="Biomarkers"
          description="Η μελέτη της γονιδιακής έκφρασης με σκοπό την ανακάλυψη βιοδεικτών
            και την αξιοποίησή τους ως μοριακούς διαγνωστικούς δείκτες ή ως
            θεραπευτικούς στόχους."
          letter="B"
          image="./Actions/item1.jpg"
        />
        <EpikentroChild
          title="Recombinant DNA"
          description="H εφαρμογή της τεχνολογίας ανασυνδυασμένου DNA για την παραγωγή συνθετικών πολυπεπτιδίων καθώς η μελέτη της σχέσης μοριακής δομής και λειτουργίας."
          letter="R"
          image="./Actions/item2.jpg"
        />
        <EpikentroChild
          title="Protein Purification"
          description="H απομόνωση φυσικών πρωτεϊνών υψηλής προστιθέμενης αξίας με σημαντικές βιοτεχνολογικές εφαρμογές."
          letter="P"
          image="./Actions/item3.jpg"
        />
        <EpikentroChild
          title="Molecular Agrobiology"
          description="Η χρήση των μεθόδων της Μοριακής Βιολογίας στην Αγροβιολογία με σκοπό τον προσδιορισμό τρόπων αύξησης των αποδόσεων των καλλιεργειών."
          letter="A"
          image="./Actions/item4.jpg"
        />
        <EpikentroChild
          title="Exosomes"
          description="Μελέτη χρήσης εξωσωμάτων ως βιοδείκτες εξέλιξης παθολογικών καταστάσεων και ως θεραπευτική επιλογή. "
          letter="E"
          image="./Actions/item5.jpg"
        />
        <EpikentroChild
          title="Probiotics"
          description="H μελέτη των μοριακών μηχανισμών δράσης των προβιοτικών μικροοργανισμών με βιοιατρικές εφαρμογές."
          letter="P"
          image="./Actions/item6.jpg"
        />
      </div>
    </div>
  );
}

export default EpikentroEreunas;
