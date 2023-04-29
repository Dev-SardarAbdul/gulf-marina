import React from "react";
import { CardWrapper } from "./cardElement";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const ServicesCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <CardWrapper>
      <Card
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        className={
          (isHovered && index === 0 && "firstBG") ||
          (isHovered && index === 1 && "secondBG") ||
          (isHovered && index === 2 && "thirdBG")
        }
      >
        <div className={`overLay ${isHovered && "darkBG"}`}>
          <img src={item.img} className="img-fluid airplane" />
          <Card.Body>
            <Card.Title className={isHovered && "whiteText"}>
              {item.title}
            </Card.Title>
            <Card.Text className={isHovered && "whiteText"}>
              {item.text}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </CardWrapper>
  );
};

export default ServicesCard;
