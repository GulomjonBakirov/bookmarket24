import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function Slider({ children }) {
  return (
    <Carousel
      plugins={[
        "infinite",
        "autoplay",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 4,
          },
        },
      ]}
    >
      {children.map((a) => (
        <div className="book">
          <span></span>
          <h1>{a.name}</h1>
          <img src={a.img} alt="book" />
        </div>
      ))}
    </Carousel>
  );
}
