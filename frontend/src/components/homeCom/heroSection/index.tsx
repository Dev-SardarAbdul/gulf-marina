import { Button, MainContainer, Navbar } from "components/common";
import {
  HeroMainText,
  HeroSectionWrapper,
  HeroSubText,
  SwipperWrapper,
  TextWrapper,
} from "./styled";
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
import { Container } from "react-bootstrap";

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
          <SwiperSlide className="firstSlide">
            <MainContainer>
              <TextWrapper>
                <HeroMainText>
                  Global Logistics Solutions <br />
                  for <span> Your Business.</span>
                </HeroMainText>
                <HeroSubText>
                  At Globalink Logistics, we provide comprehensive logistics
                  services that <br /> streamline your business operations and
                  drive growth. Our solutions are <br />
                  tailored to meet your unique needs, ensuring that your
                  shipments are <br />
                  delivered on time, every time.
                </HeroSubText>
                <div className="mt-4 readMoreBtnDiv">
                  <Button readMore={true}>Read More</Button>
                </div>
              </TextWrapper>

              <div className="btnsDiv">
                <button
                  className="button-prev swiperBtn"
                  onClick={() => swiper && swiper.slidePrev()} // check if swiper is defined before calling slidePrev()
                >
                  <AiOutlineArrowLeft
                    color="#fff"
                    fontSize={20}
                    cursor="pointer"
                  />
                </button>
                <button
                  className="button-next swiperBtn"
                  onClick={() => swiper && swiper.slideNext()} // check if swiper is defined before calling slideNext()
                >
                  <AiOutlineArrowRight
                    color="#fff"
                    fontSize={20}
                    cursor="pointer"
                  />
                </button>
              </div>
            </MainContainer>
          </SwiperSlide>
          <SwiperSlide className="secondSlide">
            <MainContainer>
              <TextWrapper>
                <HeroMainText>
                  Streamline your supply chain <br /> with our{" "}
                  <span>global logistics solutions.</span>
                </HeroMainText>
                <HeroSubText>
                  Our logistics services are designed to optimize your supply
                  chain and reduce costs, <br /> helping your business grow.
                  From transportation to customs clearance, our end-to-end{" "}
                  <br />
                  logistics solutions ensure a hassle-free experience for your
                  business. With a global <br /> network of partners and
                  carriers, we offer reliable and efficient logistics services
                  <br /> to businesses of all sizes.
                </HeroSubText>

                <div className="mt-4 readMoreBtnDiv">
                  <Button readMore={true}>Read More</Button>
                </div>
              </TextWrapper>

              <div className="btnsDiv">
                <button
                  className="button-prev swiperBtn"
                  onClick={() => swiper && swiper.slidePrev()} // check if swiper is defined before calling slidePrev()
                >
                  <AiOutlineArrowLeft
                    color="#fff"
                    fontSize={20}
                    cursor="pointer"
                  />
                </button>
                <button
                  className="button-next swiperBtn"
                  onClick={() => swiper && swiper.slideNext()} // check if swiper is defined before calling slideNext()
                >
                  <AiOutlineArrowRight
                    color="#fff"
                    fontSize={20}
                    cursor="pointer"
                  />
                </button>
              </div>
            </MainContainer>
          </SwiperSlide>
          <SwiperSlide className="thirdSlide">
            <MainContainer>
              <TextWrapper>
                <HeroMainText>
                  Trust us to handle your <br />{" "}
                  <span>customs brokerage needs.</span>
                </HeroMainText>
                <HeroSubText>
                  At Globalink Logistics, we are committed to providing
                  exceptional customer service <br /> and exceeding your
                  expectations with our logistics solutions. We offer
                  warehousing <br />
                  and distribution services to help you manage inventory and{" "}
                  fulfill orders quickly and <br /> efficiently. Our team of
                  logistics experts works closely with you to understand your{" "}
                  <br />
                  business needs and provide customized solutions that meet your
                  goals.
                </HeroSubText>
                <div className="mt-4 readMoreBtnDiv">
                  <Button readMore={true}>Read More</Button>
                </div>
              </TextWrapper>

              <div className="btnsDiv">
                <button
                  className="button-prev swiperBtn"
                  onClick={() => swiper && swiper.slidePrev()} // check if swiper is defined before calling slidePrev()
                >
                  <AiOutlineArrowLeft
                    color="#fff"
                    fontSize={20}
                    cursor="pointer"
                  />
                </button>
                <button
                  className="button-next swiperBtn"
                  onClick={() => swiper && swiper.slideNext()} // check if swiper is defined before calling slideNext()
                >
                  <AiOutlineArrowRight
                    color="#fff"
                    fontSize={20}
                    cursor="pointer"
                  />
                </button>
              </div>
            </MainContainer>
          </SwiperSlide>
        </Swiper>
      </SwipperWrapper>
    </HeroSectionWrapper>
  );
}

export default HeroSection;
