/**
 * @file Types for custom elements.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

export type {
  HTMLProps,
  HTMLAnchorProps,
  HTMLButtonProps,
  HTMLDivProps,
  HTMLHeadingProps,
  HTMLImageProps,
  HTMLInputProps,
  HTMLLIProps,
  HTMLSpanProps,
  HTMLTextAreaProps,
} from "./html";

export type {
  TooltipSubProps,
  ButtonSubProps,
  DialogSubProps,
  PaletteColorKeys,
  CardSubProps,
  AvatarSubProps,
  IconButtonSubProps,
  FormControlLabelSubProps,
  TextFieldSubProps,
  ChipSubProps,
  ListSubProps,
  SliderSubProps,
} from "./mui";

export type { MethodName, SidebarMethod } from "./method";
export { METHOD_NAMES, DEFAULT_METHOD } from "./method";

export type { ImageType } from "./media";
export { IMAGE_TYPES } from "./media";
