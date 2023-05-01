import { MainContainer } from "components/common";
import {
  AccordionDiv,
  FaqsHeader,
  FaqsWrapper,
  FaqsWrapperTwo,
  ImgDiv,
} from "./styles";
import { MainRow, MainCol } from "components/common";
import Accordion from "react-bootstrap/Accordion";
import { faqsQuestion } from "assets";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Faqs() {
  return (
    <FaqsWrapper>
      <MainContainer>
        <AnimationOnScroll animateIn="animate__bounceInDown">
          <FaqsHeader>FAQs</FaqsHeader>
        </AnimationOnScroll>
        <MainRow>
          <MainCol lg={5}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <img src={faqsQuestion} className="img-fluid" />
            </AnimationOnScroll>
          </MainCol>
          <MainCol lg={7}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <AccordionDiv>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      What types of cargo can be transported?
                    </Accordion.Header>
                    <Accordion.Body>
                      Various types of cargo, including general merchandise,
                      hazardous materials, vehicles, perishables, oversized and
                      heavy items, and more can be transported.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What are the transit times and delivery options?
                    </Accordion.Header>
                    <Accordion.Body>
                      Transit times and delivery options vary depending on the
                      shipping service selected, the origin and destination, and
                      other factors such as weather conditions and customs
                      clearance.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      What are the shipping rates and how are they calculated?
                    </Accordion.Header>
                    <Accordion.Body>
                      Shipping rates depend on several factors such as the
                      weight and size of the cargo, the type of service
                      selected, the origin and destination, and any additional
                      services requested. Rates are calculated based on these
                      factors.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      What documents are required for shipping?
                    </Accordion.Header>
                    <Accordion.Body>
                      The required documents may vary depending on the origin
                      and destination, the type of cargo, and any regulatory
                      requirements. Common documents include a bill of lading,
                      commercial invoice, packing list, and any required permits
                      or licenses.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      What is the process for customs clearance?
                    </Accordion.Header>
                    <Accordion.Body>
                      Customs clearance is a process by which goods are
                      inspected, verified, and released by customs authorities
                      in the destination country. The process may involve
                      submitting documentation, paying customs duties and taxes,
                      and undergoing inspection. We assist customers with the
                      customs clearance process and provide information on the
                      requirements.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Are there any restrictions on shipping hazardous
                      materials?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, there are restrictions on shipping hazardous
                      materials, which are regulated by various international
                      and national agencies. We have policies and procedures for
                      shipping hazardous materials, and customers may need to
                      provide additional documentation or meet certain
                      requirements.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </AccordionDiv>
            </AnimationOnScroll>
          </MainCol>
        </MainRow>
      </MainContainer>
    </FaqsWrapper>
  );
}

export default Faqs;
