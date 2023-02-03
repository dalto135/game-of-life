let squares = document.querySelector("section").querySelectorAll("button");

function be() {
    squares.forEach(square => {

        let location = square.getAttribute("class");
        let locationArray = location.split(',');
        let locationNumberArray = [Number(locationArray[0]), Number(locationArray[1])]
        let adjacent = [];

        if (locationNumberArray[0] - 1 >= 0) {
            adjacent.push((locationNumberArray[0] - 1).toString() + ',' + (locationNumberArray[1]).toString());

            if (locationNumberArray[1] - 1 >= 0) {
                adjacent.push((locationNumberArray[0] - 1).toString() + ',' + (locationNumberArray[1] - 1).toString());
                adjacent.push((locationNumberArray[0]).toString() + ',' + (locationNumberArray[1] - 1).toString());
            }
            if (locationNumberArray[1] + 1 <= 99) {
                adjacent.push((locationNumberArray[0] - 1).toString() + ',' + (locationNumberArray[1] + 1).toString());
                adjacent.push((locationNumberArray[0]).toString() + ',' + (locationNumberArray[1] + 1).toString());
            }
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
            console.log(neighbor);
            let neighborButton = document.querySelector('.' + neighbor);
            if (neighborButton.getAttribute("id")) {
                count++;
            }
        })

        if (count == 3) {
            square.setAttribute("id", "alive");
        }
        else {
            square.removeAttribute("id");
        }

        // if (square = squares[150]) {
        //     console.log('LOCATION');
        //     console.log(location);
        //     console.log('ADJACENT');
        //     console.log(adjacent);
        // }
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
    }, 250);
}

button.addEventListener("click", start);