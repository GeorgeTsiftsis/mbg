import { AiFillLinkedin } from "react-icons/ai";
import { data1row, data2row, data3row } from "./DummyData";
import { mastergraduates } from "./DummyData";
function Graduates() {
  console.log(mastergraduates.name);
  return (
    <div className="items-center justify-items p-2 flex flex-col">
      <h1 className="text-center font-manrope text-5xl underline py-8">
        Απόφοιτοι Εργαστηρίου
      </h1>
      <img alt="graduates" src="./academics.png" className="rounded-lg" />
      <h1 className="text-center font-manrope text-3xl underline py-6">
        Απόφοιτοι Διδάκτορες
      </h1>
      <div className="pb-4 lg:w-full w-3/4 flex flex-col w-full items-center justify-center ">
        <ul className=" flex flex-wrap rounded-lg text-center underline  text-2xl border-2 flex-row justify-around items-around  ">
          <div>
            {data1row.map((element, id) => (
              <a
                key={id}
                className="flex items-center text-center p-2 hover:text-blue-400  "
                href={element.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size="2rem" className="text-mygraduatesblue " />
                <li>{element.name}</li>
              </a>
            ))}
          </div>
          <ul>
            {data2row.map((element, id) => (
              <a
                key={id}
                className="flex items-center p-2 hover:text-blue-400  "
                href={element.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size="2rem" className="text-mygraduatesblue" />
                <li>{element.name}</li>
              </a>
            ))}
          </ul>
          <ul>
            {data3row.map((element, id) => (
              <a
                key={id}
                className="flex items-center p-2 hover:text-blue-400  "
                href={element.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size="2rem" className="text-mygraduatesblue" />
                <li>{element.name}</li>
              </a>
            ))}
          </ul>
        </ul>
      </div>
      <h1 className="text-center font-manrope text-3xl underline py-6">
        Απόφοιτοι Μεταπτυχιακοί
      </h1>

      <ul>
        {mastergraduates.map((element, id) => (
          <li key={id}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Graduates;
