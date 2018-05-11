var randomNumber;
var randomNumber2;
//Business Logic
function roll1() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
};
function roll2() {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    return randomNumber2;
};




//user interface
$(document).ready(function (event) {
    //event.preventDefault();
    $("#roll1").click(function () {
        roll1();
        alert(randomNumber)
    });
    $("#rolldice2").click(function (){
        roll2();
        alert(randomNumber2)
    });
    //print dice roll to dice score

});


