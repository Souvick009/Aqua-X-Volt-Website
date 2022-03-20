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
}