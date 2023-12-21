let btn=document.querySelectorAll(".box");
let reset=document.querySelector(".btn")
let newGame=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turn_O=true;

const win_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        
        if(turn_O){
            box.innerText="O";
            turn_O=false;
        }else{
            box.innerText="X";
            turn_O=true;
        }
        box.disabled=true;

        checkWinner();
    })
});

const checkWinner=()=>{
    for(pattern of win_pattern){

        let pos1=btn[pattern[0]].innerText;
        let pos2=btn[pattern[1]].innerText;
        let pos3=btn[pattern[2]].innerText;

        if(pos1 != "" && pos2 !="" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                console.log("The winner is : ",pos1);
                showWinner(pos1);
            }
        }

    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable_btn();
    newGame.classList.remove("hide");
}

const enable_btn=()=>{
    for(box of btn){
        box.disabled=false;
        box.innerText="";
    }
};

const disable_btn=()=>{
    for(let box of btn){
        box.disabled=true;
    }
};

const resetGame=()=>{
    turn_O=true;
    msgContainer.classList.add("hide");
    enable_btn();
}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);