function dropdown() {
    var element = document.body
    let sun = document.getElementsByClassName("sun")
    let moon = document.getElementsByClassName("moon")
    for (i = 0; i < sun.length; i++) {
        if (sun[i].style.display === "none") {
            sun[i].style.display = "block"
            for (i = 0; i < moon.length; i++) {
                moon[i].style.display = "none"
            }
        }
        else {
            sun[i].style.display = "none"
            moon[i].style.display = "block"
        }
        element.classList.toggle("light");
    }

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.onkeydown = function (e) {
        console.log(e.key)
        if (e.key == "F12") {
            console.log("working1")
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.key == 'I'.charCodeAt(0)) {
            console.log("working2")
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.key == 'C'.charCodeAt(0)) {
            console.log("working3")
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.key == 'J'.charCodeAt(0)) {
            console.log("working4")
            return false;
        }
        if (e.ctrlKey && e.key == 'U'.charCodeAt(0)) {
            console.log("working5")
            return false;
        }
    }
}