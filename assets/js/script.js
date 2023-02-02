let squares = document.querySelectorAll("div");

function go() {
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
            let div = document.querySelector('.' + neighbor);
            if (div.getAttribute("id")) {
                count++;
            }
        })

        if (count == 3) {
            square.setAttribute("id", "on");
        }
        else {
            square.removeAttribute("id");
        }

        if (square = squares[150]) {
            console.log('LOCATION');
            console.log(location);
            console.log('ADJACENT');
            console.log(adjacent);
        }
    });
}

// setInterval(() => {
//     go()
// }, 250);

go();