$(document).ready(function () {
    var random = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text(random);

    //$(document).ready(function () {
    //  var wins = Math.floor(Math.wins() * 11) + 1;
    // $("#numberWins").text(random);
})
// a random number is selected at the start of the game.

$('#randomNumber').text(Random);
// Appending random numbers to the randomNumber in html//

var num1 = Math.floor(Math.random() * 11 + 1)
var num2 = Math.floor(Math.random() * 11 + 1)
var num3 = Math.floor(Math.random() * 11 + 1)
var num4 = Math.floor(Math.random() * 11 + 1)
//Setting up random number for each crystal between 1 - 12//

var userTotal = 0;
var wins = 0;
var Losses = 0;
var Random = 0;
var loser = 0;
var ohBleh = '';
var OhYeah = '';

//Declaring the variables
$('#numberWins').text(wins);
$('#numberLosses').text(Losses);
//Game reset
function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
}
//wins added to UserTotal
function OhYeah() {
    alert("You won!");
    wins++;
    $("numberWins").text(wins);
    reset(0);
}
//losses added to UserTotal
function ohBleh() {
    alert("You Lose!");
    Losses++;
    $("numberLosses").text(Losses);
    reset(0);
}
//sets up clicks for cyrstals
$('#one').on('click', function () {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //conditions set for wins&losses
    if (userTotal == Random) {
        OhYeah();
    }
    else if (userTotal > Random) {
        loser();
    }
})
$('#two').on('click', function () {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //conditions set for wins&losses
    if (userTotal == Random) {
        OhYeah();
    }
    else if (userTotal > Random) {
        loser();
    }
})
$('#three').on('click', function () {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //conditions set for wins&losses
    if (userTotal == Random) {
        OhYeah();
    }
    else if (userTotal > Random) {
        loser();
    }
})
$('#four').on('click', function () {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //conditions set for wins&losses
    if (userTotal == Random) {
        OhYeah();
    }
    else if (userTotal > Random) {
        loser();
    }
});









