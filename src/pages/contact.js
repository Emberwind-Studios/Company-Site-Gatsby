import * as React from "react";
import "../assets/css/styles.css";
import { ThemeProvider } from "styled-components";
import theme from "../components/global/theme/Theme";
import { Header } from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";


// markup
const ContactPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default ContactPage;