import { css } from "~/theme";

const base = css(({ theme: { fonts } }) => ({
  "*": {
    boxSizing: "border-box",
  },

  html: {
    fontSize: `${fonts.initialFontSize}px`,
  },

  body: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: "var(--font-roboto)",
    overflowY: "scroll",
  },

  button: {
    cursor: "pointer",
  },

  svg: {
    height: "100%",
    width: "100%",
  },

  img: {
    maxWidth: "100%",
    verticalAlign: "middle",
  },

  pre: {
    font: "inherit",
    lineHeight: "inherit",
  },

  object: {
    display: "none",
  },

  b: {
    fontWeight: fonts.bold,
  },
}));

export { base };
