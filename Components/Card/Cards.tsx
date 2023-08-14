import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel, {
  slideCollection,
} from "../Carousels/CarouselGalleryComponent/CarouselGallery";
// import { imgs } from "@/app/page";

interface props extends slideCollection {
  title?: string;
  describe?: string;
}

function CardComponent({ imgs, title, describe }: props) {
  return (
    <Card className='card'>
      <Carousel imgs={imgs}></Carousel>
    </Card>
  );
}

export default CardComponent;
