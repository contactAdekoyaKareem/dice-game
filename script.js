"use strict";

let rand,currentScore,activePlayer,currentPlayer0,currentPlayer1,scores,player0,player1,playing,score0,score1,die;
const init=function(){
    rand=0;
    currentScore=0;
    activePlayer=0;
    
    scores=[0,0];
    player0=document.querySelector(".player--0");
    player1=document.querySelector(".player--1");

    currentPlayer0=document.getElementById("current--0").textContent=0;
    currentPlayer1=document.getElementById("current--1").textContent=0;
    
    playing=true;

    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner")
    
    score0=document.getElementById("score--0").textContent=0;
    score1=document.getElementById("score--1").textContent=0;
    die=document.querySelector(".dice").classList.add("hidden");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
}

init();

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer === 0 ? 1 : 0;
    
    player0.classList.toggle("player--active");//if player 0 does not have the class add it but if it does remove it 
    player1.classList.toggle("player--active");//if player 1 does not have the class add it but if it does remove it 
}

document.querySelector(".btn--roll").addEventListener("click",function(){

    if(playing){
    rand=Math.trunc(Math.random()*6)+1;
    document.querySelector(".dice").classList.remove("hidden");
    document.querySelector(".dice").src=`dice-${rand}.png`;
   

    if(rand === 1){
        switchPlayer();
    }
    else{
        currentScore+=rand;
        
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
}
});

document.querySelector(".btn--hold").addEventListener("click",()=>{

    if(playing){
    
    
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer] >= 100){
        playing=false;
        scores[activePlayer]=0;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");//if player 0 does not have the class add it but if it does remove it 
         
    }
    else{
    switchPlayer();
    }
}
})

document.querySelector(".btn--new").addEventListener("click",init)

