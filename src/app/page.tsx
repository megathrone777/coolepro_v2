import React from "react";

import { ExampleComponent } from "~/components";

const HomePage: React.FC = async () => {
  return (
    <div>
      Home Page
      <ExampleComponent />
      <ExampleComponent />
      <ExampleComponent />
    </div>
  );
};

export default HomePage;
