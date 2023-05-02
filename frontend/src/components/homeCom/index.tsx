import { useState, useEffect } from "react";
import { Footer, Navbar } from "components/common";
import HeroSection from "./heroSection";
import AboutUS from "./aboutUs";
import WhyChooseUs from "./whyChooseUs";
import Services from "./servicesSection";
import ContactUs from "./contactUs";
import Faqs from "./faqs";
import GoalsSection from "./goals";
import MainLoader from "components/common/loader/loader";
import MainGallery from "./gallery";

const HomeCom = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loader && <MainLoader />}
      {!loader && (
        <>
          <HeroSection />
          <AboutUS />
          <WhyChooseUs />
          <Services />
          <GoalsSection />
          <MainGallery />
          <Faqs />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomeCom;
