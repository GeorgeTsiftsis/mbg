import MembersofEreunitikes from "../EreunitikesOmades/MembersofEreunitikes";

function Sinergates() {
  return (
    <div className="flex flex-col items-center justify-center p-4 font-manrope">
      <h1 className="text-xl max-w-4xl  pt-12 text-justify ">
        Η κοινοπραξία μας αποτελείται από 12 συνεργάτες από 4 φορείς (3
        ακαδημαϊκούς φορείς και 1 επιχείρηση) οι οποίοι καλύπτουν ένα εύρος
        ειδικοτήτων.
      </h1>
      <p className="py-4 text-lg font-medium underline text-center">
        Δημοκρίτειο Πανεπιστήμιο Θράκης- Τμήμα Μοριακής Βιολογίας και Γενετικής
      </p>
      <div className="flex max-w-7xl flex-wrap items-center justify-center">
        <MembersofEreunitikes
          membername="Σανδαλτζόπουλος Ραφαηλ"
          role="Καθηγητής Μοριακής Βιολογίας, ΔΠΘ "
          sector="Συντονιστής και Επιστημονικά Υπεύθυνος του έργου και της Ερευνητικής Ενότητας 1"
          img="/sandatzopoulosRafail.jpeg"
          color="#377D6D"
        />
        <MembersofEreunitikes
          membername="Σανδαλτζόπουλος Ραφαηλ"
          role="Καθηγήτρια Μοριακής Ανοσοβιολογίας, ΔΠΘ "
          sector="Επιστημονικά υπεύθυνη της Ερευνητικής Ενότητας 2"
          img="/profil-kc.png"
          color="#274B59"
        />
        <MembersofEreunitikes
          membername="Αγλαΐα Παππα"
          role="Αναπλ. Καθηγήτρια Μοριακής Φυσιολογίας, ΔΠΘ"
          sector="Επιστημονικά υπεύθυνη της Ερευνητικής Ενότητας 7"
          img="/profil-ap.png"
          link="https://mbg.duth.gr/images/CVs/2018/CV_Sandaltzopoulos2018.pdf"
          color="#274B59"
        />
      </div>
    </div>
  );
}

export default Sinergates;
