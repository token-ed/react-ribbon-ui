import React from "react";
import { twMerge } from "tailwind-merge";
import { Tailwindest } from "tailwindest";

interface Props {
  text: string;
  position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
  textColor?: Tailwindest["color"];
  variant?: keyof typeof variants;
}

const getConfiguration = (variant: Props["variant"] = "default", position: Props["position"]) => {
  const { bgColor, blColor, brColor, btColor } = variants[variant];

  const positions = {
    "top-left": {
      wrapper: "top-0 left-0 -rotate-45 -translate-y-[0.9rem] -translate-x-[1.9rem] origin-right",
      leftBorder: `${brColor} border-t-transparent border-t-[16px] border-r-[16px]`,
      rightBorder: `${blColor} border-t-transparent border-t-[16px] border-l-[16px]`,
    },
    "top-right": {
      wrapper: "top-0 right-0 rotate-45 -translate-y-[0.9rem] translate-x-[1.9rem] origin-left",
      leftBorder: `${brColor} border-t-transparent border-t-[16px] border-r-[16px]`,
      rightBorder: `${blColor} border-t-transparent border-t-[16px] border-l-[16px]`,
    },
    "bottom-right": {
      wrapper: "bottom-0 right-0 -rotate-45 translate-y-[0.9rem] translate-x-[1.9rem] origin-left",
      leftBorder: `${btColor} border-t-[16px] border-l-transparent border-l-[16px]`,
      rightBorder: `${btColor} border-t-[16px] border-l-transparent border-r-[16px] border-r-transparent`,
    },
    "bottom-left": {
      wrapper: "bottom-0 left-0 rotate-45 translate-y-[0.9rem] -translate-x-[1.9rem] origin-right",
      leftBorder: `${btColor} border-t-[16px] border-l-transparent border-l-[16px]`,
      rightBorder: `${btColor} border-t-[16px] border-l-transparent border-r-[16px] border-r-transparent`,
    },
  };

  return { bgColor, positions };
};

const variants = {
  warning: {
    bgColor: "bg-yellow-400",
    blColor: "border-l-yellow-400",
    brColor: "border-r-yellow-400",
    btColor: "border-t-yellow-400",
  },
  error: {
    bgColor: "bg-red-500",
    blColor: "border-l-red-500",
    brColor: "border-r-red-500",
    btColor: "border-t-red-500",
  },
  success: {
    bgColor: "bg-green-500",
    blColor: "border-l-green-500",
    brColor: "border-r-green-500",
    btColor: "border-t-green-500",
  },
  announcement: {
    bgColor: "bg-blue-400",
    blColor: "border-l-blue-400",
    brColor: "border-r-blue-400",
    btColor: "border-t-blue-400",
  },
  default: {
    bgColor: "bg-gray-200",
    blColor: "border-l-gray-200",
    brColor: "border-r-gray-200",
    btColor: "border-t-gray-200",
  },
};

const Ribbon = ({
  text,
  position = "top-left",
  textColor = "text-white",
  variant = "default",
}: Props) => {
  const { bgColor, positions } = getConfiguration(variant, position);
  const { wrapper, leftBorder, rightBorder } = positions[position];

  const wrapperClasses = twMerge(`flex absolute w-20 h-4 overflow-hidden ${wrapper}`);

  const middleClasses = twMerge(
    `w-full text-[0.625rem] font-bold text-nowrap justify-center items-center flex py-2 overflow-hidden ${textColor} ${bgColor}`
  );
  const leftClasses = twMerge(`w-0 h-0  translate-x-[0.2px]  ${leftBorder}`);
  const rightClasses = twMerge(`w-0 h-0 -translate-x-[0.2px] ${rightBorder}`);

  return (
    <div className={wrapperClasses}>
      <div className={leftClasses} />
      <div className={middleClasses}>{text}</div>
      <div className={rightClasses} />
    </div>
  );
};

export default Ribbon;
