import styled from "styled-components";

const theme = {
  colors: {
    text: "#fff",
    background: "#fff",
    primary: "#7A93D2",
    secondary: "#ff6347",
    footer: "#36454F",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Roboto",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};



export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 1%;
  width: 100%;
  height: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  justify-content: center;
  margin: 2%;
  width: auto;
  height: auto;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
`;

export const Heading = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[4] + "px"};
  color: ${theme.colors.text};
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  margin-top: 100%;
  padding: 5%;
  background-color: ${theme.colors.primary};
`;

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  width: 100px;
  height: 50px;
`;

export default theme;
