import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = [
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

function Carousel() {
  return (
    <div className="max-w-5xl w-full " style={{ paddingTop: "3rem" }}>
      <ImageGallery
        originalWidth="100px"
        items={images}
        lazyLoad={true}
        showBullets={true}
        showThumbnails={true}
        autoPlay={true}
      />
    </div>
  );
}

export default Carousel;
