let canvas = window.document.querySelector('canvas#snake')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake.push({
    x: 8 * box,
    y: 8 * box
}) 

function criarBackground(){
    context.fillStyle = 'lightgreen'
    // x, y, w, h
    context.fillRect(0, 0, 16 * box, 16 * box)
}
function criarCobra(){
    for(let i = 0; i < snake.length; i++){
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

criarBackground()
criarCobra()