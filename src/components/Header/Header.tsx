import React from "react";

import { Logo } from "~/components";
import { StyledWrapper } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <StyledWrapper>
      <Logo />
    </StyledWrapper>
  );
};

export { Header };
