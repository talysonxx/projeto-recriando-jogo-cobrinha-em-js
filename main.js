let canvas = window.document.querySelector('canvas#snake')
let context = canvas.getContext('2d')
let box = 32

function criarBackground(){
    context.fillStyle = 'lightgreen'
    // x, y, w, h
    context.fillRect(0, 0, 16 * box, 16 * box)
}
criarBackground()