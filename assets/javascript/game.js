var random = Math.floor(Math.random() * 101) + 19;
$("#randomNumber").text(random);


//$(document).ready(function () {
//  var wins = Math.floor(Math.wins() * 11) + 1;
// $("#numberWins").text(random);

// a random number is selected at the start of the game.

// Appending random numbers to the randomNumber in html//

var num1 = Math.floor(Math.random() * 11 + 1)
var num2 = Math.floor(Math.random() * 11 + 1)
var num3 = Math.floor(Math.random() * 11 + 1)
var num4 = Math.floor(Math.random() * 11 + 1)
//Setting up random number for each crystal between 1 - 12//

var userTotal = 0;
var wins = 0;
var Losses = 0;
var Counter = 0;

//Declaring the variables
$('#numberWins').text(wins);
$('#numberLosses').text(Losses);
$("#userScore").text("userScore");
//Game reset
function reset() {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random)
    $('#randomNumber').text(random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
}


//wins added to UserTotal
function OhYeah() {
    $("#numberWins").text(wins);
    alert("You won!");
    reset();
}
//losses added to UserTotal
function ohBleh() {
    $("#numberLosses").text(Losses);
    alert("You Lose!");
    reset();
}
//sets up clicks for cyrstals
$('#one').on('click', function () {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //conditions set for wins&losses
    checkscore();
})
$('#two').on('click', function () {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //conditions set for wins&losses
    checkscore();
})
$('#three').on('click', function () {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //conditions set for wins&losses
    checkscore();
})
$('#four').on('click', function () {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //conditions set for wins&losses
    checkscore();
});

function checkscore() {
    console.log(userTotal, random)
    if (userTotal < random) {
        return;
    } else if (userTotal === random) {
        $('#numberWins').text(wins);
        OhYeah();
        wins++;
    } else if (userTotal > random) {
        $('#numberLosses').text(Losses);
        ohBleh();
        Losses++;
    }
}