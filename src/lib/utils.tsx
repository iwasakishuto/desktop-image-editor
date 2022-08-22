/**
 * @file Utility Functions
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2021
 * @license MIT
 */

/**
 * @summary Generate a Random String
 * @param {number} length The length of the generated string.
 * @return {string} Generated random string.
 */
export function genRandomStr(length: number): string {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .slice(0, length);
}

/**
 * @summary Remove extension from filename
 * @param {string} filename Filename.
 * @return {string} File name with the extension removed
 */
export function removeExt(filename: string): string {
  return filename.substring(0, filename.lastIndexOf(".")) || filename;
}
