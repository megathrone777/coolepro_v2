import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { colors } }) => ({
  color: colors.green,
}));
