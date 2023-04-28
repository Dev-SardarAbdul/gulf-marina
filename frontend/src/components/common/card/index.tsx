import React from "react";
import {
  MainCard,
  MainBody,
  MainTitle,
  MainText,
  MainImg,
  IconImg,
} from "./cardElement";

type Props = {
  children?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Card: React.FC<Props> = ({
  children,
  onClick,
}: {
  children?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className="mainCard">
      {" "}
      <MainCard onClick={onClick}>
        <MainImg />
        <MainBody>{children}</MainBody>
      </MainCard>{" "}
    </div>
  );
};

export default Card;
