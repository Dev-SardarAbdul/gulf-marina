import { Navbar } from "components/common";
import HeroSection from "./heroSection";
import AboutUS from "./aboutUs";
import WhyChooseUs from "./whyChooseUs";
import Services from "./servicesSection";
import ContactUs from "./contactUs";
import Faqs from "./faqs";

const HomeCom = () => {
  return (
    <div>
      <HeroSection />
      <AboutUS />
      <WhyChooseUs />
      <Services />
      <ContactUs />
      <Faqs />
    </div>
  );
};

export default HomeCom;
