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
        $(".roller1").css("color", "");
        $(".roller2").css("color", "green");
        $("#roll1").hide();
        $("#rolldice2").show();
    }
};
function testdice2() {
    if (randomNumber2 > 1) {
        totalscore2 += randomNumber2;

    }
    else {
        totalscore2 = 0;
        alert("You Rolled a 1!");
        $(".roller2").css("color", "");
        $(".roller1").css("color", "green");
        $("#rolldice2").hide();
        $("#roll1").show();
    }
};
function winnerTester() {
    if (inputtedwinnerscore <= totalscore1) {
        alert(inputtedPlayer1Name + "wins");
    }
    else if (inputtedwinnerscore <= totalscore2) {
        alert(inputtedPlayer2Name + "wins!!");
    }
};

//user interface
$(document).ready(function (event) {
    $(".roller1").hide();
    $(".roller2").hide();
    $("#submit").click(function () {
        var inputtedPlayer1Name = $("input#player1name").val();
        var inputtedPlayer2Name = $("input#player2name").val();
        $(".player1").append("PLAYER1:" + inputtedPlayer1Name);
        $(".player2").append("PLAYER2:" + inputtedPlayer2Name);
        $(".rowplayer").hide();

    });
    $("#setscore").click(function () {
        inputtedwinnerscore = $("input#winner").val();
        $(".setscore").show();
        $(".roller1").show();
        $(".roller2").show();
        $(".roller1").css("color", "green");
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
        $("#rolldice2").show();
        $(".roller2").css("color", "green");
        $(".roller1").css("color", "");
    });
    $("#hold2").click(function(){
        alert("Turn for player 1");
        $("#roll1").show();
        $(".roller1").css("color", "green");
        $(".roller2").css("color", "");
    });
});


