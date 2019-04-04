document.addEventListener('DOMContentLoaded', () =>{

  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const mySound = document.querySelector('audio')
  let snake = [3,2,1,0]
  let direction = 'right'
  const scoreDisplay = document.querySelector('.score')
  let score = 0
  let randomIndex = 0
  let speedSnake = 400
  const resetBtn = document.querySelector('button')
  document.querySelector('.dead')
  let timer

  // create a grid
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('DIV')
    squares.push(square)
    grid.appendChild(square)
  }

  function drawSnake() {
    snake.forEach(index => squares[index].classList.add('snake'))
  }

  // when snake hits its own tail it is killed
  function killSnake() {
    if(snake.slice(1).includes(snake[0])) {
      return gameOver()
    }
  }

  function eraseSnake() {
    snake.forEach(index => squares[index].classList.remove('snake'))
  }

  function apple() {
    let randomIndex = Math.floor(Math.random() * squares.length)
    while(squares[randomIndex].classList.contains('snake')) {
      randomIndex = Math.floor(Math.random() * squares.length)
    }
    squares[randomIndex].classList.add('apple')
  }

  function gameOver() {
    console.log('gameOver')
    eraseSnake()
    grid.classList.remove('grid')
    grid.classList.add('dead')
    mySound.src = 'sounds/mariodeath.mp3'
    mySound.play()
    speedSnake = 400
  }

  function gameSound() {
    mySound.src = 'sounds/theme.mp3'
    mySound.play()
  }


  function moveSnake() {
    console.log(snake)
    if (snake[0] % width === 0 && direction === 'left' ||
        snake[0] % width === width -1  && direction === 'right' ||
        snake[0] - width < 0  && direction === 'up' ||
        snake[0] >= width * (width - 1 )  && direction === 'down') {
      return gameOver()
    }
    eraseSnake()

    switch(direction){
      case 'right': moveSnakeRight()
        break
      case 'left': moveSnakeLeft()
        break
      case 'up': moveSnakeUp()
        break
      case 'down': moveSnakeDown()
    }
    killSnake()

    if (squares[snake[0]].classList.contains('apple')) {
      score ++
      speedSnake -= 10
      console.log(speedSnake)
      squares[snake[0]].classList.remove('apple')
      snake.unshift(snake[0])
      scoreDisplay.innerText = score
      apple()
    }

    drawSnake()

    timer = setTimeout(moveSnake, speedSnake)
  }
  moveSnake()

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
    e.preventDefault()
    switch(e.keyCode) {
      case 37: if (direction !== 'right') direction = 'left'
        break
      case 38: if (direction !== 'down') direction = 'up'
        break
      case 39: if (direction !== 'left') direction= 'right'
        break
      case 40: if (direction !== 'up') direction= 'down'
        break
    }
  })

  resetBtn.addEventListener('click', () => {
    snake.forEach(index => squares[index].classList.remove('snake'))
    snake = [3,2,1,0]
    direction = 'right'
    clearTimeout(timer)
    grid.classList.remove('dead')
    grid.classList.add('grid')
    score = 0
    scoreDisplay.innerText = score
    drawSnake()
    moveSnake()
    mySound.src = 'sounds/theme.mp3'
    mySound.play()
  })

  gameSound()
  console.log(gameSound)

  apple()


})
