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
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {describe && <Card.Text>{describe}</Card.Text>}
        {/* <Button variant='primary'>contact me</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
