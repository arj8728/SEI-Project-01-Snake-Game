document.addEventListener('DOMContentLoaded', () =>{

  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const snake = [3,2,1,0]

  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('DIV')
    squares.push(square)
    grid.appendChild(square)
  }

  function drawSnake() {
    snake.forEach(index => squares[index].classList.add('snake'))
  }

  function eraseSnake() {
    snake.forEach(index => squares[index].classList.remove('snake'))
  }

  function moveSnake() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + width)
    drawSnake()
  }

  drawSnake()

  setInterval(moveSnake, 1000)

})
