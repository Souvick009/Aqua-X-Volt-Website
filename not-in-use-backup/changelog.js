
function dropdown() {
    let input = document.getElementsByClassName('butn')
    let input_2 = document.getElementsByClassName('butn-2')
    let x = document.getElementsByClassName('show');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
    for (i = 0; i < input.length; i++) {
        input[i].style.display = "none"
    }
    for (i = 0; i < input_2.length; i++) {
        input_2[i].style.display = "block"
    }
}
function dropup() {
    let input = document.getElementsByClassName('butn')
    let input_2 = document.getElementsByClassName('butn-2')
    let x = document.getElementsByClassName('show');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    for (i = 0; i < input.length; i++) {
        input[i].style.display = "block"
    }
    for (i = 0; i < input_2.length; i++) {
        input_2[i].style.display = "none"
    }
}
