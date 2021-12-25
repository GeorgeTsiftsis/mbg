import PhdHolders from "../components/PhdHolders";
import MastersHolders from "../components/MasterHolders";
function LabArchive() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PhdHolders />
      <MastersHolders />
    </div>
  );
}

export default LabArchive;
