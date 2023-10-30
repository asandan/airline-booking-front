import { createTheme } from "@mui/material/styles";

const primaryColor = "#9dc4f8 !important";
const secondaryColor = "#4e80ee !important";
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
