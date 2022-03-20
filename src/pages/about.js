import React from "react";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme/Theme";

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default AboutPage;
