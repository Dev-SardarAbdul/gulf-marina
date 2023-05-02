import { Button, MainContainer } from "components/common";

import { cma, dhl, evergreenline, hapag, maersk, msc, rmx } from "assets";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  BusinessPartnersWrapper,
  PartnersHeader,
  PartnersSubText,
  ImgWrapper,
} from "./styles";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

const data = [
  {
    id: 1,
    img: cma,
  },
  {
    id: 2,
    img: dhl,
  },
  {
    id: 3,
    img: evergreenline,
  },
  {
    id: 4,
    img: hapag,
  },
  {
    id: 5,
    img: maersk,
  },
  {
    id: 6,
    img: rmx,
  },
];

function BusinessPartners() {
  return (
    <BusinessPartnersWrapper>
      <MainContainer>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <PartnersHeader>Global Freight Network</PartnersHeader>
          <PartnersSubText>
            we pride ourselves on our strong connections with global shippers
            such as DHL, MSC, Maersk, and many others. We have established
            long-standing relationships with these industry leaders to provide
            our customers with access to the most reliable and efficient
            shipping services available. Our strong partnerships with these
            global shippers also allow us to provide our customers with access
            to the most reliable and efficient shipping services available.
          </PartnersSubText>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeft">
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
        </AnimationOnScroll>
      </MainContainer>
    </BusinessPartnersWrapper>
  );
}

export default BusinessPartners;
