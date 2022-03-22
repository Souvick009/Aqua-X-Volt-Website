
// JavaScript code
function search_command() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('col-md-12');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}
function mod() {
    let input = document.getElementsByClassName('loc')
    let x = document.getElementsByClassName('moderation');
    let y = document.getElementsByClassName("info")
    let z = document.getElementsByClassName("utility")
    let f = document.getElementsByClassName("fun")
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none"
    }
    for (i = 0; i < f.length; i++) {
        f[i].style.display = "none"
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none"
    }
}
function info() {
    let input = document.getElementsByClassName('loc')
    let x = document.getElementsByClassName('moderation');
    let y = document.getElementsByClassName("info")
    let z = document.getElementsByClassName("utility")
    let f = document.getElementsByClassName("fun")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    for (i = 0; i < f.length; i++) {
        f[i].style.display = "none"
    }
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}
function fun() {
    let input = document.getElementsByClassName('loc')
    let x = document.getElementsByClassName('moderation');
    let y = document.getElementsByClassName("info")
    let z = document.getElementsByClassName("utility")
    let f = document.getElementsByClassName("fun")
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none"
    }
    for (i = 0; i < f.length; i++) {
        f[i].style.display = "block"
    }
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
function util() {
    let input = document.getElementsByClassName('loc')
    let x = document.getElementsByClassName('moderation');
    let y = document.getElementsByClassName("info")
    let z = document.getElementsByClassName("utility")
    let f = document.getElementsByClassName("fun")
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none"
    }
    for (i = 0; i < f.length; i++) {
        f[i].style.display = "none"
    }
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "block";
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
