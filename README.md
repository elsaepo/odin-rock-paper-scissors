# Rock Paper Scissors.

A Rock Paper Scissors web game, created with HTML, CSS & vanilla JavaScript.

Part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

Created by Carl Madsen, 2022.

**[Live page!](https://elsaepo.github.io/rock-paper-scissors/)**

## Functionality

* **Gameplay** - rock beats scissors, scissors beats paper, paper beats rock. First to five points wins!

## Contributions

* [Google Fonts](https://fonts.google.com/)
* Hand images from [Noun Project](https://thenounproject.com/)
* Chris Coyier from CSS-Tricks teaching me about [void element.offsetWidth](https://css-tricks.com/restart-css-animation/).

## Learning outcomes & challenges

* Greater understanding of using **placeholder divs** to display flavour text - and how to avoid resizing the game container when the flavour text wraps.
* I decided to flip the computer's hand animation with **transform:scaleX(-1)** so that the player and computer would "face off" like in an actual game. This presented some interesting challenges in the animations when combined with **transform:translateX()**, requiring some finicky animation timings to flip the hand at 1%, then translate across the x axis. I decided this workaround is better than duplicating reversed versions of the hand images.
* Understanding **void element.offsetWidth** and why it is neccessary (as far as I know) to reset certain CSS animations - it does this through DOM Reflow, which causes the browser to reprocess all of the DOM elements on the page. 
* The security issues behind **.innerHTML** and why **.textContent** with class additions or styling is a much better alternative
* The importance of **variety** - for such a simple game, I found adding lots of different falvour text for wins, draws and losses instrumental in increasing the enjoyment of the game.