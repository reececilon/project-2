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
            alert("draw");
        } else if (cMove === "Paper") {
            alert("lose");
        } else if (cMove === "scizzors") {
            alert("win");
        } else if (cMove === "lizard") {
            alert("win");
        } else if (cMove === "spock") {
            alert("lose");
        }
    } else if (pMove === "paper") {
        if (cMove === "rock") {
            alert("win");
        } else if (cMove === "paper") {
            alert("draw");
        } else if (cMove === "scizzors") {
            alert("lose");
        } else if (cMove === "lizard") {
            alert("lose");
        } else if (cMove === "spock") {
            alert("win");
        }
    } else if (pMove === "scizzors") {
        if (cMove === "rock") {
                alert("lose");
        } else if (cMove === "paper") {
                alert("win");
        } else if (cMove === "scizzors") {
                alert("draw");
        } else if (cMove === "lizard") {
                alert("win");
        } else if (cMove === "spock") {
                alert("lose");
        }
    } else if (pMove === "lizard") {
        if (cMove === "rock") {
            alert("lose");
        } else if (cMove === "paper") {
            alert("win");
        } else if (cMove === "scizzors") {
            alert("lose");
        } else if (cMove === "lizard") {
            alert("draw");
        } else if (cMove === "spock") {
            alert("win");
        }
    } else if (pMove === "spock") {
        if (cMove === "rock") {
            alert("win");
        } else if (cMove === "paper") {
            alert("lose");
        } else if (cMove === "scizzors") {
            alert("win");
        } else if (cMove === "lizard") {
            alert("lose");
        } else if (cMove === "spock") {
            alert("draw");
        }
    }

}