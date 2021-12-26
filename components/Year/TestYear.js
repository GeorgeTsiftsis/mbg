import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
function TestYear(props) {
  const [testVis19, testSetVis19] = useState(props.state);
  const titles = props.titles;

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => testSetVis19(!testVis19)}
        className="text-xl px-2 py-1  items-center  shadow-2xl flex "
      >
        {testVis19 == false ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}

        {props.year}
      </button>

      {!testVis19 && (
        <ul className="max-w-4xl py-3 pb-3 text-justify md:text-center">
          {titles.map((element, id) => (
            <li key={id}>
              {id + 1}) {element.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TestYear;
