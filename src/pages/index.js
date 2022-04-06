import * as React from "react";
import "../assets/css/styles.css";
import { ThemeProvider } from "styled-components";
import theme from "../components/global/theme/Theme";
import { Header } from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";
import Hero from "../components/homePage/hero/Hero";
import Services from "../components/homePage/services/Services";
import FadeInAnimation from "../assets/js/FadeInAnimation";
import ServiceDetails from "../components/webDesignPage/serviceDetails/ServiceDetails";

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Hero></Hero>
      <FadeInAnimation>
        <Services></Services>
      </FadeInAnimation>
        <ServiceDetails></ServiceDetails>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default IndexPage;
