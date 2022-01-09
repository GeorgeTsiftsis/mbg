import Draseis from "../components/Draseis";
import Carousel from "../components/Carousel";
import MiniInfo from "../components/MiniInfo/index";
import MembersofDep from "../components/MembersofDep";
import EpikentroEreunas from "../components/EpikentroEreunas";
import BottomToTop from "../components/ButtonTotop/index";
import { images } from "../components/Carousel";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Theranostics MBG Duth"
        description="Εργαστήριο Γονιδιακής Έκφρασης, Μοριακής Διάγνωσης και Σύγχρονων
      Θεραπευτικών Μέσων του τμήματος Μοριακής Βιολογίας και Γενετικής, των
      Σχολών Υγείας του ΔΠΘ."
      />
      <div className=" flex flex-col items-center justify-center">
        <Carousel images={images} />
        <BottomToTop />
        <MiniInfo />
        <EpikentroEreunas />
        <MembersofDep />
        <Draseis title="ΔΡΑΣΕΙΣ" description=" 20+ Χρόνια Εμπειρίας" />
      </div>
    </>
  );
}
