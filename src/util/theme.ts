import { createTheme } from "@mui/material/styles";

const primaryColor = "#9dc4f8 !important";
// Create a theme instance.
export const themeObject = () =>
  createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
    },
  });
