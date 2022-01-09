import DraseisChild from "../Draseis/DraseisChild";
function Koinopraxia() {
  return (
    <div id="Koinopraxia" className="bg-mygray w-full h-auto p-4  pb-6">
      <h1 className="text-center pt-20 font-manrope text-5xl  text-white ">
        Κοινοπραξία
      </h1>
      <h1 className="text-white text-center font-manrope text-lg  py-8">
        Η κοινοπραξία μας αποτελείται από 12 συνεργάτες από 4 φορείς (3
        ακαδημαϊκούς φορείς και 1 επιχείρηση) οι οποίοι καλύπτουν ένα εύρος
        ειδικοτήτων.
      </h1>
      <div className="flex items-center justify-center w-full border-t-4 pt-12  flex-wrap ">
        <DraseisChild
          title2="Τμήμα Μοριακής Βιολογίας & Γενετικής - ΔΠΘ"
          button="Πατήστε εδώ"
          img="/mbg-lo.png"
          link2="https://www.mbg.duth.gr/index.php/"
        />

        <DraseisChild
          title2="Τμήμα Ιατρικής Πανεπηστήμιο Πατρών"
          button="Πατήστε εδώ"
          img="/iatriki-lo.png"
          link2="https://www.med.upatras.gr"
        />
        <DraseisChild
          title2="Τμήμα Φραμκευτικης Πανεπηστήμιο Πατρών"
          button="Πατήστε εδώ"
          img="/farmakeutiki-lo.png"
          link2="http://www.pharmacy.upatras.gr/index.php/el"
        />
        <DraseisChild
          title2="Verisified"
          button="Πατήστε εδώ"
          img="/Verisfield-lo.png"
          link2="https://www.verisfield.gr"
        />
      </div>
    </div>
  );
}

export default Koinopraxia;
