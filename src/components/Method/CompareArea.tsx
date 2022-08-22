/**
 * @file Compare Function Page
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import React, { useContext, useEffect, useRef, useState } from "react";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import { HTMLDivProps } from "@/types";
import { IMAGE_TYPES } from "@/types";
import { MethodContext } from "@/context/MethodContext";
import { UtilityContext } from "@/context/UtilityContext";

type CompareAreaProps = HTMLDivProps;

const CompareArea: React.FC<CompareAreaProps> = ({ children, className = "", ...props }) => {
  const { original } = useContext(MethodContext)!;
  const { showAlertSnack } = useContext(UtilityContext)!;

  return (
    <div {...props} className={`${className}`}>
      <div className="flex flex-col mx-6 mt-6">
        {/* <--- Selected Image --- */}
        <div className="flex flex-col flex-1 items-center">
          <div>Original Image</div>
          {original === null ? (
            <>Please Upload Image</>
          ) : (
            <img src={URL.createObjectURL(original)} className="w-full" />
          )}
          <Button
            color="success"
            variant="contained"
            className="mt-2"
            endIcon={<AddPhotoAlternateIcon />}
          >
            Clear Image Edits
          </Button>
        </div>
        {/* --- END Selected Image ---> */}
      </div>
    </div>
  );
};

export default CompareArea;
