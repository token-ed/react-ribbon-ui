import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RibbonWrapper } from "../src/components/ribbon-wrapper";
import Ribbon from "../src/index";

export const App = () => (
  <BrowserRouter basename="react-ribbon-ui">
    <AppDesktop />
  </BrowserRouter>
);

const AppDesktop = () => {
  return (
    <RibbonWrapper classNames="border-blue-500 border-[1px] rounded-md h-20 m-10 p-20 flex items-center bg-blue-500/20 max-w-56">
      <Ribbon text="NEW" position="bottom-left" />
      <Ribbon text="NEW" position="top-left" />
      <Ribbon text="NEW" position="top-right" />
      <Ribbon text="NEW" position="bottom-right" />
      Some content
    </RibbonWrapper>

    // <section className="flex flex-col gap-y-5 p-6 m-2 border-solid border-2 border-sky-500 w-fit rounded-md">
    //   <div className="rounded-md bg-slate-400 w-96 h-52 text-center content-center border-solid border-2 border-orange-500 relative overflow-hidden">
    //     Card 1
    //     <Ribbon text="COMMING SOON" />
    //   </div>
    //   <div className="rounded-md bg-slate-400 w-96 h-52 text-center content-center border-solid border-2 border-sky-500">
    //     Card 2
    //   </div>
    //   <div className="rounded-md bg-slate-400 w-96 h-52 text-center content-center">Card 3</div>
    //   <div className="rounded-md bg-slate-400 w-96 h-52 text-center content-center">Card 4</div>
    // </section>
  );
};
