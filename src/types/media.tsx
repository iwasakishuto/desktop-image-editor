/**
 * @file Data Type for images.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

export const IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/apng",
  // "image/avif",
  // "image/svg+xml",
  // "image/bmp",
  // "image/tiff",
  // "image/x-icon",
] as const;
export type ImageType = typeof IMAGE_TYPES[number];
