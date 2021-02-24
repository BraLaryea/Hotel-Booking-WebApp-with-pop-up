// function mobileonly() {
//     var x = window.innerWidth
//     if (x > 400) {
//         alert("Sorry this Website if for Mobile devices only")
//         window.close()
//     }
// }

// mobileonly()

var suite = 0

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
    clearbtn()
}

function closing() {
    document.getElementById("reservation").style.display = "none";
    document.getElementById("nights").value = ""
    document.getElementById("amount").value = ""
    showbtn()
}

window.onclick = function (event) {
    if (event.target == document.getElementById("reservation")) {
        document.getElementById("reservation").style.display = "none";
        document.getElementById("nights").value = ""
        document.getElementById("amount").value = ""
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