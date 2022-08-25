//! This file contains methods for processing image.
//! @author iwasakishuto<https://github.com/iwasakishuto>
//! @license MIT, Shuto Iwasaki, 2022

use image::*;
use std::u8;

/// Convert from canvas ImageData.data to Image object
pub fn vec2img(buf: Vec<u8>, width: u32, height: u32) -> ImageBuffer<Rgba<u8>, Vec<u8>> {
    let img: ImageBuffer<Rgba<u8>, Vec<u8>> =
        ImageBuffer::from_raw(width, height, buf).expect("Error occurs at load image from buffer.");
    return img;
}

/// Convert from Image object to canvas ImageData.data.
pub fn img2vec(img: ImageBuffer<Rgba<u8>, Vec<u8>>) -> Vec<u8> {
    return img.as_bytes().to_vec();
}
