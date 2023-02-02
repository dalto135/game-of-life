let squares = document.querySelector(".row").querySelectorAll("div");

function go() {
    squares.forEach(square => {
        if (square.getAttribute("id")) {
            square.removeAttribute("id");
        }
        else {
            square.setAttribute("id", "on");
        }
    });
}

// setInterval(() => {
//     go()
// }, 250);