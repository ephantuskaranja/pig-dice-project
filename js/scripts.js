var randomNumber;
var randomNumber2;
var totalscore1=0;
var totalscore2=0;
// var winnerscore=
//Business Logic
function roll1() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
};
function roll2() {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    return randomNumber2;
};
function testdice(){
    if (randomNumber >1){
        totalscore1 +=randomNumber;
        
    }
    else{
        totalscore1=0; 
        alert("You Rolled a 1!");   
    }
};
function testdice2(){
    if (randomNumber2 >1){
        totalscore2 +=randomNumber2;
        
    }
    else{
        totalscore2=0;
        alert("You Rolled a 1!");  
    }
};
// function winnerTest(){
//     if (totalscore1=>parse)
// }
function switcher(){

}



//user interface
$(document).ready(function (event) {
    $("#roll1").click(function () {
        roll1();
        $(".dicescore1").text(randomNumber);
        testdice();
        $(".currentscore1").text(totalscore1);

    });
    $("#rolldice2").click(function (){
        roll2();
        $(".dicescore2").text(randomNumber2);
        testdice2();
        $(".currentscore2").text(totalscore2);
    });
    



});


