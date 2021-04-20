import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import CurrentBestSeller from "../../components/CurrentBestSeller/CurrentBestSeller";
import Fact from "../../components/Fact/Fact";
import FlashSale from "../../components/FlashSale/FlashSale";
import "./Home.css";
function Home() {
  return (
    <>
      <Container>
        <CarouselContainer />
        <Banner />
        <CurrentBestSeller />
        <Fact />
        <FlashSale />
      </Container>
    </>
  );
}

export default Home;
