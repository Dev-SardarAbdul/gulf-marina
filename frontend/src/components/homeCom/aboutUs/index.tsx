import { Button, MainContainer } from "components/common";
import {
  AboutUsHeader,
  AboutUsSubText,
  AboutUsWrapper,
  BtnDiv,
  SwiperWrapper,
} from "./styles";
import {
  aboutUs1,
  aboutUs2,
  aboutUs3,
  aboutUs4,
  aboutUs5,
  aboutUs6,
} from "assets";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

function AboutUS() {
  return (
    <AboutUsWrapper id="about">
      <MainContainer>
        <AnimationOnScroll animateIn="animate__bounceInDown">
          <AboutUsHeader>About Us</AboutUsHeader>

          <AboutUsSubText>
            At Gulf Marina, we are passionate about logistics. Our team of
            experienced professionals is dedicated to provide personalized
            solutions that meet the unique needs of our clients. We pride
            ourselves on our commitment to quality, efficiency, and customer
            satisfaction. We believe that our success is measured by the success
            of our clients, and we are committed to build long-lasting
            relationships based on trust, transparency, and mutual growth.
          </AboutUsSubText>
        </AnimationOnScroll>

        <SwiperWrapper>
          <Swiper
            // activeSlideKey='2'
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            // scrollbar={{draggable:true}}
            navigation={true}
            initialSlide={2}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={aboutUs1} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={aboutUs2} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={aboutUs3} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={aboutUs4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={aboutUs5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={aboutUs6} />
            </SwiperSlide>
          </Swiper>
        </SwiperWrapper>

        <AnimationOnScroll animateIn="animate__zoomIn">
          <BtnDiv>
            <a href="#services">
              <Button readMore={true}>Explore Our Services</Button>
            </a>
          </BtnDiv>
        </AnimationOnScroll>
      </MainContainer>
    </AboutUsWrapper>
  );
}

export default AboutUS;
