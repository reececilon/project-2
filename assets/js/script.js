/**
 * const used for the DOM
 */
const buttons = document.getElementsByTagName("button");

/**
 * Adding event listeners to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let moveType = this.getAttribute("data-type");
        if (moveType === "rock") {
            rockMove();
            compMove();
        } else if (moveType === "paper") {
            paperMove();
            compMove();
        } else if (moveType === "scizzors") {
            scizzorsMove();
            compMove();
        } else if (moveType === "lizard") {
            lizardMove();
            compMove();
        } else if (moveType === "spock") {
            spockMove();
            compMove();
        } else if (moveType === "reset") {
            reset();
        }
    });
}

/**
 * Resets the score board and the player and computer moves
 */
function reset() {
    
    document.getElementById("comp-move").src = "assets/images/rock-spock.webp";
    document.getElementById("comp-move").setAttribute('class', 'match');

    document.getElementById("player-move").src = "assets/images/rock-spock.webp";
    document.getElementById("player-move").setAttribute('class', 'match');

    document.getElementById("p-score").innerText = 0;
    document.getElementById("c-score").innerText = 0;
}

/**
 * Changes the comp move based on a random number and adds the corresponding class
 */
function compMove() {
    let cMoveRandom = Math.floor(Math.random()*5);

    if (cMoveRandom === 0) {
        document.getElementById("comp-move").src = "assets/images/rock.png";
        document.getElementById("comp-move").setAttribute('class', 'rock');
    } else if (cMoveRandom === 1) {
        document.getElementById("comp-move").src = "assets/images/paper.png";
        document.getElementById("comp-move").setAttribute('class', 'paper');
    } else if (cMoveRandom === 2) {
        document.getElementById("comp-move").src = "assets/images/scizzors.png";
        document.getElementById("comp-move").setAttribute('class', 'scizzors');
    } else if (cMoveRandom === 3) {
        document.getElementById("comp-move").src = "assets/images/lizard.png";
        document.getElementById("comp-move").setAttribute('class', 'lizard');
    } else if (cMoveRandom === 4) {
        document.getElementById("comp-move").src = "assets/images/spock.png";
        document.getElementById("comp-move").setAttribute('class', 'spock');
    } else {
        alert("Unknown cMoveRandom! Restarting...");
        reset();
    }

    moveCompare();
}

/**
 * selects rock move for player and changes image accordingly
 */
function rockMove() {
    document.getElementById("player-move").src = "assets/images/rock.png";
    document.getElementById("player-move").setAttribute('class', 'rock');
}

/**
 * selects paper move for player and changes image accordingly
 */
function paperMove() {
    document.getElementById("player-move").src = "assets/images/paper.png";
    document.getElementById("player-move").setAttribute('class', 'paper');
}

/**
 * selects scizzors move for player and changes image accordingly
 */
function scizzorsMove() {
    document.getElementById("player-move").src = "assets/images/scizzors.png";
    document.getElementById("player-move").setAttribute('class', 'scizzors');
}

/**
 * selects lizard move for player and changes image accordingly
 */
function lizardMove() {
    document.getElementById("player-move").src = "assets/images/lizard.png";
    document.getElementById("player-move").setAttribute('class', 'lizard');
}

/**
 * selects spock move for player and changes image accordingly
 */
function spockMove() {
    document.getElementById("player-move").src = "assets/images/spock.png";
    document.getElementById("player-move").setAttribute('class', 'spock');
}


/**
 * Compares the player's and computers moves
 */
function moveCompare() {
    let pMove = document.getElementById("player-move").getAttribute("class"); 
    let cMove = document.getElementById("comp-move").getAttribute("class");
   
    if (pMove !== cMove) {
        if (pMove === "rock") {
            if (cMove === "scizzors" || cMove === "lizard") {
                winScore();
            } else {
                loseScore();
            }
        } else if (pMove === "paper") {
            if (cMove === "rock" || cMove === "spock") {
                winScore();
            } else {
                loseScore();
            }
        } else if (pMove === "scizzors") {
            if (cMove === "paper" || cMove === "lizard") {
                winScore();
            } else {
                loseScore();
            }
        } else if (pMove === "lizard") {
            if (cMove === "paper" || cMove === "spock") {
                winScore();
            } else {
                loseScore();
            }
        } else if (pMove === "spock") {
            if (cMove === "scizzors" || cMove === "rock") {
                winScore();
            } else {
                loseScore();
            }
        } else {
            alert("Unknown pMove! Restarting...");
            reset();
        }
    } else {
        drawMark();
    }
}

/**
 * Counts the players wins and shows popup for win
 */
function winScore() {
    let pScore = parseInt(document.getElementById("p-score").innerText);
    pScore++;
    document.getElementById("p-score").innerText = pScore;
    setTimeout(function(){ swal({
        title: "win",
        icon: "success",
        button: false,
        timer: 1500,
      }); }, 200);
}

/**
 * Counts the computer's wins and shows popup for player losing
 */
function loseScore() {
    let cScore = parseInt(document.getElementById("c-score").innerText);
    cScore++;
    document.getElementById("c-score").innerText = cScore;
    setTimeout(function(){ swal({
        title: "lose",
        icon: "error",
        button: false,
        timer: 1500,
      }); }, 200);
}

/**
 * Shows a popup notification for when player and computer draw
 */
function drawMark() {
    setTimeout(function(){ swal({
        title: "draw",
        icon: "warning",
        button: false,
        timer: 1500,
      }); }, 200);
}