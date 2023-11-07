import localFont from "next/font/local";

const fontRoboto = localFont({
  display: "block",
  src: [
    {
      path: "./Roboto-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./Roboto-Bold.ttf",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-roboto",
});

export { fontRoboto };
