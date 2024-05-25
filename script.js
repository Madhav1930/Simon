let randomCol=[];
let userCol=[];
let maxScore=[];

let btns=["box1", "box2","box3","box4", "box5","box6","box7", "box8","box9"];

let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){

    if(started== false){
        console.log("GAME STARTED");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}
function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userCol.push(userColor);

    checkAns(userCol.length-1);
}


function checkAns(idx){
    if(randomCol[idx]==userCol[idx]){
        if(randomCol.length==userCol.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over! Your Score was <b>${level}</b><br>Please press any key to start.`;
        maxScore.push(`${level}`);
        let v=-2;
        for(max of maxScore){
            if(max>v){
                v=max;
            }
        }
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
            document.querySelector("body").style.color="black";
        }, 150);
        let h3=document.querySelector("h3");
        h3.innerText=`High Score: ${v}`;
        resetGame();
    }
}
function levelUp(){
    userCol=[];
    level++;
    // h2.innerText="Level-"+level;
    h2.innerText=`Level ${level}`;
    //h2,innertext=`Level ${level}`; 

    let randIdx=Math.floor(Math.random()*9);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    randomCol.push(randCol);
    gameFlash(randBtn);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function resetGame(){
    started=false;
    randomCol=[];
    userCol=[];
    level=0;
}