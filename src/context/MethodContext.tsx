/**
 * @file MethodContext
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import { DEFAULT_METHOD, MethodName } from "@/types/method";
import React, { createContext, useMemo, useState } from "react";

interface MethodContextInterface {
  method: MethodName;
  setMethod: React.Dispatch<React.SetStateAction<MethodName>>;
  original: File | null;
  setOriginal: React.Dispatch<React.SetStateAction<File | null>>;
  imageSrc: string;
  setImageSrc: React.Dispatch<React.SetStateAction<string>>;
  result: File | null;
  setResult: React.Dispatch<React.SetStateAction<File | null>>;
}

export const MethodContext = createContext<MethodContextInterface | undefined>(undefined);

type MethodContextProps = {
  children: React.ReactNode;
};

export const MethodProvider: React.FC<MethodContextProps> = ({ children }) => {
  const [method, setMethod] = useState<MethodName>(DEFAULT_METHOD);
  const [imageSrc, setImageSrc] = useState<string>("/sample.png");
  const [original, setOriginal] = useState<File | null>(null);
  const [result, setResult] = useState<File | null>(null);

  const value = useMemo(
    () => ({
      method,
      setMethod,
      original,
      setOriginal,
      imageSrc,
      setImageSrc,
      result,
      setResult,
    }),
    [method, original]
  );

  return <MethodContext.Provider value={value}>{children}</MethodContext.Provider>;
};
