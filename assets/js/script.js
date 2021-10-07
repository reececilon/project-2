/**
 * When Dom is loaded, event listeners are added to buttons which run moveSelector function.
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let moveType = this.getAttribute("data-type");
            
            if (moveType === "rock") {
                rockMove();
                compMove();
            } else if (moveType === "paper") {
                paperMove();
            } else if (moveType === "scizzors") {
                scizzorsMove();
            } else if (moveType === "lizard") {
                lizardMove();
            } else if (moveType === "spock") {
                spockMove();
            } else {
                alert("Unknown moveType! Aborting!")
            }

        });
    }
});

let choices = [
    {
    id: 1,
    name: "rock",
    wins: [3, 5]
    },
    {
    id: 2,
    name: "paper",
    wins: [1, 4]
    },
    {
    id: 3,
    name: "scizzors",
    wins: [2, 5]
    },
    {
    id: 4,
    name: "spock",
    wins: [1, 3]
    },
    {
    id: 5,
    name: "lizard",
    wins: [2, 4]
    }
];

/**
 * Changes the comp move based on a random number and adds the corresponding class
 */
function compMove() {
    let cMove = Math.floor(Math.random()*4);

    if (cMove === 0) {
        document.getElementById("comp-move").src = "assets/images/rock.png";
        document.getElementById("comp-move").setAttribute('class', 'rock');
    } else if (cMove === 1) {
        document.getElementById("comp-move").src = "assets/images/paper.png";
        document.getElementById("comp-move").setAttribute('class', 'paper');
    } else if (cMove === 2) {
        document.getElementById("comp-move").src = "assets/images/scizzors.png";
        document.getElementById("comp-move").setAttribute('class', 'scizzors');
    } else if (cMove === 3) {
        document.getElementById("comp-move").src = "assets/images/lizard.png";
        document.getElementById("comp-move").setAttribute('class', 'lizard');
    } else if (cMove === 4) {
        document.getElementById("comp-move").src = "assets/images/spock.png";
        document.getElementById("comp-move").setAttribute('class', 'spock');
    } else {
        alert("something wrong");
    }
}

/**
 * selects rock move for player and changes image accordingly
 */
function rockMove() {
    document.getElementById("player-move").src = "assets/images/rock.png";
    document.getElementById("player-move").setAttribute('class', 'rock');
    moveCompare();
}

/**
 * selects paper move for player and changes image accordingly
 */
function paperMove() {
    document.getElementById("player-move").src = "assets/images/paper.png";
    document.getElementById("player-move").setAttribute('class', 'paper');
    moveCompare();
}

/**
 * selects scizzors move for player and changes image accordingly
 */
function scizzorsMove() {
    document.getElementById("player-move").src = "assets/images/scizzors.png";
    document.getElementById("player-move").setAttribute('class', 'scizzors');
    moveCompare();
}

/**
 * selects lizard move for player and changes image accordingly
 */
function lizardMove() {
    document.getElementById("player-move").src = "assets/images/lizard.png";
    document.getElementById("player-move").setAttribute('class', 'lizard');
    moveCompare();
}

/**
 * selects spock move for player and changes image accordingly
 */
function spockMove() {
    document.getElementById("player-move").src = "assets/images/spock.png";
    document.getElementById("player-move").setAttribute('class', 'spock');
    moveCompare();
}



function moveCompare() {
    let pMove = document.getElementById("player-move").getAttribute("class"); 
    if ( pMove === "rock") {
        let pChoice = choices[0];
        console.log(pChoice);
    } else if (pMove === "paper") {
        let pChoice = choices[1];
        console.log(pChoice);
    } else if (pMove === "scizzors") {
        let pChoice = choices[2];
        console.log(pChoice);
    } else if (pMove === "lizard") {
        let pChoice = choices[0];
        console.log(pChoice);
    } else if (pMove === "spock") {
        let pChoice = choices[3];
        console.log(pChoice);
    } else {
        alert("error!");
    }
}