import { createTheme } from "@mui/material/styles";

const primaryColor = "#1A3368 !important";
const secondaryColor = "#101f3f !important";
// Create a theme instance.
export const themeObject = () =>
  createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
  });
