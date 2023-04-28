import { MainContainer, Navbar } from "components/common";
import { HeroSectionWrapper, SwipperWrapper } from "./styled";
import React, { useState } from "react";
import { heroTruck, heroContainer, heroship } from "assets";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/pagination/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function HeroSection() {
  const [swiper, setSwiper] = useState(null); // define swiper state

  return (
    <HeroSectionWrapper>
      <SwipperWrapper>
        <div className="navDiv">
          <Navbar />
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={true}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          pagination={true}
          grabCursor={true}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img className="img-fluid heroImgs" src={heroTruck} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid heroImgs" src={heroContainer} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-fluid heroImgs" src={heroship} />
          </SwiperSlide>
        </Swiper>
        <div className="btnsDiv">
          <button
            className="button-prev swiperBtn"
            onClick={() => swiper && swiper.slidePrev()} // check if swiper is defined before calling slidePrev()
          >
            <AiOutlineArrowLeft color="#fff" fontSize={20} cursor="pointer" />
          </button>
          <button
            className="button-next swiperBtn"
            onClick={() => swiper && swiper.slideNext()} // check if swiper is defined before calling slideNext()
          >
            <AiOutlineArrowRight color="#fff" fontSize={20} cursor="pointer" />
          </button>
        </div>
      </SwipperWrapper>
    </HeroSectionWrapper>
  );
}

export default HeroSection;
