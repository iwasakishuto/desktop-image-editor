#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod methods;

#[tauri::command]
fn mosaic_processing(buf: Vec<u8>, w: u32, h: u32) -> Vec<u8> {
    let mut img = methods::utils::vec2img(buf, w, h);
    img = methods::mosaic::apply_mosaic_processing(img, w, h);
    return methods::utils::img2vec(img);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![mosaic_processing])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
