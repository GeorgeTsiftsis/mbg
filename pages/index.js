import Head from "next/head";
import SimpleMap from "../components/maps/SimpleMap";
import Draseis from "../components/Draseis";
import Carousel from "../components/Carousel";
import MiniInfo from "../components/MiniInfo/index";
import MembersofDep from "../components/MembersofDep";
import EpikentroEreunas from "../components/EpikentroEreunas";
export default function Home() {
  return (
    <div className="py-2 flex flex-col items-center justify-center">
      <Head>
        <title>Theranotics MBG Duth </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <MiniInfo />
      <EpikentroEreunas />
      <MembersofDep />
      <Draseis />
      <SimpleMap />
    </div>
  );
}
