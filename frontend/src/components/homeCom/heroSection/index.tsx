import { MainContainer, Navbar } from "components/common";
import { HeroSectionWrapper } from "./styled";
import React, { useState } from "react";
import "swiper/swiper-bundle.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
  },

  // when window width is >= 640px
  576: {
    slidesPerView: 1.1,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 1.5,
  },
  992: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 4,
  },
  1400: {
    slidesPerView: 4,
  },
};

function HeroSection() {
  const [swiper, setSwiper] = useState(null); // define swiper state

  return (
    <HeroSectionWrapper>
      <Navbar />

      <MainContainer>
        <Swiper
          breakpoints={breakpoints}
          modules={[]}
          spaceBetween={15}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          grabCursor={true}
          slidesPerView={1} // Set slidesPerView to 1 to show only one slide at a time
        >
          <SwiperSlide>hello1</SwiperSlide>
          <SwiperSlide>hello2</SwiperSlide>
          <SwiperSlide>hello3</SwiperSlide>
          <SwiperSlide>hello4</SwiperSlide>
          <SwiperSlide>hello5</SwiperSlide>
          <SwiperSlide>hello6</SwiperSlide>
        </Swiper>
        <div>
          <button
            className="button-prev"
            onClick={() => swiper && swiper.slidePrev()} // check if swiper is defined before calling slidePrev()
          >
            prev
          </button>
          <button
            className="button-next"
            onClick={() => swiper && swiper.slideNext()} // check if swiper is defined before calling slideNext()
          >
            next
          </button>
        </div>
      </MainContainer>
    </HeroSectionWrapper>
  );
}

export default HeroSection;
