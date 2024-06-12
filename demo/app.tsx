import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Ribbon } from "../src/index";
export const App = () => (
  <BrowserRouter basename="react-ribbon-ui">
    <AppDesktop />
  </BrowserRouter>
);

const AppDesktop = () => {
  return <Ribbon />;
};
