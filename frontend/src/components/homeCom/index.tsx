import { Navbar } from "components/common";
import HeroSection from "./heroSection";
import AboutUS from "./aboutUs";
import WhyChooseUs from "./whyChooseUs";
import Services from "./servicesSection";

const HomeCom = () => {
  return (
    <div>
      <HeroSection />
      <AboutUS />
      <WhyChooseUs />
      <Services />
    </div>
  );
};

export default HomeCom;
