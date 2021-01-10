import { Carousel } from "react-bootstrap";
import comp from "../assets/images/comp.jpg";
import dj from "../assets/images/dj.jpg";
import cam from "../assets/images/camera-equip.jpg";
import gym from "../assets/images/gym.jpg";

const CarouselDiv = () => {
  return (
    <div className="text-center">
      <h1 className="mt-3" style={{ color: "white" }}>
        Our Equipments
      </h1>
      <h4 className="mb-4" style={{ color: "white" }}>
        - For renting -
      </h4>
      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="d-block w-100" style={{ height: "500px" }}>
            <img
              className="c-images img img-fluid"
              src={comp}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Computer and Peripherals</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="d-block w-100" style={{ height: "500px" }}>
            <img
              className="c-images img img-fluid"
              src={cam}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="m-2 mt-5">Camera & Accessories</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="d-block w-100" style={{ height: "500px" }}>
            <img
              className="c-images img img-fluid"
              src={dj}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="m-2 mt-5">Music Instruments & DJ</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="d-block w-100" style={{ height: "500px" }}>
            <img
              className="c-images img img-fluid"
              src={gym}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="m-2 mt-4">Fitness equipments</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselDiv;
