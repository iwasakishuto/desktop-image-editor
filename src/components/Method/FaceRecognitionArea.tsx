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

type FaceRecognitionAreaProps = HTMLDivProps;

const FaceRecognitionArea: React.FC<FaceRecognitionAreaProps> = ({
  children,
  className = "",
  ...props
}) => {
  const { original, setOriginal, imageSrc, setImageSrc } = useContext(MethodContext)!;
  const { showAlertSnack } = useContext(UtilityContext)!;

  return (
    <div {...props} className={`${className}`}>
      <div className="flex flex-col mx-6 mt-6">Do FaceRecognition</div>
    </div>
  );
};

export default FaceRecognitionArea;
