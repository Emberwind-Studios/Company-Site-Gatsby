import * as React from "react";
import "../assets/css/styles.css";
import { ThemeProvider } from "styled-components";
import theme from "../components/global/theme/Theme";
import { Header } from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";
import WebDesignHero from "../components/webDesignPage/webDesignHero/WebDesignHero";


// markup
const WebDesignPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <WebDesignHero></WebDesignHero>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default WebDesignPage;