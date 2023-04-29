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

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

function AboutUS() {
  return (
    <AboutUsWrapper>
      <MainContainer>
        <AboutUsHeader>About Us</AboutUsHeader>
        <AboutUsSubText>
          At Globalink Logistics, we are passionate about logistics. Our team of
          experienced professionals is dedicated to providing personalized
          solutions that meet the unique needs of our clients. We pride
          ourselves on our commitment to quality, efficiency, and customer
          satisfaction.
        </AboutUsSubText>
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
        <BtnDiv>
          <Button readMore={true}>More About Us</Button>
        </BtnDiv>
      </MainContainer>
    </AboutUsWrapper>
  );
}

export default AboutUS;
