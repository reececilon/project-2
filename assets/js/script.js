var buttons = document.getElementsByTagName("button");
    
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
        } else {
            alert("Unknown moveType! Aborting!")
        }

    });
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
        alert("something wrong");
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



function moveCompare() {
    let pMove = document.getElementById("player-move").getAttribute("class"); 
    let cMove = document.getElementById("comp-move").getAttribute("class");
    
    if (pMove === "rock") {
        if (cMove === "rock") {
            setTimeout(function(){ alert("Draw"); }, 150);
        } else if (cMove === "paper") {
            loseScore()
        } else if (cMove === "scizzors") {
            winScore();
        } else if (cMove === "lizard") {
            winScore();
        } else if (cMove === "spock") {
            loseScore()
        }
    } else if (pMove === "paper") {
        if (cMove === "rock") {
            winScore();
        } else if (cMove === "paper") {
            setTimeout(function(){ alert("Draw"); }, 150);
        } else if (cMove === "scizzors") {
            loseScore()
        } else if (cMove === "lizard") {
            loseScore()
        } else if (cMove === "spock") {
            winScore();
        }
    } else if (pMove === "scizzors") {
        if (cMove === "rock") {
            loseScore()
        } else if (cMove === "paper") {
            winScore();
        } else if (cMove === "scizzors") {
            setTimeout(function(){ alert("Draw"); }, 150);
        } else if (cMove === "lizard") {
            winScore();
        } else if (cMove === "spock") {
            loseScore()
        }
    } else if (pMove === "lizard") {
        if (cMove === "rock") {
            loseScore()
        } else if (cMove === "paper") {
            winScore();
        } else if (cMove === "scizzors") {
            loseScore()
        } else if (cMove === "lizard") {
            setTimeout(function(){ alert("Draw"); }, 150);
        } else if (cMove === "spock") {
            winScore();
        }
    } else if (pMove === "spock") {
        if (cMove === "rock") {
            winScore();
        } else if (cMove === "paper") {
            loseScore()
        } else if (cMove === "scizzors") {
            winScore();
        } else if (cMove === "lizard") {
            loseScore()
        } else if (cMove === "spock") {
            setTimeout(function(){ alert("Draw"); }, 150);
        }
    }
}

/**
 * Counts the players wins
 */
function winScore() {
    let pScore = parseInt(document.getElementById("p-score").innerText);
    pScore++;
    document.getElementById("p-score").innerText = pScore;
    setTimeout(function(){ alert("win"); }, 150);
}

/**
 * Counts the computer's wins
 */
function loseScore() {
    let cScore = parseInt(document.getElementById("c-score").innerText);
    cScore++;
    document.getElementById("c-score").innerText = cScore;
    setTimeout(function(){ alert("lose"); }, 150);
}