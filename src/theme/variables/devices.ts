import { TDevices } from "./types";

const sizes: TDevices = {
  mobile: "767px",
};

const devices: TDevices = {
  mobile: `@media screen and (max-width: ${sizes.mobile})`,
};

export { devices };
