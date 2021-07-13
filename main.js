let canvas = window.document.querySelector('canvas#snake')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake.push({
    x: 8 * box,
    y: 8 * box
})
let direction = 'right'

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
function iniciarJogo(){
    criarBackground()
    criarCobra()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == 'right') snakeX += box
    if(direction == 'left') snakeX -= box
    if(direction == 'up') snakeY += box
    if(direction == 'down') snakeY -= box

    snake.pop()

    let novaCabeca = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(novaCabeca)
}

let jogo = setInterval(iniciarJogo(), 100)