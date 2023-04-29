import { AiOutlineGift } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";

export const networkObj = [
  {
    name: "Ethereum",
    value: "ethereum",
  },
  {
    name: "Avalanche",
    value: "avax",
  },
  {
    name: "Binance Smart Chain",
    value: "bsc",
  },
  {
    name: "Polygon",
    value: "polygon",
  },
];

export const chooseUsData = [
  {
    id: 1,
    icon: <FiUsers color="#fff" />,
    heading: "100% satisfied customers",
    text: "We take great pride in ensuring that our customers are 100% satisfied with our products and services. Our commitment to customer satisfaction is evident in our reviews and testimonials.",
  },
  {
    id: 2,
    icon: <AiOutlineGift color="#fff" />,
    heading: "Quality service & affordable price",
    text: "We believe that quality service should not come with a high price tag. We are committed to providing our customers with the best possible service at an affordable price. ",
  },
  {
    id: 3,
    icon: <BsGlobe color="#fff" />,
    heading: "Worldwide Locations",
    text: "We are proud to have a global presence with multiple locations around the world. Our worldwide locations allow us to serve customers from different parts of the world, offering them the same high-quality products and services.",
  },
  {
    id: 4,
    icon: <GiCommercialAirplane color="#fff" />,
    heading: "Modern Vehicles Fleet",
    text: "Our fleet consists of modern vehicles that are well-maintained and equipped with the latest technology.  With our modern fleet, we are able to provide reliable and efficient transportation services that meet the needs of our customers.",
  },
];
