import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
  background?: string;
  gradient?: string;
  customClasses?: string;
}

const positions = {
  "top-left": {
    wrapper: "top-0 left-0 -rotate-45 -translate-y-[0.9rem] -translate-x-[1.9rem] origin-right",
    leftBorder: "border-r-red-500 border-t-transparent border-t-[16px] border-r-[16px]",
    rightBorder: "border-l-red-500 border-t-transparent border-t-[16px] border-l-[16px]",
  },
  "top-right": {
    wrapper: "top-0 right-0 rotate-45 -translate-y-[0.9rem] translate-x-[1.9rem] origin-left",
    leftBorder: "border-r-red-500 border-t-transparent border-t-[16px] border-r-[16px]",
    rightBorder: "border-l-red-500 border-t-transparent border-t-[16px] border-l-[16px]",
  },
  "bottom-right": {
    wrapper: "bottom-0 right-0 -rotate-45 translate-y-[0.9rem] translate-x-[1.9rem] origin-left",
    leftBorder: "border-t-red-500 border-t-[16px] border-l-transparent border-l-[16px]",
    rightBorder:
      "border-t-red-500 border-t-[16px] border-l-transparent border-r-[16px] border-r-transparent",
  },
  "bottom-left": {
    wrapper: "bottom-0 left-0 rotate-45 translate-y-[0.9rem] -translate-x-[1.9rem] origin-right",
    leftBorder: "border-t-red-500 border-t-[16px] border-l-transparent border-l-[16px]",
    rightBorder:
      "border-t-red-500 border-t-[16px] border-l-transparent border-r-[16px] border-r-transparent",
  },
};

const Ribbon = ({
  text,
  position = "top-left",
  background = "bg-red-500",
  gradient = "",
  customClasses = "",
}: Props) => {
  const { wrapper, leftBorder, rightBorder } = positions[position];

  const wrapperClasses = twMerge(`flex absolute w-20 h-4 overflow-hidden ${wrapper}`);

  const leftBorderClasses = twMerge(`w-0 h-0  translate-x-[0.2px]  ${leftBorder}`);

  const rightBorderClasses = twMerge(`w-0 h-0 -translate-x-[0.2px] ${rightBorder}`);

  return (
    <div className={wrapperClasses}>
      <div className={leftBorderClasses} />
      <div className="w-full bg-red-500 text-[0.625rem] text-nowrap justify-center items-center flex py-2 overflow-hidden">
        {text}
      </div>
      <div className={rightBorderClasses} />
    </div>
  );
};

export default Ribbon;
