import Head from "next/head";
import Draseis from "../components/Draseis";
import Carousel from "../components/Carousel";
import MiniInfo from "../components/MiniInfo/index";
import MembersofDep from "../components/MembersofDep";
import EpikentroEreunas from "../components/EpikentroEreunas";
import BottomToTop from "../components/ButtonTotop/index";
import { images } from "../components/Carousel";
export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Head>
        <title>Theranotics MBG Duth </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel images={images} />
      <BottomToTop />
      <MiniInfo />
      <EpikentroEreunas />
      <MembersofDep />
      <Draseis title="ΔΡΑΣΕΙΣ" description=" 20+ Χρόνια Εμπειρίας" />
    </div>
  );
}
