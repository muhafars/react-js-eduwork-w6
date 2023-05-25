import Carousel from "react-bootstrap/Carousel";

const CarouselSlider = function () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mcdn.wallpapersafari.com/medium/24/37/K4wNkq.jpg"
          alt="First slide"
          style={{ width: "800px", height: "400px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mcdn.wallpapersafari.com/medium/77/5/WcjD8G.jpg"
          alt="https://mcdn.wallpapersafari.com/medium/77/5/WcjD8G.jpg"
          style={{ width: "800px", height: "400px" }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mcdn.wallpapersafari.com/medium/2/31/y9ZXbA.jpg"
          alt="Third slide"
          style={{ width: "800px", height: "400px" }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlider;
