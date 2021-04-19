import React from "react";
import { Container } from "react-bootstrap";
import Brand from "../../components/Brand/Brand";
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import CurrentBestSeller from "../../components/CurrentBestSeller/CurrentBestSeller";
import Fact from "../../components/Fact/Fact";
import "./Home.css";
function Home() {
  return (
    <>
      <CarouselContainer />
      <Brand />
      <Container>
        <Fact />
        <CurrentBestSeller />
      </Container>
    </>
  );
}

export default Home;
