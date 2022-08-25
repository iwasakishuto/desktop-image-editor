//! This file contains methods for processing image.
//! @author iwasakishuto<https://github.com/iwasakishuto>
//! @license MIT, Shuto Iwasaki, 2022

use image::*;
use std::u8;

/// Apply Mosaic Processing.
pub fn apply_mosaic_processing(
    mut img: ImageBuffer<Rgba<u8>, Vec<u8>>,
    width: u32,
    height: u32,
) -> ImageBuffer<Rgba<u8>, Vec<u8>> {
    let block_size: u32 = 32;
    for h in (0..height).step_by(block_size as usize) {
        for w in (0..width).step_by(block_size as usize) {
            let mut r_sum: u32 = 0;
            let mut g_sum: u32 = 0;
            let mut b_sum: u32 = 0;
            let mut a_sum: u32 = 0;
            let mut safe_area_x = 0;
            let mut safe_area_y = 0;
            for y in 0..block_size as u32 {
                if height <= h + y as u32 {
                    break;
                }
                safe_area_y = y as u32 + 1;
                for x in 0..block_size as u32 {
                    if width <= w + x as u32 {
                        break;
                    }
                    r_sum += img.get_pixel(w + x, h + y).0[0] as u32;
                    g_sum += img.get_pixel(w + x, h + y).0[1] as u32;
                    b_sum += img.get_pixel(w + x, h + y).0[2] as u32;
                    a_sum += img.get_pixel(w + x, h + y).0[3] as u32;
                    safe_area_x = x + 1;
                }
            }

            for y in 0..safe_area_y {
                for x in 0..safe_area_x {
                    img.put_pixel(
                        w + x,
                        h + y,
                        Rgba([
                            (r_sum / (block_size * block_size)) as u8,
                            (g_sum / (block_size * block_size)) as u8,
                            (b_sum / (block_size * block_size)) as u8,
                            (a_sum / (block_size * block_size)) as u8,
                        ]),
                    )
                }
            }
        }
    }
    return img;
}

// fn binarize(buf: Vec<u8>) -> opencv::Result<()> {
//     let src = imdecode(&VectorOfuchar::from_iter(buf), IMREAD_COLOR);
//     let mut gray = Mat::default();
//     imgproc::cvt_color(&src, &mut gray, imgproc::COLOR_BGR2GRAY, 1)?;
//     let mut bin = Mat::default();
//     imgproc::threshold(&gray, &mut bin, 128.0, 255.0, imgproc::THRESH_BINARY)?;
//     imwrite("result.bmp", &bin, &Vector::default())?;
//     Ok(())
// }
