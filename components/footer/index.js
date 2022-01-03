import { BiCalendar } from "react-icons/bi";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiFillFacebook,
} from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { FiPhoneForwarded } from "react-icons/fi";
import SimpleMap from "../maps/SimpleMap";
import Proffesor from "./Professor";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  return (
    <div id="section2" className="flex flex-col bg-myfooter text-white  pb-4">
      <SimpleMap />
      {/* <h1 className="text-2xl font-manrope p-4 ">ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</h1> */}
      <footer className="p-4 pt-2 flex flex-col md:flex-row justify-around w-full">
        <div>
          <h1 className="text-4xl font-fancy border-b-2 border-mygray">
            ΕΡΓΑΣΤΗΡΙΟ
          </h1>
          <div className="flex flex-col items-center text-white pb-4">
            <div className="flex pt-1 self-start items-center">
              <BiCalendar fontSize="1.7rem" color="white" />
              <h1 className="px-2">Δευτέρα-Παρασκευή </h1>
            </div>
            <div className="flex pt-1 self-start items-center">
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
              className="flex pt-1 self-start items-center hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:rms.lab.duth@gmail.com"
            >
              <AiOutlineMail fontSize="1.7rem" color="white" />
              <h1 className="px-2">rms.lab.duth@gmail.com</h1>
            </a>
            <a
              className="flex pt-1 self-start items-start hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/3gBHx7JJgcwB1zd26"
            >
              <BsPinMap fontSize="1.7rem" color="white" />

              <h1 className=" max-w-xs px-2 text-justify  ">
                Τμήμα Μοριακής Βιολογίας και Γενετικής κτίριο «Φώτης Καφάτος»
                1ος όροφος Δραγανά. Δ.Π.Θ., Αλεξανδρούπολη 68100
              </h1>
            </a>

            {router.asPath === "/Polypeppharm" ||
            router.asPath == "/Polypeppharm/Sinergates" ||
            router.asPath == "/Polypeppharm/EreunitikesOmades" ? (
              <>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/PolypepPharm"
                  className="flex pt-1 self-start items-start hover:opacity-60"
                >
                  <AiFillFacebook fontSize="1.7rem" color="white" />
                  <h1 className="px-2"> polypeppharm </h1>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:polypeppharm@gmail.com"
                  className="flex pt-1 self-start items-start hover:opacity-60"
                >
                  <AiOutlineMail fontSize="1.7rem" color="white" />
                  <h1 className="px-2"> polypeppharm@gmail.com </h1>
                </a>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="md:w-7/12 w-full sm:ml-2 text-white flex flex-col">
          <h1 className="text-white text-4xl font-fancy border-b-2 border-mygray ">
            ΜΕΛΗ ΔΕΠ
          </h1>
          <Proffesor
            name="Σανδαλτζόπουλος Ραφαήλ,"
            role="Καθηγητής Μοριακής Βιολογίας, Διευθυντής Εργαστηρίου"
            tel="+3025510-30622"
            telCode="(0030)-25510-30622"
            mail="rmsandal@mbg.duth.gr"
          />
          {router.asPath != "/Polypeppharm" &&
          router.asPath != "/Polypeppharm/Sinergates" &&
          router.asPath != "/Polypeppharm/EreunitikesOmades" ? (
            <>
              <Proffesor
                name="Γιαννακάκης Αντώνης,"
                role="Επίκουρος Καθηγητής Υπολογιστικής Μοριακής Βιολογίας"
                tel="+3025510-30639"
                telCode="(0030)-25510-30639"
                mail="antgian@mbg.duth.gr"
              />
              <Proffesor
                name="Γαλάνης Αλέξης,"
                role="Αναπληρωτής Καθηγητής Μοριακής Βιολογίας"
                tel="+3025510-30634"
                telCode="(0030)-25510-30634"
                mail="agalanis@mbg.duth.gr"
              />
            </>
          ) : (
            ""
          )}
        </div>
      </footer>
      <h1 className="text-center pt-6 opacity-80 text-base px-4 ">
        Τμήμα Μοριακής Βιολογίας και Γενετικής Δ.Π.Θ ©{new Date().getFullYear()}
      </h1>
      <a target="_blank" rel="noopener noreferrer" href="https://www.gtsif.com">
        <h1 className="text-center py-4 opacity-80 text-base underline cursor-pointer hover:text-red-400">
          Developed by George Tsiftsis
        </h1>
      </a>
    </div>
  );
}

export default Footer;
