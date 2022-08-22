/**
 * @file Types for MUI elements.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import type { AvatarProps } from "@mui/material/Avatar";
import type { ButtonProps } from "@mui/material/Button";
import type { CardProps } from "@mui/material/Card";
import type { ChipProps } from "@mui/material/Chip";
import type { DialogProps } from "@mui/material/Dialog";
import type { FormControlLabelProps } from "@mui/material/FormControlLabel";
import type { IconButtonProps } from "@mui/material/IconButton";
import type { ListProps } from "@mui/material/List";
import type { SliderProps } from "@mui/material/Slider";
import type { TextFieldProps } from "@mui/material/TextField";
import type { TooltipProps } from "@mui/material/Tooltip";

export type AvatarSubProps = Omit<AvatarProps, "children">;
export type ButtonSubProps = Omit<ButtonProps, "children">;
export type CardSubProps = Omit<CardProps, "children">;
export type ChipSubProps = Omit<ChipProps, "">;
export type DialogSubProps = Omit<DialogProps, "children" | "open">;
export type FormControlLabelSubProps = Omit<FormControlLabelProps, "control" | "label">;
export type IconButtonSubProps = Omit<IconButtonProps, "children">;
export type ListSubProps = Omit<ListProps, "children">;
export type SliderSubProps = Omit<SliderProps, "">;
export type TextFieldSubProps = Omit<TextFieldProps, "">;
export type TooltipSubProps = Omit<TooltipProps, "children" | "title">;

export type PaletteColorKeys =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | undefined;
