$(document).ready(function () {
    //pseudo-code:
    //TO DO: set variables, function that shuffles random values, onclick functions, logic for wins/losses
    //display functions, run game function
    var randomNumber;
    var totalScore;
    var wins;
    var losses;

    var questionBlock0;
    var questionBlock1;
    var questionBlock2;
    var questionBlock3;


    function assignRandom() {
        questionBlock0 = Math.ceil(Math.random() * 9);
        questionBlock1 = Math.ceil(Math.random() * 9);
        questionBlock2 = Math.ceil(Math.random() * 9);
        questionBlock3 = Math.ceil(Math.random() * 9);
        console.log(questionBlock0, questionBlock1, questionBlock2, questionBlock3);
    }

    function displayStats() {
        randomNumber = Math.ceil(Math.random() * 100);
        $("#randNumber").html('Target Random Number: ' + randomNumber);
        $("#winsLosses").html("Wins: " + wins + "<br>" + "Losses: " + losses);
        $("#score").html(totalScore);
    }

    function winCheck() {
        if (totalScore === randomNumber) {
            wins++;
            $("#dub").html("Yahooo!");
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            $("#dub").html("WAAAAAAAAAAAAAAAHHHHH");
            reset();
        }
    }

    function reset(){
        totalScore = 0;
        displayStats();
        assignRandom();
    }


    $("#block-0").on("click", function () {
        totalScore += questionBlock0;
        $("#score").html(totalScore);
        winCheck();
    })

    $("#block-1").on("click", function () {
        totalScore += questionBlock1;
        $("#score").html(totalScore);
        winCheck();
    })

    $("#block-2").on("click", function () {
        totalScore += questionBlock2;
        $("#score").html(totalScore);
        winCheck();
    })

    $("#block-3").on("click", function () {
        totalScore += questionBlock3;
        $("#score").html(totalScore);
        winCheck();
    })


    function empezarjuego() {
        totalScore = 0;
        wins = 0;
        losses = 0;
        assignRandom();
        displayStats();
    }



    empezarjuego();





});