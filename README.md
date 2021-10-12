# Rock to Spock
Rock to Spock is an interesting take on the original rock, paper scizzors game. In this game there are two additional moves called *lizard* and *spock*. This adds a new dynamic to the game, allowing for new winning combinations in the game. The game is played against a computer which randomly selects moves from the available options. This allows the game to be completely random, making it difficult for the user to predict patterns.

<img src="assets/images/responsive.png" alt="Image of Rock to Spock site on different screen sizes">

# Features

## Existing Features

- Header
    - Starting at the beginning of the page, the header includes the game title *Rock to Spock* and also the game logo.
    - The game logo shows a closed fist to represent the move of rock. 
    - The text colour is black up against a blue background for optimal contrast.  

<img src="assets/images/header.png" alt="Image of the Rock to Spock header and logo">

- Game Controls
    - This includes six buttons to select the moves of: rock, paper, scizzors, lizard and spock.
    - The buttons have the same colour scheme as the header, with blue text against a black background encircled by a blue border.
    - The buttons also rotate when the user hovers over them to indicate that they are clickable.
    - When the buttons are clicked, the game initiates and the images for the player and computer change from the rule image to the corresponding slected move.

<img src="assets/images/controls.png" alt="Image of the different moves that the player can select">

- Game Rules
    - Before the user selects a button, the starting image for the player and computer moves shows an image explaining the rules of the game, and which win agianst other moves.

<img src="assets/images/rules.png" alt="Image showing the rules of the game">

- Game Area
    - Once a move is selected by the user, the game is initiated and the player image is changed to their selected move.
    - Symultaneously and randomly the computer also selects a move to play and changes the corresponding image to match the selected move.

<img src="assets/images/moves.png" alt="Image of the game where player selects lizard and the computer selects paper">

- Score Board
    - After the player and computer selects their moves, they are compared and then the score board keeps track of the wins of the player and computer.
    - Whilst the score is recorded, a popup is initiated to inform the user whether they *win, lose or draw* against the computer.

<img src="assets/images/scores.png" alt="Image showing the scores of both the player and computer">

- Restart Button
    - The game also has a *Restart* button. The background turns blue and the colour of the text turns black when the user hovers over the button to indicate that it is different from the other buttons.
    - This button resets the game returning the player and the computer images to the starting image, showing the rules.
    - Also, resetting the score board back to zero for both the player and the computer.

<img src="assets/images/restart.png" alt="Image of the restart button">

## Future Feature to Implement

In the Future, I would like to make the move images for the player and computer to rotate before they change to the selected moves. This would represent how the original game is played, when the two players would say each move whilst bouncing their fists before deciding their move.

# Testing

- This site was tested on various different browsers, such as: Chrome, Firefox and Safari
- I confirm that the results are always correct
    - I have tested by playing on different devices such as Macbook, Mobile phone (Samsung), and also Ipad.
- I confirm that the header, controls, game area, score board are all legible and easy to read.
- I confirm that the colour scheme and fonts are easy to read and accessible by running the site through the Devtools lighthouse report generator.

<img src="assets/images/lighthouse.png" alt="Image showing the lighthouse report of the site">

- I confirm that the site is responsive on all devices and screen sizes. 
    - This was tested using the Chrome Devtools,
    - and also by testing the site on different devices.

## Bugs 
### Solved Bugs
- The Header, Score board text and game area text, for smaller screen sizes, was very small due using font-size in *%* units.
    - I solved this by using *rem* instead of *%*.
- On smaller screen sizes, the buttons would appear below on another, but were misaligned.
    - This was due to the buttons content width being too large for the buttons themselves on smaller devises.
    - I solved this by reducing the text of the buttons for smaller devices and changing the margins around each button.

## Validator Testing

- HTML
    - No errors were returned when running the site through the official [W3C HTML](https://validator.w3.org/nu/#textarea) validator
- CSS
    - No errors were returned when running the site through the [W3C CSS](https://jigsaw.w3.org/css-validator/validator) validator
- JS
    - No errors were returned when running the site through the JSHint [JSHint](https://jshint.com/) validator

## Unfixed Bugs
No unfixed bugs

# Deployment
- The site was deployed on GitHub Pages. The following steps demonstate how to deploy the site.
    - In the GitHub repository for the project, locate the settings tab,
    - From the menu left of this, select the pages tab,
    - Under the source section, select the main branch from the drop down menu and save,
    - A live link will then be provided for the website

The live link for the website is located here [Rock to Spock](https://reececilon.github.io/project-2/).

# Credits 
## Content
- The popups alerts on the site were taken by [SweetAlert](https://sweetalert.js.org/)
- The logo in the header was obtained from [FontAwesome](https://fontawesome.com/v5.15/icons/instagram?style=brands)

## Media
- The image for the game was taken from [UBuy](https://www.ubuy.co.in/search/index/view/product/B07D1CCBXG/s/rock-paper-scissors-lizard-spock-funny-nerd-tv-show-t-shirt/store/store/kk/dp?ref_p=dp-rp)