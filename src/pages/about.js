import React from "react";
import { Header } from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";
import { ThemeProvider } from "styled-components";
import theme from "../components/global/theme/Theme";

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default AboutPage;
