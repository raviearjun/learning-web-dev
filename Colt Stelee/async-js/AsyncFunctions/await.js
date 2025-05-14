const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
    }, delay)
    })
}

async function rainbow(){
    await delayedColorChange('yellow', 1000) // menunggu selesai baru lanjut ke line berikutnya
    await delayedColorChange('blue', 1000) // sama seperti di atas
    await delayedColorChange('red', 1000)
    await delayedColorChange('green', 1000)
    return "All done!"
}
async function printRainbow(){
    await rainbow();
    console.log("END OF RAINBOW!")
}