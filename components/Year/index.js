import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

function Year(props) {
  const [vis19, setVis19] = useState(props.state);
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setVis19(!vis19)}
        className="text-xl px-2 py-1  items-center  shadow-2xl flex "
      >
        {vis19 == false ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}

        {props.year}
      </button>

      {!vis19 && (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <li className="max-w-5xl py-3 hover:text-blue-400 text-justify">
            {props.title}
          </li>
        </a>
      )}
    </div>
  );
}

export default Year;
