import MembersofEreunitikes from "../EreunitikesOmades/MembersofEreunitikes";
import { NextSeo } from "next-seo";
function Sinergates() {
  return (
    <>
      <NextSeo
        title="Συνεργάτες Polypeppharm"
        description="Η κοινοπραξία του Polypeppharm MBG Duth και τα ονόματα φορέων-συνεργατών"
      />
      <div className="flex flex-col items-center justify-center  p-4 ">
        <h1 className="text-xl max-w-4xl  pt-12 text-justify ">
          Η κοινοπραξία μας αποτελείται από 12 συνεργάτες από 4 φορείς (3
          ακαδημαϊκούς φορείς και 1 επιχείρηση) οι οποίοι καλύπτουν ένα εύρος
          ειδικοτήτων.
        </h1>
        <p className="py-4 text-lg font-medium underline text-center">
          Δημοκρίτειο Πανεπιστήμιο Θράκης- Τμήμα Μοριακής Βιολογίας και
          Γενετικής
        </p>
        <div className="flex max-w-7xl flex-wrap items-center justify-center ">
          <MembersofEreunitikes
            membername="Σανδαλτζόπουλος Ραφαηλ"
            role="Καθηγητής Μοριακής Βιολογίας, ΔΠΘ "
            sector="Συντονιστής και Επιστημονικά Υπεύθυνος του έργου και της Ερευνητικής Ενότητας 1"
            img="/profil-srr.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Κατερίνα Χλίχλια"
            role="Καθηγήτρια Μοριακής Ανοσοβιολογίας, ΔΠΘ "
            sector="Επιστημονικά υπεύθυνη της Ερευνητικής Ενότητας 2"
            img="/profil-kc.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Αγλαΐα Παππα"
            role="Αναπλ. Καθηγήτρια Μοριακής Φυσιολογίας, ΔΠΘ"
            sector="Επιστημονικά υπεύθυνη της Ερευνητικής Ενότητας 7"
            img="/profil-ap.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Βασιλική Φαδούλογλουα"
            role="Αναπ. Καθηγήτρια Μοριακής Βιολογίας με έμφαση στη Δομή μακρομορίων, ΔΠΘ"
            sector="Μέλος της Ερευνητικής Ομάδας"
            img="/profil-vf.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Νικόλαος Γλυκός"
            role="Αναπ. Καθηγητής Δομικής και Υπολογιστικής Βιολογίας, ΔΠΘ"
            sector="Μέλος της Ερευνητικής Ομάδας"
            img="/profil-nmg.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Αντώνης Γιαννακάκης"
            role="Επικ. Καθηγητής Υπολογιστικής Μοριακής Βιολογίας, ΔΠΘ"
            sector="Μέλος της Ερευνητικής Ομάδας"
            img="/profil-aig.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Αλέξης Γαλάνης"
            role="Αναπ. Καθηγητής Μοριακής Βιολογίας, ΔΠΘ"
            sector="Μέλος της Ερευνητικής Ομάδας και Υπεύθυνος Ποιοτικού Ελέγχου"
            img="/profil-ag.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Δρ. Γιώργος Τριανταφυλλίδης"
            role="Eξωτερικός Συνεργάτης"
            sector="Μέλος της Ερευνητικής Ενότητας 9"
            img="/profil-gt.png"
            color="white"
          />
        </div>
        <p className="py-4 text-lg font-medium underline text-center">
          Πανεπιστήμιο Πατρών- τμήμα Φαρμακευτικής
        </p>
        <div className="flex max-w-7xl flex-wrap items-center justify-center ">
          <MembersofEreunitikes
            membername="Γιώργος Σπυρούλιας"
            role="Καθηγητής, ΠΠ"
            sector="Επιστημονικά υπεύθυνος της Ερευνητικής Ενότητας 3"
            unisector="Ομάδα Βιομοριακής Προσομοίωσης και NMR του Εργαστηρίου Φαρμακογνωσίας "
            img="/profil-gs.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Κωνσταντίνος Αυγουστάκης"
            role="Καθηγητής, ΠΠ"
            sector="Επιστημονικά υπεύθυνος της Ερευνητικής Ενότητας 6"
            unisector="Εργαστήριο Φαρμακευτικής Τεχνολογίας"
            img="/profil-ka.png"
            color="white"
          />
        </div>
        <p className="py-4 text-lg font-medium underline text-center">
          Πανεπιστήμιο Πατρών- τμήμα Ιατρικής
        </p>
        <div className="flex max-w-7xl flex-wrap items-center justify-center ">
          <MembersofEreunitikes
            membername="Σταύρος Ταραβήρας"
            role="Καθηγητής, ΠΠ"
            sector="Επιστημονικά υπεύθυνος της Ερευνητικής Ενότητας 8"
            unisector="Εργαστήριο Φυσιολογίας"
            img="/profil-ts.png"
            color="white"
          />
        </div>
        <p className="py-4 text-lg font-medium underline text-center">
          Verisfield A.E.
        </p>
        <div className="flex max-w-7xl flex-wrap items-center justify-center ">
          <MembersofEreunitikes
            membername="Όλγα Πολύζου"
            role="Χημικός"
            sector="Επιστημονικά υπεύθυνη της Ερευνητικής Ενότητας 4"
            img="/profil_verisfield.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Χρήστος Κουτσοδήμος"
            role="Χημικός Μηχανικός"
            sector="Επιστημονικά υπεύθυνη της Ερευνητικής Ενότητας 5"
            img="/profil_verisfield.png"
            color="white"
          />
        </div>
      </div>
    </>
  );
}

export default Sinergates;
