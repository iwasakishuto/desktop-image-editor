/**
 * @file Types for HTMLElement.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import * as React from "react";

export type HTMLProps<Element extends HTMLElement> = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<Element>,
  Element
>;

export type HTMLAnchorProps = HTMLProps<HTMLAnchorElement>;
export type HTMLButtonProps = HTMLProps<HTMLButtonElement>;
export type HTMLDivProps = HTMLProps<HTMLDivElement>;
export type HTMLHeadingProps = HTMLProps<HTMLHeadingElement>;
export type HTMLImageProps = HTMLProps<HTMLImageElement>;
export type HTMLInputProps = HTMLProps<HTMLInputElement>;
export type HTMLSpanProps = HTMLProps<HTMLSpanElement>;
export type HTMLTextAreaProps = HTMLProps<HTMLTextAreaElement>;
export type HTMLLIProps = HTMLProps<HTMLLIElement>;
