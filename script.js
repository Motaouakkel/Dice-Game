const SCORE_MAX=100;
const scorePlayer1 = document.getElementById("score1");
const scorePlayer2 = document.getElementById("score2");
const tempScorePlayer1 = document.getElementById("tempScorePlayer1");
const tempScorePlayer2 = document.getElementById("tempScorePlayer2");
const passeButton = document.getElementById("passeButton");

const lanceButton = document.getElementById("lanceButton");
const nouveauButton = document.getElementById("nouveauButton");
const dice = document.getElementById("imageDace");
const player1 = document.getElementById("Player1");
const player2 = document.getElementById("Player2");
var playerSelected;

function DiceNumber(){
    var diceNumber;
    diceNumber = Math.floor(Math.random()*6)+1;
    return diceNumber;
}

(function initialization(){ 
    player1.querySelector(".Attempts").innerHTML = 0;
    player1.querySelector(".score").innerHTML = 0;
    player2.querySelector(".Attempts").innerHTML = 0;
    player2.querySelector(".score").innerHTML = 0;
    dice.setAttribute("src","diceFaces/white.png");
    var playerNumber;
    playerNumber = Math.floor(Math.random()*2)+1;
    selectPlayer(playerNumber);
})();

function RandomSelectPlayer(){ 
    player1.querySelector(".Attempts").innerHTML = 0;
    player1.querySelector(".score").innerHTML = 0;
    player2.querySelector(".Attempts").innerHTML = 0;
    player2.querySelector(".score").innerHTML = 0;
    dice.setAttribute("src","diceFaces/white.png");
    document.querySelector(".container .BoxPlayer .winerbox").style.display="none";
    var playerNumber;
    playerNumber = Math.floor(Math.random()*2)+1;
    selectPlayer(playerNumber);
}

function selectPlayer(playerNumber){
    player1.style.backgroundColor = "white";
    document.querySelector(".container .Player1 div i").style.color = "black";
    player2.style.backgroundColor = "white";
    document.querySelector(".container .Player2 div i").style.color = "black";
    document.querySelector(`.container .Player${playerNumber} div i`).style.color = "green";
    document.getElementById(`Player${playerNumber}`).style.backgroundColor = "#f0f0f0";
    dice.setAttribute("src",`diceFaces/white.png`);
    scorePlayer1.innerHTML = 0;
    scorePlayer2.innerHTML = 0;
    if(playerNumber == 1) playerSelected = player1;
    else playerSelected = player2;
}





lanceButton.onclick = function(){
    let diceNumber = DiceNumber();
    dice.setAttribute("src",`diceFaces/${diceNumber}.png`);
   
    if(diceNumber != 1){
        var scor = parseInt(playerSelected.querySelector(".score").innerHTML, 10);
        playerSelected.querySelector(".score").innerHTML = scor + diceNumber;
        
    }
    else{
        playerSelected.querySelector(".score").innerHTML = 0;
        if(playerSelected == player1){
            selectPlayer(2);
        } 
        else{ 
            selectPlayer(1); 
        }
    }
    
}

passeButton.onclick = function(){
    var x = playerSelected.querySelector(".Attempts").innerHTML;
    var scor = parseInt(x,10);
    var tempScor = parseInt(playerSelected.querySelector(".score").innerHTML, 10);
    var ScoreTotal =  tempScor+scor;
    playerSelected.querySelector(".Attempts").innerHTML = ScoreTotal;
    playerSelected.querySelector(".score").innerHTML = 0;
    if(playerSelected == player1)selectPlayer(2);
    else selectPlayer(1); 
    
}




nouveauButton.onclick = RandomSelectPlayer;

setInterval(function(){ 
    var m = playerSelected.querySelector(".Attempts").innerHTML;
    if(m >= SCORE_MAX){
        playerSelected.querySelector(".winerbox").style.display = "list-item";
    }
 }, 100);

