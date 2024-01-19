let gameSeq=[];
let userSeq=[];
let hscore=0;

let btns=["yellow","red","purple","green"];
let btn=document.querySelector("btn");

let started=false;
let level=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

function Score(){
    if(hscore>level){
        
        h3.innerText=`Your Highest Score is ${hscore}`;
    }
}


document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game started");
    started=true;
    levelUp();
    Score();
  }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
   
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);

}

function checkAns(idx){ 
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b> ${level} </b> <br> Press any Key to Restart `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress() {
    let btn=this;
    console.log(this);
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);

 }

 function reset(){
    hscore=level;
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }