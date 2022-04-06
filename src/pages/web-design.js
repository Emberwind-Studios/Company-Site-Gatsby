import * as React from "react";
import "../assets/css/styles.css";
import { ThemeProvider } from "styled-components";
import theme from "../components/global/theme/Theme";
import { Header } from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";
import WebDesignHero from "../components/webDesignPage/webDesignHero/WebDesignHero";
import ServiceDetails from "../components/webDesignPage/serviceDetails/ServiceDetails";
import WebFeatures from "../components/webDesignPage/webFeatures/WebFeatures";


// markup
const WebDesignPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <WebDesignHero></WebDesignHero>
      <ServiceDetails></ServiceDetails>
      <WebFeatures></WebFeatures>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default WebDesignPage;