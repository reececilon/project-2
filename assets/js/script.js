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
 * selects rock move for player and changes image accordingly
 */
function rockMove() {
    document.getElementById("player-move").src = "assets/images/rock.png";
}

/**
 * selects paper move for player and changes image accordingly
 */
function paperMove() {
    document.getElementById("player-move").src = "assets/images/paper.png";
}

/**
 * selects scizzors move for player and changes image accordingly
 */
function scizzorsMove() {
    document.getElementById("player-move").src = "assets/images/scizzors.png";
}

/**
 * selects lizard move for player and changes image accordingly
 */
function lizardMove() {
    document.getElementById("player-move").src = "assets/images/lizard.png";
}

/**
 * selects spock move for player and changes image accordingly
 */
function spockMove() {
    document.getElementById("player-move").src = "assets/images/spock.png";
}