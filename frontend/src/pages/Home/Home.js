import React from "react";
import { Container } from "react-bootstrap";
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import CurrentBestSeller from "../../components/CurrentBestSeller/CurrentBestSeller";
import "./Home.css";
function Home() {
  return (
    <>
      <CarouselContainer />
      <Container>
        <CurrentBestSeller />
      </Container>
    </>
  );
}

export default Home;
