import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

function YearMasters(props) {
  const [msVis19, mssetVis19] = useState(props.state);
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => mssetVis19(!msVis19)}
        className="text-xl px-2 py-1  items-center  shadow-2xl flex "
      >
        {msVis19 == false ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}

        {props.year}
      </button>

      {!msVis19 && (
        <div>
          <h1 className="max-w-4xl py-3 text-justify md:text-center">
            {props.title}
          </h1>

          {props.title2 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title2}
              </h1>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default YearMasters;
