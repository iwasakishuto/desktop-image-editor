/**
 * @file Face-Recognition Function Page
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import React, { useContext, useRef, useState } from "react";

import { HTMLDivProps } from "@/types";
import { MethodContext } from "@/context/MethodContext";
import { UtilityContext } from "@/context/UtilityContext";

type GrayScaleAreaProps = HTMLDivProps;

const GrayScaleArea: React.FC<GrayScaleAreaProps> = ({ children, className = "", ...props }) => {
  const { original, setOriginal, imageSrc, setImageSrc } = useContext(MethodContext)!;
  const { showAlertSnack } = useContext(UtilityContext)!;

  return (
    <div {...props} className={`${className}`}>
      <div className="flex flex-col mx-6 mt-6">Convert Image to Gray-Scale.</div>
    </div>
  );
};

export default GrayScaleArea;
