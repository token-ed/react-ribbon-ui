import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  classNames?: string;
}
export const RibbonWrapper = ({ children, classNames }: Props) => (
  <div className={twMerge(`relative ${classNames}`)}>{children}</div>
);
