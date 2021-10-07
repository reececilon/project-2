/**
 * When Dom is loaded, event listeners are added to buttons which run moveSelector function.
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", moveSelector());
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

function moveSelector() {
    
    

}