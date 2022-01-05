import { NextSeo } from "next-seo";
import Carousel, { images2 } from "../../components/Carousel/index";
import PolypepharmProgram from "../../components/PolypepharmProgram";
import EnotitesErgasias from "../../components/EnotitesErgasias";
import Koinopraxia from "../../components/PolypepharmProgram/Koinopraxia";
function Polypeppharm() {
  return (
    <>
      <NextSeo
        title="Polypeppharm Theranotics MBG Duth"
        description="Το έργο POLYPEPPHARM έχει ως στόχο την ανάπτυξη φαρμακευτικών πολυπεπτιδίων μέσω της έκφρασής τους σε ένα ευκαρυωτικό σύστημα σε αντιδιαστολή προς τα βακτηριακά συστήματα που χρησιμοποιούνται σήμερα."
      />
      <div className="flex flex-col justify-items items-center">
        <Carousel images={images2} />
        <PolypepharmProgram />
        <Koinopraxia />
        <EnotitesErgasias />
      </div>
    </>
  );
}

export default Polypeppharm;
