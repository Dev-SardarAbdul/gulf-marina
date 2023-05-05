import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { GalleryHeading, GalleryWrapper, ImgWrapper } from "./styles";
import { imagesData } from "./images";
import { MainContainer } from "components/common";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
} from "assets";

const data = [
  {
    id: 1,
    img: gallery1,
  },
  {
    id: 2,
    img: gallery2,
  },
  {
    id: 3,
    img: gallery3,
  },
  {
    id: 4,
    img: gallery4,
  },
  {
    id: 5,
    img: gallery5,
  },
  {
    id: 6,
    img: gallery6,
  },
];

const MainGallery = () => {
  return (
    <GalleryWrapper>
      <MainContainer>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <GalleryHeading>Image Gallery</GalleryHeading>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className="marginTop">
            <Marquee velocity={60} y>
              {times(1, Number).map((id) => (
                <div className="cardsWrapper">
                  {data?.map((item) => (
                    <ImgWrapper>
                      <img className="img-fluid img" src={item.img} />
                    </ImgWrapper>
                  ))}

                  <p></p>
                </div>
              ))}
            </Marquee>
          </div>
        </AnimationOnScroll>
      </MainContainer>
    </GalleryWrapper>
  );
};

export default MainGallery;
