let squares = document.querySelector("section").querySelectorAll("button");

function be() {
    squares.forEach(square => {

        let location = square.getAttribute("data-coord");
        let locationArray = location.split(',');
        let locationNumberArray = [Number(locationArray[0]), Number(locationArray[1])]
        let adjacent = [];

        if (locationNumberArray[0] - 1 >= 0) {
            adjacent.push((locationNumberArray[0] - 1).toString() + ',' + (locationNumberArray[1]).toString());

            if (locationNumberArray[1] - 1 >= 0) {
                adjacent.push((locationNumberArray[0] - 1).toString() + ',' + (locationNumberArray[1] - 1).toString());
            }
            if (locationNumberArray[1] + 1 <= 99) {
                adjacent.push((locationNumberArray[0] - 1).toString() + ',' + (locationNumberArray[1] + 1).toString());
            }
        }

        if (locationNumberArray[1] - 1 >= 0) {
            adjacent.push((locationNumberArray[0]).toString() + ',' + (locationNumberArray[1] - 1).toString());
        }
        if (locationNumberArray[1] + 1 <= 99) {
            adjacent.push((locationNumberArray[0]).toString() + ',' + (locationNumberArray[1] + 1).toString());
        }

        if (locationNumberArray[0] + 1 <= 99) {
            adjacent.push((locationNumberArray[0] + 1).toString() + ',' + (locationNumberArray[1]).toString());

            if (locationNumberArray[1] - 1 >= 0) {
                adjacent.push((locationNumberArray[0] + 1).toString() + ',' + (locationNumberArray[1] - 1).toString());
            }
            if (locationNumberArray[1] + 1 <= 99) {
                adjacent.push((locationNumberArray[0] + 1).toString() + ',' + (locationNumberArray[1] + 1).toString());
            }
        }

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
        }
        else {
            square.removeAttribute("id");
        }
        square.removeAttribute("data-next");
    });
}

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
})

let button = document.querySelector("#be");

function start() {
    setInterval(() => {
        be();
    }, 10000);
}

button.addEventListener("click", start);