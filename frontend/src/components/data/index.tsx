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
    text: "We believe that quality service should not come with a high price tag. We are committed to provide our customers with the best possible service at an affordable price. ",
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
    text: "Whether it's a small package or a large shipment, our air cargo transportation products offer a reliable, efficient, and cost-effective way to move goods around the world. ",
  },
  {
    id: 2,
    img: cardShip,
    title: "Ocean Freight",
    text: "We understand that sea freight has experienced significant growth in recent years and have invested time to familiarize ourselves with our clients' processes and requirements. Our team has the expertise necessary to handle the most complex sea freight challenges. ",
  },
  {
    id: 3,
    img: cardTruck,
    title: "Road Freight",
    text: "Our land transportation services are designed to meet the needs of businesses of all types and sizes, thanks to our extensive network and state-of-the-art logistics solutions. ",
  },
  {
    id: 4,
    img: cardTruck,
    title: "Custom Clearance",
    text: "As a company, we specialize in providing comprehensive customs clearance services to businesses of all sizes. Our team of experienced customs brokers and agents can help ensure that your goods are imported or exported smoothly . ",
  },
  {
    id: 5,
    img: cardTruck,
    title: "Ware Housing",
    text: "Our company provides top-quality warehousing services to meet the storage needs of our clients. We offer a variety of storage solutions, including short-term and long-term storage, temperature-controlled storage, and inventory management services. ",
  },
  {
    id: 6,
    img: cardTruck,
    title: "DDP & DUP",
    text: "Our company provides DDP (Delivered Duty Paid) and DUP (Delivered at Place Unloaded) services to our clients. DDP service means we take care of all import formalities and pay any applicable duties and taxes on behalf of the client, ensuring hassle-free delivery. ",
  },
];

export const goalsData = [
  {
    id: 1,
    img: <AiOutlineShoppingCart className="goalsIcon" />,
    numberText: 100,
    title: "Warehouses Managed",
    text: "100+ warehouses managed to help robust and resilient supply chain.",
  },
  {
    id: 2,
    img: <AiOutlineSetting className="goalsIcon" />,
    numberText: 40,
    title: "Supply Engineers",
    text: "40+ supply engineers to ensure the flow of goods, information, and services. ",
  },
  {
    id: 3,
    img: <AiOutlineGlobal className="goalsIcon" />,
    numberText: 100,
    title: "Countries Covered",
    text: "With coverage of 100+ countries, we are able to provide logistics solutions.",
  },
  {
    id: 4,
    img: <IoLocationOutline className="goalsIcon" />,
    numberText: 1000,
    title: "Satistied Customers",
    text: "We measure our success with regards to customer satisfaction.",
  },
];
