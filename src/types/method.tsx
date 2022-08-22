/**
 * @file Types for image editing methods.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import { HTMLDivProps } from "./html";
import { SvgIconComponent } from "@mui/icons-material";

export const METHOD_NAMES = ["upload", "gray", "face", "compare"] as const;
export type MethodName = typeof METHOD_NAMES[number];

export const DEFAULT_METHOD: MethodName = METHOD_NAMES[0];

export type SidebarMethod = {
  name: MethodName;
  label: string;
  render: (props: HTMLDivProps) => JSX.Element;
  Icon: SvgIconComponent;
};
