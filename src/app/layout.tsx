import React from "react";

import { Header } from "~/components";
import { GlobalStyle } from "~/theme";
import { ThemeRegistry } from "./ThemeRegistry";
import { fontRoboto } from "./fonts";
import { TProps } from "./types";

const Layout: React.FC<TProps> = ({ children }) => (
  <html className={fontRoboto.className} lang="cs">
    <body>
      <ThemeRegistry>
        <GlobalStyle />
        <Header />
        {children}
      </ThemeRegistry>
    </body>
  </html>
);

export default Layout;
