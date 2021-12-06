import MemberofDepElement from "./MemberofDepElement";

function MembersofDep() {
  return (
    <>
      <h1 className="text-6xl pt-12 text-center font-manrope">ΜΕΛΗ ΔΕΠ</h1>
      <div className="flex max-w-7xl flex-wrap items-center justify-center">
        <MemberofDepElement
          membername="Σανδαλτζόπουλος Ραφαηλ"
          role="Καθηγητής "
          sector="Μοριακής Βιολογίας"
          img="/sandatzopoulosRafail.jpeg"
          link="https://mbg.duth.gr/images/CVs/2018/CV_Sandaltzopoulos2018.pdf"
        />
        <MemberofDepElement
          membername="Αντώνης Γιαννακάκης"
          role="Επικ. Καθηγητής"
          sector="Υπολογιστικής Μοριακής Βιολογίας"
          img="/gianakakisAntonis.jpeg"
          link="https://mbg.duth.gr/images/DEP/CVs/NIH_biosketch_Giannakakis03102019.pdf"
        />
        <MemberofDepElement
          membername="Αλέξης Γαλάνης"
          role="Αναπ. Καθηγητής"
          sector="Μοριακής Βιολογίας"
          img="/galanisDimitris.jpeg"
          link="https://mbg.duth.gr/images/DEP/Galanis/AGalanis_CV_07_2018GR.pdf"
        />
      </div>
    </>
  );
}

export default MembersofDep;
