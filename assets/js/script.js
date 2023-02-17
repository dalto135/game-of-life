let squares = document.querySelector("section").querySelectorAll("button");
let buttons = document.querySelectorAll("button");

function be() {
    squares.forEach(square => {

        let location = square.getAttribute("data-coord");
        let locationArray = location.split(',');
        let locationNumberArray = [Number(locationArray[0]), Number(locationArray[1])]
        let adjacent = [];

        let adjacentArray = [
            [-1,-1],
            [0,-1],
            [1,-1],
            [-1,0],
            [1,0],
            [-1,1],
            [0,1],
            [1,1]
        ];

        adjacentArray.forEach(coord => {
            if (document.querySelector('[data-coord="' + (locationNumberArray[0] + coord[0]).toString() + "," + (locationNumberArray[1] + coord[1]).toString() + '"]')) {
                adjacent.push((locationNumberArray[0] + coord[0]).toString() + "," + (locationNumberArray[1] + coord[1]).toString());
            }
        })

        count = 0;
        adjacent.forEach(neighbor => {
            let neighborButton = document.querySelector('[data-coord="' + neighbor + '"]');
            if (neighborButton.getAttribute("id")) {
                count++;
            }
        })

        // Alive
        if (square.getAttribute("id")) {
            if (count == 2 || count == 3) {
                square.setAttribute("data-next", "born");
            }
        }
        // Dead
        else {
            // Original game of life is (count == 2 || count == 3) when alive, (count == 3) when dead
            if (count == 2 || count == 3) {
                square.setAttribute("data-next", "born");
            }
        }
    });

    squares.forEach(square => {
        if (square.getAttribute("data-next")) {
            square.setAttribute("id", "alive");
            square.removeAttribute("data-next");
        }
        else {
            square.removeAttribute("id");
        }
    });
}

// Toggle color of grid squares
squares.forEach(square => {
    function cross() {
        if (square.getAttribute("id")) {
            square.removeAttribute("id");
        }
        else {
            square.setAttribute("id", "alive");
        }
    }

    square.addEventListener("click", cross);
});

// Clear the grid
let clear = document.querySelector(".clear");

function clearSquares() {
    squares.forEach(square => {
        square.removeAttribute("id");
    })
}

clear.addEventListener("click", clearSquares);

// Toggle color of "Be" button
let button = document.querySelector(".be");

function toggle() {
    if (button.getAttribute("id")) {
        button.removeAttribute("id");
    }
    else {
        button.setAttribute("id", "alive");
    }
}

button.addEventListener("click", toggle);

// Run the game
let game;
function start() {
    if (button.getAttribute("id")) {
        game = setInterval(() => {
            be();
        }, 10000);
    }
    else {
        clearInterval(game);
    }
}

button.addEventListener("click", start);