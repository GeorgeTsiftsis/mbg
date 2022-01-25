import MembersofEreunitikes from "./MembersofEreunitikes";
import { NextSeo } from "next-seo";
function EreunitikesOmades() {
  return (
    <>
      <NextSeo
        title="Ερευνητική ομάδα του Polypeppharm  "
        description="Η ερευνητική ομάδα του πρόγραμματος του Polypeppharm"
      />
      <div className="flex flex-col items-center justify-center  p-4 ">
        <h1 className="py-4 text-2xl   font-medium underline text-center">
          Ερευνητικές ομάδες
        </h1>
        <h1 className="text-lg py-2">Ερευνητική ομάδα ΔΠΘ</h1>
        <div className="flex max-w-7xl flex-wrap items-center justify-center ">
          <MembersofEreunitikes
            membername="Μαρία Τοκαμάνη"
            role="Μοριακός Βιολόγος και Γενετίστρια"
            img="/Staff/profil-mt2.jpg"
            // sector="Μεταδιδακτορική Ερευνήτρια"
            color="white"
          />
          <MembersofEreunitikes
            membername="Ηλίας Τσοχανταρίδης"
            role="Μοριακός Βιολόγος και Γενετιστής"
            // sector="Μεταδιδακτορικός Ερευνητής"
            img="/Staff/profil-it.png"
            color="white"
          />
          <MembersofEreunitikes
            membername="Σοφία Χρονοπούλου
            "
            role="Βιολόγος"
            // sector="Υποψήφια Διδάκτωρ"
            img="/Staff/profil-sc.jpg"
            color="white"
          />
        </div>
      </div>
    </>
  );
}

export default EreunitikesOmades;
