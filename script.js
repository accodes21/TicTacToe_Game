console.log("Welcome to tic tac toe");
let turn = 'X';
let gameover = false;
let music = new Audio("click.wav");
let wins = new Audio("win.wav");

//Function to change turns
 const changeTurn = ()=>{
    return turn === 'X'?'O':'X'
}

//Function to check for win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [               //Winning combinations
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " WON"
            wins.play()
            gameover = true
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.visibility = "visible"
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
        
    })
}

//GAME LOGIC
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach(element =>{
        let boxtext = element.querySelector(".boxtext");
        element.addEventListener('click',()=>{
            if(boxtext.innerText === ''){
                music.play()
                boxtext.innerText = turn;
                turn = changeTurn();
                checkWin();
                if(!gameover){
                    document.getElementsByClassName("info")[0].innerText = "Turn of :" + turn;
                }
                
            }
        })
    })



//RESET BUTTON LOGIC

reset.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element=>{
        element.innerText = ""
    });
    turn = "X"
    gameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn of :" + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.visibility = "hidden";

})