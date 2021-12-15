function Graduates() {
  return (
    <div className="items-center justify-items flex flex-col">
      <h1 className="text-center font-manrope text-5xl underline py-8">
        Απόφοιτοι Εργαστηρίου
      </h1>
      <div>
        <ul className="flex flex-col   items-center justify-center  p-8">
          <div>
            <li>Αντώνης Γιαννακάκης</li>
            <li>Ευριπίδης Λανίτης</li>
            <li>Denarda Dangaj</li>
          </div>
          <div className="m-4">
            <li>Θανάσης Καραπέτσας</li>
            <li>Ευθυμία Ι. Ματθαίου</li>
            <li>Τοκαμάνη Μαρία</li>
          </div>
          <div>
            <li>Κατερίνα Σεμιλιέτωφ</li>
            <li>Βαγγέλης Στεφανίδης </li>
            <li>Κατερίνα Γεμενέτζη</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Graduates;
