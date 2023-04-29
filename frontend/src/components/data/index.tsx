import { AiOutlineGift } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { cardAirplane, cardShip, cardTruck } from "assets";
import {
  AiOutlineSetting,
  AiOutlineGlobal,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

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

export const servicesCardData = [
  {
    id: 1,
    img: cardAirplane,
    title: "Air Freight",
    text: "Our air cargo transportation products benefit from a global organization and advanced logistics solutions. ",
  },
  {
    id: 2,
    img: cardShip,
    title: "Ocean Freight",
    text: "We have invested time to familiarize ourselves with your processes, as the sea freight service has experienced significant growth in recent years.",
  },
  {
    id: 3,
    img: cardTruck,
    title: "Road Freight",
    text: "With a widespread network and advanced logistics solutions, our land transportation services cater to businesses of all types and sizes.",
  },
];

export const goalsData = [
  {
    id: 1,
    img: <AiOutlineShoppingCart className="goalsIcon" />,
    numberText: "100+",
    title: "Warehouses Managed",
    text: "We help you mitigate supply chain disruptions. ",
  },
  {
    id: 2,
    img: <AiOutlineSetting className="goalsIcon" />,
    numberText: "80+",
    title: "Supply Engineers",
    text: "We help you mitigate supply chain disruptions. ",
  },
  {
    id: 3,
    img: <AiOutlineGlobal className="goalsIcon" />,
    numberText: "30+",
    title: "Countries Covered",
    text: "We help you mitigate supply chain disruptions. ",
  },
  {
    id: 4,
    img: <IoLocationOutline className="goalsIcon" />,
    numberText: "400+",
    title: "Companies We Help",
    text: "We help you mitigate supply chain disruptions. ",
  },
];
