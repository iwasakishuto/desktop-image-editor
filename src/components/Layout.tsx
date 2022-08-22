/**
 * @file Layout Component.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import React, { useContext, useState } from "react";

import { HTMLDivProps } from "@/types";
import Main from "@/components/Main";
import { MethodProvider } from "@/context/MethodContext";
import Sidebar from "@/components/Sidebar";
import { UtilityContextProvider } from "@/context/UtilityContext";

type LayoutProps = {} & HTMLDivProps;

const Layout: React.FC<LayoutProps> = ({ children, className = "", ...props }) => (
  <UtilityContextProvider>
    <MethodProvider>
      <div {...props} className={`flex h-screen bg-slate-900 ${className}`}>
        <Sidebar className="w-12 p-1 flex flex-col h-screen bg-slate-200" />
        <Main className="flex flex-1 flex-row" />
      </div>
    </MethodProvider>
  </UtilityContextProvider>
);

export default Layout;
