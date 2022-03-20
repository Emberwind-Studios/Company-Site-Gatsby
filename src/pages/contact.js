import * as React from "react";
import "../assets/css/styles.css";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme/Theme";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";


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