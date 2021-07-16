import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = responsiveFontSizes(
  createTheme({
    typography: {
      body1: {
        fontFamily: ["Courier Prime", "serif"].join(","),
      },
      body2: {
        fontFamily: ["Courier Prime", "serif"].join(","),
      },
      h1: {
        fontFamily: ["Bangers", "sans serif"].join(","),
        color: "rgba(255,255,255,1)",
      },
      h2: {
        fontFamily: ["Bangers", "sans serif"].join(","),
        color: "rgba(255,255,255,1)",
      },
      h3: {
        fontFamily: ["Bangers", "sans serif"].join(","),
        color: "rgba(255,255,255,1)",
      },
      h4: {
        fontFamily: ["Bebas Neue", "serif"].join(","),
      },
      h6: {
        fontFamily: ["Bebas Neue", "serif"].join(","),
      },
      button: {
        fontFamily: ["Bebas Neue", "serif"].join(","),
      },
    },
  })
);

export default theme;
