import MemberofDepElement from "./MemberofDepElement";

function MembersofDep() {
  return (
    <>
      <h1 className="text-6xl pt-12 text-center">ΜΕΛΗ ΔΕΠ</h1>
      <div className="flex max-w-7xl flex-wrap items-center justify-center">
        <MemberofDepElement
          membername="Σανδαλτζόπουλος Ραφαηλ"
          role="Καθηγητής "
          sector="Μοριακής Βιολογίας"
          img="/profil-srr2.png"
          link="https://mbg.duth.gr/images/CVs/2018/CV_Sandaltzopoulos2018.pdf"
          color="#344351"
        />
        <MemberofDepElement
          membername="Αντώνης Γιαννακάκης"
          role="Επικ. Καθηγητής"
          sector="Υπολογιστικής Μοριακής Βιολογίας"
          img="/profil-agian.png"
          link="https://mbg.duth.gr/images/DEP/CVs/NIH_biosketch_Giannakakis03102019.pdf"
          color="#344351"
        />
        <MemberofDepElement
          membername="Αλέξης Γαλάνης"
          role="Αναπλ. Καθηγητής"
          sector="Μοριακής Βιολογίας"
          img="/galanisDimitris.jpeg"
          link="https://mbg.duth.gr/images/DEP/Galanis/AGalanis_CV_07_2018GR.pdf"
          color="#344351"
        />
      </div>
    </>
  );
}

export default MembersofDep;
