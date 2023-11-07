import { CSSObject } from "styled-components";

import { TColors, TDevices, TFonts } from "~/theme/variables/types";

declare module "styled-components" {
  interface TRem<P = number> {
    (px: P): string;
  }

  interface TPlaceholder<P = Styles<object>> {
    (css: P): P;
  }

  interface THover<P = CSSObject> {
    (css: P): {
      [key in string]: P;
    };
  }

  export interface DefaultTheme {
    colors: TColors;
    devices: TDevices;
    fonts: TFonts;
    hover: THover;
    placeholder: TPlaceholder;
    rem: TRem;
  }
}
