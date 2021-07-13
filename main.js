let canvas = window.document.querySelector('canvas#snake')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake.push({
    x: 8 * box,
    y: 8 * box
})
let direction = 'right'

let comida = {
    // Math.floor retorna o menor número inteiro, tira a parte flutuante
    // 45.95 = 45
    // -45.95 = -46
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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
function desenharComida(){
    context.fillStyle = 'red'
    context.fillRect(comida.x, comida.y, box, box)
}

// detecta quando pressionarmos o keyborad
window.document.addEventListener('keydown', update)
function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left'
    if(event.keyCode == 38 && direction != 'down') direction = 'up'
    if(event.keyCode == 39 && direction != 'left') direction = 'right'
    if(event.keyCode == 40 && direction != 'up') direction = 'down'
}

function iniciarJogo(){
    // para cobra sempre retornar
    if(snake[0].x > 15 * box && direction == 'right')snake[0].x = 0
    if(snake[0].x < 0 && direction == 'left') snake[0]. x = 16 * box
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box

    criarBackground()
    criarCobra()
    desenharComida()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == 'right') snakeX += box
    if(direction == 'left') snakeX -= box
    if(direction == 'up') snakeY -= box
    if(direction == 'down') snakeY += box

    snake.pop()

    let novaCabeca = {
        x: snakeX,
        y: snakeY
    } 
    // adiciona o elemento no início do array
    snake.unshift(novaCabeca)
}

let jogo = setInterval(iniciarJogo, 100)