import PhdHolders from "../components/PhdHolders";
import MastersHolders from "../components/MasterHolders";
import BachelorHolders from "../components/BachelorHolders";
function LabArchive() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PhdHolders />
      <MastersHolders />
      <BachelorHolders />
    </div>
  );
}

export default LabArchive;
