import { createMuiTheme, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const theme = createMuiTheme({
    palette: {
      // type: darkMode ? "dark" : "light",
      primary: {
        light: "#622a7a",
        main: "#8D3DAF",
        dark: "#a363bf",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {/* <Paper style={{ height: "100vh" }}> */}
      <Component {...pageProps} />
      {/* </Paper> */}
    </ThemeProvider>
  );
};

export default MyApp;
