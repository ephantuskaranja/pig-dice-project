var randomNumber;
var randomNumber2;
var totalscore1=0;
var totalscore2=0;
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
    $("#roll1").click(function () {
        roll1();
        //alert(randomNumber)
        $(".dicescore1").text(randomNumber);
        totalscore1 +=randomNumber;
        //alert(totalscore1);
        $(".currentscore1").text(totalscore1);

    });
    $("#rolldice2").click(function (){
        roll2();
        //alert(randomNumber2)
        $(".dicescore2").text(randomNumber2);
        totalscore2 +=randomNumber2;
        $(".currentscore2").text(totalscore2);
    });
    //print dice roll to dice score



});


