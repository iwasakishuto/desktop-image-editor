/**
 * @file Upload Function Page
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import React, { useContext, useRef, useState } from "react";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import { HTMLDivProps } from "@/types";
import { IMAGE_TYPES } from "@/types";
import { MethodContext } from "@/context/MethodContext";
import { UtilityContext } from "@/context/UtilityContext";

type UploadAreaProps = HTMLDivProps;

const UploadArea: React.FC<UploadAreaProps> = ({ children, className = "", ...props }) => {
  const { original, setOriginal, imageSrc, setImageSrc } = useContext(MethodContext)!;
  const { showAlertSnack } = useContext(UtilityContext)!;
  const inputRef = useRef<HTMLInputElement>(null);

  const onSelectImageFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    if (target.files !== null && target.files.length > 0) {
      try {
        const file: File = target.files[0];
        const url: string = URL.createObjectURL(file);
        setOriginal(file);
        setImageSrc(url);
        showAlertSnack({ message: "Success", severity: "success" });
      } catch (err) {
        showAlertSnack({ message: String(err), severity: "error" });
      }
    } else {
      showAlertSnack({ message: "Image is not selected.", severity: "info" });
    }
  };

  return (
    <div {...props} className={`${className}`}>
      <div className="flex flex-col mx-6 mt-6">
        {/* <--- Selected Image --- */}
        <div className="flex flex-col flex-1 items-center">
          <div>{original !== null ? original.name : "NO IMAGE"}</div>
          <img src={imageSrc} className="w-full my-4" />
          <input
            className="hidden"
            type="file"
            accept={IMAGE_TYPES.join(", ")}
            onChange={onSelectImageFile}
            onClick={(evt: React.MouseEvent<HTMLInputElement>) => {
              const input = evt.target as HTMLInputElement;
              input.value = "";
            }}
            ref={inputRef}
          />
          <Button
            color="success"
            variant="contained"
            className="mt-2"
            endIcon={<AddPhotoAlternateIcon />}
            onClick={() => {
              const fileImageInput = inputRef.current;
              if (fileImageInput !== null) {
                fileImageInput.click();
              }
            }}
          >
            Upload Image
          </Button>
        </div>
        {/* --- END Selected Image ---> */}
      </div>
    </div>
  );
};

export default UploadArea;
