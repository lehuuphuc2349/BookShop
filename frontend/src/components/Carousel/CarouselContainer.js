import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import "./CarouselContainer.css";
function CarouselContainer() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectIndex, event) => {
    setIndex(selectIndex);
  };
  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3952078/pexels-photo-3952078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="carousel-1"
        />
        <Carousel.Caption>
          <h1>Welcome to ITbookshop online</h1>
          <Button variant="primary">Started</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="carousel-1"
        />
        <Carousel.Caption>
          <h1>Welcome to ITbookshop online</h1>
          <Button variant="primary">Started</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="carousel-1"
        />
        <Carousel.Caption>
          <h1>Welcome to ITbookshop online</h1>
          <Button variant="primary">Started</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;
