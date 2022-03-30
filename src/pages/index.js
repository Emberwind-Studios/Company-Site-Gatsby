import * as React from "react";
import "../assets/css/styles.css";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme/Theme";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import FadeInAnimation from "../assets/js/FadeInAnimation";

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Hero></Hero>
      <FadeInAnimation>
        <Services></Services>
      </FadeInAnimation>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default IndexPage;
