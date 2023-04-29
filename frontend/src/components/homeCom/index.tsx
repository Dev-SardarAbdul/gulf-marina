import { Navbar } from "components/common";
import HeroSection from "./heroSection";
import AboutUS from "./aboutUs";
import WhyChooseUs from "./whyChooseUs";
import Services from "./servicesSection";
import ContactUs from "./contactUs";

const HomeCom = () => {
  return (
    <div>
      <HeroSection />
      <AboutUS />
      <WhyChooseUs />
      <Services />
      <ContactUs />
    </div>
  );
};

export default HomeCom;
