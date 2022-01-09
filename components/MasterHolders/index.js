import YearMasters from "../Year/YearMasters";
function MastersHolders() {
  return (
    <div className="flex flex-col p-4 text-center max-w-4xl  items-center justify-center ">
      <h1 className="max-2-xl">
        Τα ψηφιακά αρχεία των διπλωματικών και των μεταπτυχιακών εργασιών είναι
        αναρτημένα στο
        <a
          href="https://repo.lib.duth.gr/jspui/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-blue-400 pointer underline cursor-pointer hover:text-blue-300">
            Ιδρυματικό Αποθετήριο (ΙΑ)
          </h1>
        </a>
        του Δημοκρίτειου Πανεπιστημίου Θράκης ( Δ.Π.Θ.).
      </h1>
      <h1 className=" text-xl p-2 font-semibold"> Μεταπτυχιακές Εργασίες </h1>
      <YearMasters
        title="Χρονοπούλου Σοφία, Σχεδιασμός και κλωνοποίηση γονιδίων που κωδικοποιούν πολυπετίδια με φαρμακευτική δράση σε σύστημα έκφρασης με μεθυλότροφους μύκητες."
        year="2020"
        state={true}
      />
      <YearMasters
        title="Καφετζοπούλου Κανέλλα, Μελέτη των βιολογικών επιδράσεων της υπερέκφρασης του miR-342 με χρήση λεντιϊκών φορέων σε καρκινικά κύτταρα."
        title2="Μουράτη Σοφία, Σχεδιασμός και κατασκευή ενός ταξινομητή κυκλοφορούντων καρκινικών κυττάρων (CTC) ανάλογα με τις βλαστικές τους ιδιότητες."
        year="2019"
        state={true}
      />
      <YearMasters
        title=" Βουλάλας Γρηγόριος, Ταυτοποίηση, κλωνοποίηση και πειραματική επικύρωση γονιδίων-στόχων miRNAs που εμπλέκονται στο σηματοδοτικό μονοπάτι του NF-κB"
        year="2018"
        state={true}
      />
      <YearMasters
        title="Μιαούλης Ελευθέριος, Πειραματική επικύρωση γονιδίων-στόχων των miR-221/222 και miR-342"
        year="2017"
        state={true}
      />
      <YearMasters
        title=" Καραπέτσας Θανάσης, Σχεδιασμός ειδικών πεπτιδίων αναστολέων της αλληλεπίδρασης του μεταγραφικού παράγοντα HIF-1Aμε τις ΜΑΡ κινάσες με πιθανές φαρμακολογικές εφαρμογές."
        year="2010"
        state={true}
      />
    </div>
  );
}

export default MastersHolders;
