import { FiPhoneForwarded } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function Proffesor({ name, role, tel, telCode, mail }) {
  return (
    <div>
      <h1 className="pt-2 font-bold"> {name} </h1>
      <h1>{role}</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`tel:${tel}`}
        className="flex pt-1 self-start items-center hover:opacity-60 "
      >
        <FiPhoneForwarded fontSize="1.7rem" color="white" />
        <h1 className="px-2">{telCode}</h1>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`mailto:${mail}`}
        className="flex pt-1 self-start items-center hover:opacity-60 "
      >
        <AiOutlineMail fontSize="1.7rem" color="white" />
        <h1 className="px-2">{mail}</h1>
      </a>
    </div>
  );
}

export default Proffesor;
