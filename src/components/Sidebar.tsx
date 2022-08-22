/**
 * @file Sidebar Component
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import { HTMLDivProps, SidebarMethod } from "@/types";
import React, { useContext, useState } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { MethodContext } from "@/context/MethodContext";
import { SidebarMethods } from "@/data/sidebar";
import Tooltip from "@mui/material/Tooltip";
import TwitterIcon from "@mui/icons-material/Twitter";

type SidebarProps = {} & HTMLDivProps;

const Sidebar: React.FC<SidebarProps> = ({ children, className = "" }) => {
  const { original, method, setMethod } = useContext(MethodContext)!;

  return (
    <div className={`flex ${className}`}>
      {SidebarMethods.map((e: SidebarMethod) => {
        const isDisabled = e.name !== "upload" && original === null;
        return (
          <Tooltip title={e.name} placement="right" key={e.name}>
            <IconButton
              onClick={() => {
                setMethod(e.name);
              }}
              disabled={isDisabled}
            >
              <e.Icon color={e.name === method ? "success" : isDisabled ? "disabled" : undefined} />
            </IconButton>
          </Tooltip>
        );
      })}
      <div className="mt-auto mb-1">
        <a href="https://twitter.com/cabernet_rock" target="_blank">
          <IconButton>
            <TwitterIcon color="primary" />
          </IconButton>
        </a>
        <a href="https://github.com/iwasakishuto/desktop-image-editor" target="_blank">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
