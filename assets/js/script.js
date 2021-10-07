/**
 * When Dom is loaded, event listeners are added to buttons which run moveSelector function.
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let moveType = this.getAttribute("data-type");
            
            if (moveType === "rock") {
                alert("yay you chose rock");
            } else if (moveType === "paper") {
                alert("yay you chose paper");
            } else if (moveType === "scizzors") {
                alert("yay you chose scizzors");
            } else if (moveType === "Lizard") {
                alert("yay you chose lizard");
            } else if (moveType === "spock") {
                alert("yay you chose spock");
            } else {
                alert("Unknown moveType! Aborting!")
            }

        });
    }
});

/*let choices = [
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
];*/