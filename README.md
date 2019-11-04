# Project Information: snake-invaders
This is a game that I am using to learn the use of classes, inheritance and an introduction to testing. 
I was able to practice using arrays to create items with different properties (e.g. A super class, then sub-classes each with their own health and damage parameters).

I created a button to randomly select an element from the screen and then apply damage to that item. And created different logic so that if the queen's health hit's 0 then all the rest do too.
The user can then reset the game to start again.  

After getting the logic working, I refactored the code and split my classes out into modules, importing them into my main JS file. 

When this was all working, I wrote some tests using jest to allow for automated testing of the game logic. 

## How to install
`git clone` the repository and then `yarn install`
this will ensure that you have any dev dependencies needed and be able to run the test package.

## Current state
The game is functioning and has taught me a lot about how to use classes and 

### Next steps
Using the JS to populate HTML as the elements are instantiated.

