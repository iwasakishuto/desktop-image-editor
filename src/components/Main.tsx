/**
 * @file Main Component.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import React, { useContext, useState } from "react";

import { HTMLDivProps } from "@/types";
import { MethodContext } from "@/context/MethodContext";
import { SidebarMethods } from "@/data/sidebar";

type MainProps = {} & HTMLDivProps;

const Main: React.FC<MainProps> = ({ children, className = "", ...props }) => {
  const { method } = useContext(MethodContext)!;
  const sidebarMethod = SidebarMethods.find((e) => e.name === method)!;

  return (
    <div {...props} className={`${className}`}>
      <div className="flex flex-col flex-1">
        <div className="flex w-full bg-slate-300 text-slate-900 font-bold px-2 py-1">
          <span className="mx-auto">{sidebarMethod.label}</span>
        </div>
        <div className="p-2 bg-slate-700 h-full">{sidebarMethod.render({})}</div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex w-full bg-slate-500 text-slate-300 font-bold px-2 py-1">
          <span className="mx-auto">Result</span>
        </div>
        <div className="p-2 bg-slate-900 h-full">{children}</div>
      </div>
    </div>
  );
};

export default Main;
