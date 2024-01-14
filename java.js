var dice1 = Math.random() * 6;
dice1 = Math.floor(dice1) + 1;
var dice2 = Math.random() * 6;
dice2 = Math.floor(dice2) + 1;

var dice1Picture = "./Pictures/dice" + dice1 + ".png";
var dice2Picture = "./Pictures/dice" + dice2 + ".png";

document.querySelector(".player1 img").setAttribute("src", dice1Picture);
document.querySelector(".player2 img").setAttribute("src", dice2Picture);

if(dice1 > dice2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if(dice2 > dice1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else if (dice2 === dice1) {
    document.querySelector("h1").innerHTML = "Draw";
}