import { BiCalendar } from "react-icons/bi";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { FiPhoneForwarded } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex flex-col bg-myfooter text-white rounded-md">
      {/* <h1 className="text-2xl font-manrope p-4 ">ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</h1> */}
      <footer className=" p-4  pt-2  flex flex-col  sm:flex-row justify-around w-full">
        <div>
          <h1 className="   text-4xl font-fancy border-b-2 border-mygray ">
            ΕΡΓΑΣΤΗΡΙΟ
          </h1>
          <div className="flex flex-col items-center text-white pb-4">
            <div className="flex pt-1 self-start items-center">
              <BiCalendar fontSize="1.7rem" color="white" />
              <h1 className="px-2 ">Δευτέρα-Παρασκευή </h1>
            </div>
            <div className="flex pt-1 self-start items-center ">
              <AiOutlineClockCircle fontSize="1.7rem" color="white" />
              <h1 className="px-2"> 9:30π.μ. -15:30μ.μ. </h1>
            </div>

            <a
              className="flex pt-1 self-start items-center hover:opacity-60  "
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+3025510-30623"
            >
              <FiPhoneForwarded fontSize="1.7rem" color="white" />
              <h1 className="px-2">(0030)-25510-30623 </h1>
            </a>

            <a
              className="flex pt-1 self-start items-center hover:opacity-60  "
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:rms.lab.duth@gmail.com"
            >
              <AiOutlineMail fontSize="1.7rem" color="white" />
              <h1 className="px-2">rms.lab.duth@gmail.com</h1>
            </a>
            <a
              className="flex pt-1 self-start items-start hover:opacity-60  "
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/3gBHx7JJgcwB1zd26"
            >
              <BsPinMap fontSize="1.7rem" color="white" />

              <h1 className="px-2 max-w-sm text-justify 	break-all ">
                Τμήμα Μοριακής Βιολογίας και Γενετικής κτίριο «Φώτης Καφάτος»
                1ος όροφος Δραγανά. Δ.Π.Θ., Αλεξανδρούπολη 68100
              </h1>
            </a>
          </div>
        </div>

        <div className="md:w-7/12 w-full sm:ml-2 text-white flex flex-col">
          <h1 className=" text-white  text-4xl font-fancy border-b-2 border-mygray ">
            ΜΕΛΗ ΔΕΠ
          </h1>
          <h1 className="pt-2 font-bold"> Σανδαλτζόπουλος Ραφαήλ, </h1>
          <h1>Καθηγητής Μοριακής Βιολογίας, Διευθυντής Εργαστηρίου</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+3025510-30622"
            className="flex pt-1 self-start items-center hover:opacity-60 "
          >
            <FiPhoneForwarded fontSize="1.7rem" color="white" />
            <h1 className="px-2">(0030)-25510-30622</h1>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:rmsandal@mbg.duth.gr"
            className="flex pt-1 self-start items-center hover:opacity-60 "
          >
            <AiOutlineMail fontSize="1.7rem" color="white" />
            <h1 className="px-2">rmsandal@mbg.duth.gr</h1>
          </a>

          <h1 className="font-bold pt-6"> Γιαννακάκης Αντώνης, </h1>
          <h1>Επίκουρος Καθηγητής Υπολογιστικής Μοριακής Βιολογίας</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+3025510-30639"
            className="flex pt-1 self-start items-center hover:opacity-60 "
          >
            <FiPhoneForwarded fontSize="1.7rem" color="white" />
            <h1 className="px-2"> (0030)-25510-30639</h1>
          </a>
          <a
            className="flex pt-1 self-start items-center hover:opacity-60"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:antgian@mbg.duth.gr"
          >
            <AiOutlineMail fontSize="1.7rem" color="white" />
            <h1 className="px-2">antgian@mbg.duth.gr</h1>
          </a>

          <h1 className="font-bold pt-6"> Γαλάνης Αλέξης, </h1>
          <h1>Αναπληρωτής Καθηγητής Μοριακής Βιολογίας</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+3025510-30634"
            className="flex pt-1 self-start items-center hover:opacity-60 "
          >
            <FiPhoneForwarded fontSize="1.7rem" color="white" />
            <h1 className="px-2"> (0030)-25510-30634</h1>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:agalanis@mbg.duth.gr"
            className="flex pt-1 self-start items-center hover:opacity-60 "
          >
            <AiOutlineMail fontSize="1.7rem" color="white" />
            <h1 className="px-2">agalanis@mbg.duth.gr</h1>
          </a>
        </div>
      </footer>
      <h1 className="text-center  pt-6 opacity-80 text-base ">
        Τμήμα Μοριακής Βιολογίας και Γενετικής Δ.Π.Θ © 2021
      </h1>
      <h1 className="text-center py-4 opacity-80 text-base underline cursor-pointer hover:text-red-400">
        Developed by George Tsiftsis
      </h1>
    </div>
  );
}

export default Footer;
