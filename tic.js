let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#newbtn");
let msgconatainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("was click")
        if(turnO){
            box.innerText = "O";
            box.style.color="red";
            box.style.backgroundColor="lightblue";
            turnO = false;
        } else{
            box.innerText = "X";
            box.style.color="blue";
            turnO = true;
        }
        box.disabled = true;
        
        checkwinner();

    })
})
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgconatainer.classList.remove("hide");
    disableboxes();
}
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const checkwinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText
        let pos2Val =boxes[pattern[1]].innerText
        let pos3Val =boxes[pattern[2]].innerText
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val==pos2Val&& pos2Val==pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
        
    };
    
}
const resetGame = ()=>{
   turnO = true;
   enableboxes();
   msgconatainer.classList.add("hide");
}
newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);