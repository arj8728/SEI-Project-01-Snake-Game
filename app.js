document.addEventListener('DOMContentLoaded', () =>{

  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'
  const scoreDisplay = document.querySelector('.score')
  let score = 0
  let randomSquare = 0

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

  function apple() {
    randomSquare = squares[Math.floor(Math.random() * squares.length)]
    randomSquare.classList.add('apple')
    console.log('randomSquare')
  }

  function moveSnake() {
    if (snake[0] % width === 0 && direction === 'left' ||
        snake[0] % width === width -1  && direction === 'right' ||
        snake[0] - width < 0  && direction === 'up' ||
        snake[0] >= width * (width - 1 )  && direction === 'down') {
      return false
    }
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

    if (squares[snake[0]].classList.contains('apple')) {
      score += 1
      randomSquare.classList.remove('apple')
      //window.prompt('test is working')
      scoreDisplay.innerText = score
      apple()
    } else return null
  }
  drawSnake()

  setInterval(moveSnake, 100)

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
        break
      case 38: direction = 'up'
        break
      case 39: direction= 'right'
        break
      case 40: direction= 'down'
        break
    }

  })

  apple()


// dom
})
