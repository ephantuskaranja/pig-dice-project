var randomNumber;
var randomNumber2;
var totalscore1 = 0;
var totalscore2 = 0;
var inputtedwinnerscore;
//Business Logic
function roll1() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
};
function roll2() {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    return randomNumber2;
};
function testdice() {
    if (randomNumber > 1) {
        totalscore1 += randomNumber;

    }
    else {
        totalscore1 = 0;
        alert("You Rolled a 1!");
    }
};
function testdice2() {
    if (randomNumber2 > 1) {
        totalscore2 += randomNumber2;

    }
    else {
        totalscore2 = 0;
        alert("You Rolled a 1!");
    }
};
function winnerTester() {
    if (inputtedwinnerscore <= totalscore1) {
        alert("Player1 wins");
    }
    else if (inputtedwinnerscore <= totalscore2) {
        alert("Player2 wins");
    }
};

//user interface
$(document).ready(function (event) {
    $("#submit").click(function () {
        var inputtedPlayer1Name = $("input#player1name").val();
        var inputtedPlayer2Name = $("input#player2name").val();
        $(".player1").append("player1:" + inputtedPlayer1Name);
        $(".player2").append("player2:" + inputtedPlayer2Name);
        $(".setscore").show();

    });
    $("#setscore").click(function () {
        inputtedwinnerscore = $("input#winner").val();
        $(".setscore").hide();
    });

    $("#roll1").click(function () {
        roll1();
        // $(".results").show();
        $(".dicescore1").text(randomNumber);
        testdice();
        $(".currentscore1").text(totalscore1);
        winnerTester();

    });
    $("#rolldice2").click(function () {
        roll2();
        $(".dicescore2").text(randomNumber2);
        testdice2();
        $(".currentscore2").text(totalscore2);
        winnerTester();
    });
    $("#newgame").click(function () {
        location.reload();
    });
    $("#hold1").click(function(){
        alert("Turn for player 2");
    });
    $("#hold2").click(function(){
        alert("Turn for player 1");
    });
});


