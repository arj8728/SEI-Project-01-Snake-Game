
# Project 1: My Super Mario themed Snake JavaScript Game

### Timeframe
7 days

## Technologies used

* JavaScript (ES6)
* HTML5
* CSS
* git
* HTML5 audio

## Installation

1. Clone or download the repo
2. Open the `index.html` in your browser of choice

## Overview

![](https://user-images.githubusercontent.com/43292507/55616000-bc6dec00-5788-11e9-9310-2ae613f402c6.png)




Link to my project:
_https://arj8728.github.io/SEI-Project-01-Snake-Game/_

### Introduction

This is my version of the classic Snake game with a Super Mario theme. The background is a faded image of a Mario level. The snake is Mario who has to catch the coins to increase the score.

### Controls

* Use your cursor keys to move mario-snake: up, left, right, and down.
* You will need to click the play again button to restart.

### Game Instructions
1. Don't run the mario-snake into the wall, or his own tail: you will die.
![](https://user-images.githubusercontent.com/43292507/55616820-9a756900-578a-11e9-8d05-9c52f7d9931d.png)

2.  Get the coins to gain points.

3.  Higher scores levels will increase the speed mario-snake faster

## Process
_Describe the process of building the game. How did you get started? How did you manage your time? How would you do things next time?_

My aim was to create a simple and clean snake game inspired by the classic Super Mario design.

In order to build this game I pseudocoded the game before I started. This helped me to envision the individual steps of the game. I started by creating the HTML, CSS and JS files and worked on creating the game grid.

After creation of the grid I worked on creating the basic logic of drawing the mario-snake on the grid, erasing the mario-snake and moving the mario-snake. This was now moving automatically. Then I got the mario-snake to move on response to the directional arrows. After this I worked out how to set the snake to move automatically on starting the game.



A challenge I had was to box in the snake so that it would be erased as it hit the wall. I did this by making a moveSnake function that would erase the snake as it hit the wall

```javascript
function moveSnake() {
  console.log(snake)
  if (snake[0] % width === 0 && direction === 'left' ||
      snake[0] % width === width -1  && direction === 'right' ||
      snake[0] - width < 0  && direction === 'up' ||
      snake[0] >= width * (width - 1 )  && direction === 'down') {
    return gameOver()
  }
  eraseSnake()

  ```

  Then I got working on adding a working score count so that as the snake eats the apple and increases the score. I did this by creating a scoreDisplay constant with the score starting at 0

  ```JavaScript
  const scoreDisplay = document.querySelector('.score')
  let score = 0
  ```

I decided that if the snake position at 0 hits each apple the score will increment by one apple else the score will stay the same.
  ```JavaScript
  if (squares[snake[0]].classList.contains('apple')) {
    score ++
    //window.prompt('test is working')
    scoreDisplay.innerText = score
    snake.className= ''
  } else return null
}
drawSnake()
  ```

Later on I further refined this code by adding a classList.remove to get rid of the apple that the snake ate and add the score to a score display. Below I also added snake.unshift at position 0 so that the snake gets bigger in length as it eats an apple.

```javascript
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
```

 I created a function that kills the snake if it hits own tail.

```javascript
function killSnake() {
  if(snake.slice(1).includes(snake[0])) {
    return gameOver()
  }
}
```
I then created the screen reset when the mario-snake hit the wall and its own tail.
 At this point I had reached minimum viable product (mvp) and I had to then fix any bugs and finish the styling.

### Challenges

I had to get the snake to eat the apple and generate a new apple within the grid.
I did this by creating a function called apple and within this making a random index function that generates a randomly placed apple. Once the apple gets eaten by the snake the apple function fires and adds another apple in a random position. This function also adds the apple to the snake body as well increasing its length.

```javascript
function apple() {
  let randomIndex = Math.floor(Math.random() * squares.length)
  while(squares[randomIndex].classList.contains('snake')) {
    randomIndex = Math.floor(Math.random() * squares.length)
  }
  squares[randomIndex].classList.add('apple')
}
```


### Wins
I had a lot of wins on this project but first I was most happy with getting the snake to move in response to directional arrow. Whilst this was relatively straightforward it helped to pave the way for me to complete the other features of the snake game and improve my confidence with using JavaScript.

I enjoyed creating the audio that plays when the game is running as well as HTML5 audio was not something we had covered in class. I also made a game over tune to play as the snake died. Also adding in the parameters for when the snake dies was interesting. As seen below the reset button removes the snake, sets the new snake to a default starting position, with the snake automatically moving to the right, resets the score display to 0, removes and adds a new grid. This is essential as it allows the game to be played repeatedly with no delays.

```JavaScript
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
```


## Future features
I would like to make it more responsive, add a logged high score feature and also a multiplayer mode. If I had more time I would like to actually add a Mario level into the game as a bonus reward for the player getting a high score.
