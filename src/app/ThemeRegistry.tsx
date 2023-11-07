"use client";
import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "~/theme";

const ThemeRegistry: React.FC<{ children: React.ReactElement[] }> = ({ children }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML((): React.ReactElement => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    styledComponentsStyleSheet.instance.clearTag();

    return <React.Fragment key="collect-styles">{styles}</React.Fragment>;
  });

  if (typeof window !== "undefined") {
    return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
  }

  return (
    <StyleSheetManager
      enableVendorPrefixes
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={(): boolean => true}
    >
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export { ThemeRegistry };
