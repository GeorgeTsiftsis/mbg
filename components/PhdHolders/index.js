import Year from "../../components/Year/index";

function PhdHolders() {
  return (
    <div className="flex flex-col p-4 items-center justify-center font-manrope">
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
          state={true}
        />
        <Year
          title="Τοκαμάνη Μαρία, Μελέτη miRNA που εμπλέκονται σε σηματοδοτικά μονοπάτια στον καρκίνο του πνεύμονα"
          link="https://thesis.ekt.gr/thesisBookReader/id/43980?lang=el#page/1/mode/2up"
          year="2018"
          state={true}
        />
        <Year
          title=" Ματθαίου Ευθυμία-Ηλιάνα, Νανοθεραπευτικές προσεγγίσεις σε επιθηλιακούς καρκίνους"
          link="https://thesis.ekt.gr/thesisBookReader/id/40575?lang=el#page/1/mode/2up"
          year="2017"
          state={true}
        />
        <Year
          title=" Καραπέτσας Θανάσης,  Μελέτη μοριακών δεικτών στον καρκίνο των ωοθηκών"
          link="https://thesis.ekt.gr/thesisBookReader/id/36871#page/2/mode/2up"
          year="2014"
          state={true}
        />
        <Year
          title="Ευρυπίδης Λανίτης, Ανάπτυξη και αξιολόγηση πειραματικού συθστήματος κυτταριθκής ανοσοθεραπείας του καρκίνου των ωοθηκών"
          link="https://thesis.ekt.gr/thesisBookReader/id/36871#page/2/mode/2up"
          year="2013"
          state={true}
          title2="Ντενάρντα Ντανγκαη Ο ρόλος των μεμβρανικών γλυκοπρωτεϊνών στον καρκίνο των ωοθηκών"
          link2="https://thesis.ekt.gr/thesisBookReader/id/28401?lang=el#page/1/mode/2up"
        />
        <Year
          title="Ευρυπίδης Λανίτης, Ανάπτυξη και αξιολόγηση πειραματικού συθστήματος κυτταριθκής ανοσοθεραπείας του καρκίνου των ωοθηκών"
          link="https://thesis.ekt.gr/thesisBookReader/id/22723?lang=el#page/1/mode/2up"
          year="2007"
          state={true}
        />
      </ul>
    </div>
  );
}

export default PhdHolders;
