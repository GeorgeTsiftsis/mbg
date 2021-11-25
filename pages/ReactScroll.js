import { Link as Scroller, animateScroll as scroll } from "react-scroll";

function ReactScroll() {
  //   let Element = Scroll.Element;
  //   let Navme = Scroll.Link;
  return (
    <div>
      <Scroller
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Go to Tente{" "}
      </Scroller>

      <h1 id="section1" className="active">
        Tente
      </h1>
    </div>
  );
}

export default ReactScroll;
