import { AiFillLinkedin } from "react-icons/ai";
import {
  data1row,
  data2row,
  data3row,
  mastergraduates,
  bachelorgraduates1,
  bachelorgraduates2,
  bachelorgraduates3,
} from "./DummyData";
import { chunk } from "lodash";

function Graduates() {
  return (
    <div className="items-center justify-items p-2 flex flex-col">
      <h1 className="text-center  text-5xl underline py-8">
        Απόφοιτοι Εργαστηρίου
      </h1>
      <img alt="graduates" src="./academics.png" className="rounded-lg" />
      <h1 className="text-center  text-3xl underline py-6">
        Απόφοιτοι Διδάκτορες
      </h1>
      <div className="pb-4 lg:w-full w-11/12 flex flex-col  items-center justify-center ">
        <ul className=" flex flex-wrap rounded-lg text-center underline  text-xl border-2 flex-row justify-around items-around  ">
          <div>
            {data1row.map((element, id) => (
              <a
                key={id}
                className="flex items-center text-center p-2 hover:text-blue-400  "
                href={element.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin
                  size="1.5em"
                  className="text-mygraduatesblue "
                />
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
                <AiFillLinkedin size="1.5em" className="text-mygraduatesblue" />
                <li>{element.name}</li>
              </a>
            ))}
          </ul>
          <ul>
            {data3row.map((element, id) => (
              <a
                key={id}
                className={
                  element.url
                    ? " flex items-center p-2 hover:text-blue-400"
                    : " flex items-center p-2"
                }
                href={element.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size="1.5em" className="text-mygraduatesblue" />
                <li>{element.name}</li>
              </a>
            ))}
          </ul>
        </ul>
      </div>
      <h1 className="text-center text-3xl underline py-6">
        Απόφοιτοι Μεταπτυχιακοί
      </h1>

      <ul>
        {mastergraduates.map((element, id) => (
          <li key={id}>{element.name}</li>
        ))}
      </ul>
      <h1 className="text-center  text-3xl underline py-6">
        Απόφοιτοι Προπτυχιακοί
      </h1>
      <div className="pb-4 lg:w-full w-11/12 flex flex-col  items-center justify-center ">
        <ul className=" flex flex-wrap rounded-lg text-center  border-2 flex-row justify-around items-around  ">
          <div>
            {bachelorgraduates1.map((element, id) => (
              <li className="items-center flex-col p-2 " key={id}>
                {element.name}
              </li>
            ))}
          </div>
          <div>
            {bachelorgraduates2.map((element, id) => (
              <li className="items-center flex-col p-2 " key={id}>
                {element.name}
              </li>
            ))}
          </div>
          <div>
            {bachelorgraduates3.map((element, id) => (
              <li className="items-center flex-col p-2 " key={id}>
                {element.name}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Graduates;
