import React from "react";
import { CardWrapper } from "./cardElement";
import Card from "react-bootstrap/Card";
import { cardAirplane } from "assets";

const ServicesCard = ({ item }) => {
  return (
    <CardWrapper>
      <Card>
        <img src={item.img} className="img-fluid airplane" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
      </Card>
    </CardWrapper>
  );
};

export default ServicesCard;
