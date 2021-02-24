var suite = 0
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;

function clearbtn() {
    let myElements = document.getElementsByClassName("bookbtn");
    if (suite == 600) {
        myElements[0].style.visibility = "hidden";
    }
    else if (suite == 350) {
        myElements[1].style.visibility = "hidden";
    }
    else if (suite == 200) {
        myElements[2].style.visibility = "hidden";
    }
}

function showbtn() {
    let myElements = document.getElementsByClassName("bookbtn");
    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.visibility = "visible";
    }
}

function booking(x) {
    document.getElementById("reservation").style.display = "block";
    suite = x
    document.getElementById("checkin").setAttribute("min", today);
    document.getElementById("checkout").setAttribute("min", today);
    clearbtn()
}

function closing() {
    document.getElementById("reservation").style.display = "none";
    document.getElementById("nights").value = ""
    document.getElementById("amount").value = ""
    document.getElementById("name").value = ""
    document.getElementById("tel").value = ""
    document.getElementById("mail").value = ""

    showbtn()
}

window.onclick = function (event) {
    if (event.target == document.getElementById("reservation")) {
        document.getElementById("reservation").style.display = "none";
        document.getElementById("nights").value = ""
        document.getElementById("amount").value = ""
        document.getElementById("name").value = ""
        document.getElementById("tel").value = ""
        document.getElementById("mail").value = ""
        showbtn()
    }
}

function totalnights() {
    var dayin = new Date(document.getElementById("checkin").value);
    var dayout = new Date(document.getElementById("checkout").value);
    var night = parseInt((dayout - dayin) / (24 * 3600 * 1000));
    document.getElementById("nights").value = night + " Night(s) Booked"
    document.getElementById("amount").value = "Cost - GH₵ " + night * suite + ".00"
}