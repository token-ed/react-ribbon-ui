import { default as React } from "react";
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
    <>
      <section className="m-10 gap-y-4 flex flex-col">
        <h2 className="font-bold">TOP RIGHT</h2>
        <div className="flex xl:flex-row flex-col gap-6">
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="top-right" variant="announcement" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                announcement
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"top-right"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"announcement"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="top-right" variant="warning" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                warning
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"top-right"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"warning"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="top-right" variant="success" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                success
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"top-right"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"success"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="top-right" variant="error" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                error
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"top-right"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"error"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
        </div>
      </section>
      <section className="m-10 gap-y-4 flex flex-col">
        <h2 className="font-bold">BOTTOM RIGHT</h2>
        <div className="flex xl:flex-row flex-col gap-6">
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="bottom-right" variant="announcement" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                announcement
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"bottom-right"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"announcement"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="bottom-right" variant="warning" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                warning
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"bottom-right"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"warning"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="bottom-right" variant="success" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                success
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"bottom-right"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"success"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="bottom-right" variant="error" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                error
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"bottom-right"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"error"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
        </div>
      </section>
      <section className="m-10 gap-y-4 flex flex-col">
        <h2 className="font-bold">BOTTOM LEFT</h2>
        <div className="flex xl:flex-row flex-col gap-6">
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="bottom-left" variant="announcement" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                announcement
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"bottom-left"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"announcement"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="bottom-left" variant="warning" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                warning
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"bottom-left"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"warning"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="bottom-left" variant="success" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                success
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"bottom-left"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"success"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="bottom-left" variant="error" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                error
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"bottom-left"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"error"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
        </div>
      </section>
      <section className="m-10 gap-y-4 flex flex-col">
        <h2 className="font-bold">TOP LEFT</h2>
        <div className="flex xl:flex-row flex-col gap-6">
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="top-left" variant="announcement" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                announcement
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"top-left"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"announcement"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="top-left" variant="warning" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                warning
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"top-left"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"warning"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="top-left" variant="success" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                success
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"top-left"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"success"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
          <RibbonWrapper classNames="border-slate-500 justify-center border-[1px] rounded-md min-w-72 flex items-center bg-slate-600 xl:w-72 p-6">
            <Ribbon text="NEW" position="top-left" variant="error" />
            <div className="flex flex-col gap-y-4">
              <p className="p-1 rounded-md bg-slate-400 inline-block text-pretty w-fit font-light text-sm">
                error
              </p>
              <code className="block p-2 text-xs bg-gray-900 text-white rounded-md">
                &lt;Ribbon&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">text=</span>
                <span className="text-yellow-300">"NEW"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">position=</span>
                <span className="text-yellow-300">"top-left"</span>
                <br />
                &nbsp;&nbsp;&nbsp;<span className="text-blue-400">variant=</span>
                <span className="text-yellow-300">"error"</span>
                <br />
                /&gt;
              </code>
            </div>
          </RibbonWrapper>
        </div>
      </section>
    </>
  );
};
