import React from "react";
import Link from "next/link";

import { StyledWrapper } from "./ExampleComponent.styled";

const ExampleComponent: React.FC = () => {
  return (
    <StyledWrapper>
      <p>ExampleComponent</p>
      <Link href="/contacts">Contact Page Link</Link>
    </StyledWrapper>
  );
};

export { ExampleComponent };
