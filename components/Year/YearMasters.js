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
          {props.title3 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title3}
              </h1>
            </>
          )}
          {props.title4 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title4}
              </h1>
            </>
          )}
          {props.title5 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title5}
              </h1>
            </>
          )}
          {props.title6 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title6}
              </h1>
            </>
          )}
          {props.title7 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title7}
              </h1>
            </>
          )}
          {props.title8 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title8}
              </h1>
            </>
          )}
          {props.title9 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title9}
              </h1>
            </>
          )}
          {props.title10 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title10}
              </h1>
            </>
          )}
          {props.title11 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title11}
              </h1>
            </>
          )}
          {props.title12 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title12}
              </h1>
            </>
          )}
          {props.title13 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title13}
              </h1>
            </>
          )}
          {props.title14 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title14}
              </h1>
            </>
          )}
          {props.title15 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title15}
              </h1>
            </>
          )}
          {props.title16 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title16}
              </h1>
            </>
          )}
          {props.title17 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title17}
              </h1>
            </>
          )}
          {props.title18 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title18}
              </h1>
            </>
          )}
          {props.title19 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title19}
              </h1>
            </>
          )}
          {props.title20 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title20}
              </h1>
            </>
          )}
          {props.title21 && (
            <>
              <h1 className="max-w-5xl pb-3 text-justify md:text-center">
                {props.title21}
              </h1>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default YearMasters;
