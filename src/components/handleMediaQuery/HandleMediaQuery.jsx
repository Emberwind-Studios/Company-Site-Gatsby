import React from "react";
import { useMediaQuery } from "react-responsive";

const HandleMediaQuery = () => {

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return isTabletOrMobile
};

export default HandleMediaQuery;
