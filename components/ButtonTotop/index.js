import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

function BottomToTop() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <button
        className="bg-myfooter sticky top-10  border-black border-2"
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp color="white" fontSize="1.9rem" />
      </button>
    </div>
  );
}

export default BottomToTop;
