import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

function BottomToTop() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div style={{ top: "100%" }} className="sticky w-full z-10  ">
      <div style={{ position: "absolute", bottom: "0", right: "0" }}>
        <button
          className="bg-myfooter m-2 opacity-30 border-black border-2 "
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp color="white" fontSize="1.9rem" />
        </button>
      </div>
    </div>
  );
}

export default BottomToTop;
