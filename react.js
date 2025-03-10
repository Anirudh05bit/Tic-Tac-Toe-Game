let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0 = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame=()=>{
    turn0=true;
    enablelebox();
    msgcontainer.classList.add("hide");

}

const showwinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();

}

const disablebox=()=>{
    for(box of boxes){
        box.disabled=true;  
    }
}

const enablelebox=()=>{
    for(box of boxes){
        box.disabled=false; 
        box.innerText=""; 
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    
        if (turn0){
            box.innerText="O";
            turn0=false
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        for(i of winPatterns){
            
            let pos1val=boxes[i[0]].innerText;
            let pos2val=boxes[i[1]].innerText;
            let pos3val=boxes[i[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val===pos2val && pos2val===pos3val){
                    console.log("winner",pos1val)
                    showwinner(pos1val);
                }
            }

        };
    })
})

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);