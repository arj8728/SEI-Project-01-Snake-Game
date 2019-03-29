document.addEventListener('DOMContentLoaded', () =>{

  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'

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
    //snake.pop()
    //snake.unshift(snake[0] + 1)
    switch(direction){
      case 'right': moveSnakeRight()
        break
      case 'left': moveSnakeLeft()
        break
      case 'up': moveSnakeUp()
        break
      case 'down': moveSnakeDown()
    }
    drawSnake()
  }

  drawSnake()

  setInterval(moveSnake, 1000)

  function moveSnakeDown() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + width)
    drawSnake()
  }

  function moveSnakeUp() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] - width)
    drawSnake()
  }

  function moveSnakeLeft() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] - 1)
    drawSnake()
  }

  function moveSnakeRight() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + 1)
    drawSnake()
  }


  document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
      case 37: direction = 'left'
        {
          moveSnakeLeft()
        }
        break

      case 38: direction = 'up'
        {
          moveSnakeUp()
        }
        break

      case 39: direction= 'right'
        {
          moveSnakeRight()
        }
        break

      case 40: direction= 'down'
        {
          moveSnakeDown()
        }
        break
    }

  })







// dom
})
