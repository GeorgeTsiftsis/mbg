import Carousel, { images2 } from "../../components/Carousel/index";
import PolypepharmProgram from "../../components/PolypepharmProgram";
import EnotitesErgasias from "../../components/EnotitesErgasias";
import Koinopraxia from "../../components/PolypepharmProgram/Koinopraxia";
function Polypeppharm() {
  return (
    <div className="flex flex-col justify-items items-center">
      <Carousel images={images2} />
      <PolypepharmProgram />
      <Koinopraxia />
      <EnotitesErgasias />
    </div>
  );
}

export default Polypeppharm;
