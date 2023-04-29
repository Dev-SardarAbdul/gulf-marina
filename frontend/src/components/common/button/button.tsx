import React from "react";
import { MainButton, ButtonIcon } from "./buttonElement";
// framer Motion

type Props = {
  children: any;
  primary?: boolean;
  secondary?: boolean;
  buttonCenter?: boolean;
  buttonEnd?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  connectWallet?: boolean;
  isDisabled?: boolean;
  readMore?: any;
};

const Button: React.FC<Props> = ({
  children,
  primary,
  secondary,
  buttonCenter,
  buttonEnd,
  connectWallet,
  isDisabled,
  onClick,
  readMore,
}: {
  children: any;
  primary?: boolean;
  secondary?: boolean;
  buttonCenter?: boolean;
  buttonEnd?: boolean;
  connectWallet?: boolean;
  isDisabled?: boolean;
  readMore?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div>
      <MainButton
        primary={primary}
        secondary={secondary}
        buttonCenter={buttonCenter}
        buttonEnd={buttonEnd}
        connectWallet={connectWallet}
        onClick={onClick}
        disabled={isDisabled}
        readMore={readMore}
      >
        {children}
      </MainButton>
    </div>
  );
};

export default Button;
