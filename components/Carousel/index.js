import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export const images = [
  {
    original: "./Slide-1.png",
    thumbnail: "./Slide-1.png",
  },
  {
    original: "./Slide-2.png",
    thumbnail: "./Slide-2.png",
  },
  {
    original: "./Slide-3.png",
    thumbnail: "./Slide-3.png",
  },
  {
    original: "./Slide-4.png",
    thumbnail: "./Slide-4.png",
  },
];
export const images2 = [
  {
    original: "./PolymerphItems/polyslide-1.png",
    thumbnail: "./PolymerphItems/polyslide-1.png",
  },
  {
    original: "./PolymerphItems/polyslide-2.png",
    thumbnail: "./PolymerphItems/polyslide-2.png",
  },
  {
    original: "./PolymerphItems/polyslide-3.png",
    thumbnail: "./PolymerphItems/polyslide-3.png",
  },
  {
    original: "./Slide-4.png",
    thumbnail: "./Slide-4.png",
  },
];

function Carousel(props) {
  return (
    <div className="max-w-5xl w-full pt-1 sm:pt-12 ">
      <ImageGallery
        originalWidth="100px"
        items={props.images}
        lazyLoad={true}
        showBullets={true}
        showThumbnails={true}
        autoPlay={true}
        slideDuration={1050}
        slideInterval={5000}
      />
    </div>
  );
}

export default Carousel;
