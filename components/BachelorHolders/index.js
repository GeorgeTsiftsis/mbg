import {
  dataarchive2004,
  dataarchive2005,
  dataarchive2006,
  dataarchive2007,
  dataarchive2008,
  dataarchive2009,
  dataarchive2011,
  dataarchive2012,
  dataarchive2013,
  dataarchive2014,
  dataarchive2015,
  dataarchive2016,
  dataarchive2017,
  dataarchive2018,
  dataarchive2019,
  dataarchive2020,
  dataarchive2021,
} from "../ArchiveData/index";
import TestYear from "../Year/TestYear";
function BachelorHolders() {
  return (
    <div className="flex flex-col p-4 text-center max-w-4xl  items-center justify-center ">
      <h1 className=" text-xl p-2 font-semibold"> Διπλωματικές Εργασίες </h1>
      <TestYear titles={dataarchive2021} year="2021" state={true} />
      <TestYear titles={dataarchive2020} year="2020" state={true} />
      <TestYear titles={dataarchive2019} year="2019" state={true} />
      <TestYear titles={dataarchive2018} year=" 2018" state={true} />
      <TestYear titles={dataarchive2017} year="2017" state={true} />
      <TestYear titles={dataarchive2016} year="2016" state={true} />
      <TestYear titles={dataarchive2015} year="2015" state={true} />
      <TestYear titles={dataarchive2014} year="2014" state={true} />
      <TestYear titles={dataarchive2013} year="2013" state={true} />
      <TestYear titles={dataarchive2012} year="2012" state={true} />
      <TestYear titles={dataarchive2011} year="2011" state={true} />
      <TestYear titles={dataarchive2009} year="2009" state={true} />
      <TestYear titles={dataarchive2008} year="2008" state={true} />
      <TestYear titles={dataarchive2007} year="2007" state={true} />
      <TestYear titles={dataarchive2006} year="2006" state={true} />
      <TestYear titles={dataarchive2005} year="2005" state={true} />

      <TestYear year="2004" state={true} titles={dataarchive2004} />
    </div>
  );
}

export default BachelorHolders;
