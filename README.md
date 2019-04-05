
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
1. Open the `index.html` in your browser of choice

## Overview

![](https://user-images.githubusercontent.com/43292507/55616000-bc6dec00-5788-11e9-9310-2ae613f402c6.png)

Link to my project:
_https://arj8728.github.io/project-01/_

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

In order to build this game I pseudocoded the game before I started. This helped me to envision the individual steps of the game. I started by creating the html, css and js files and worked on creating the game grid.

After creation of the grid I worked on creating the basic logic of drawing the mario-snake on the grid, erasing the mario-snake and moving the mario-snake. This was now movng automatically.

Then I got the mario-snake to move on response to the directional arrows. Then I worked out how to move it to the right on game startup. After this I boxed in the snake so that it could not move off the grid. I made a working score count that increased on the mario-snake eating the coins. The next step was to get the mario-snake to get bigger as it ate the coins. After this I added a mario background, I did not want to confuse the user so I made this background more transparent.

![](https://user-images.githubusercontent.com/43292507/55618493-93e8f080-578e-11e9-8fc2-5d90f5105e97.png)

I then created the screen reset when the mario-snake hit the wall and its own tail. At this point I had reached minimum viable product (mvp) and I had to then fix any bugs and finish the styling.

### Challenges

Upon reaching mvp I had to fix the bugs. The most challenging bug was to generate the coin in a random place after mario-snake had eaten it. This was challenging because I had to find a way so that the coin did not get placed inside the mario-snake body. I had to look in the create coin function and modify it so that while the random divs were being generated they couldn't spawn on the mario-snake divs that contained the body. This allowed me to generate a completely random coin after mario-snake consumed it.

### Wins
I had a lot of wins on this project but first I was most happy with getting the snake to move in response to directional arrow. Whilst this was relatively straightforward it helped to pave the way for me to complete the other features of the snake game and improve my confidence with using JavaScript.

## Future features
I would like to make it more responsive, add a high score feature and also a multiplayer mode. If I had more time I would like to actually add a Mario level into the game as a bonus reward for the player getting a high score.
