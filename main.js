let music = new Audio("notification.mp3");
let gameOver = new Audio("gameover.mp3");
let claps= new Audio("claps.mp4");
let span8 = document.getElementById("span8");
let turnChance = document.getElementsByClassName("turn")[0];
let winner = document.getElementsByClassName("winner")[0];
let x_score = document.getElementsByClassName("x-score")[0];
let o_score = document.getElementsByClassName("o-score")[0];
let clearBtn=document.getElementsByClassName("btn")[0];
let resetBtn=document.getElementsByClassName("btn")[1];
let matches=document.getElementsByClassName("matches")[0];
let imgs=document.querySelector('.images');
let oImage=document.getElementsByClassName("images1")[0];
let turn = "X";
let xscore = 0;
let oscore = 0;
let match=1;
let changeTurn = () => {
    return turn === "X" ? "O" : "X";
}
const chechWin = () => {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");
    if ((box1.innerText == box2.innerText) && (box3.innerText == box1.innerText) && (box1.innerText != '')) {
       match++;
        winner.innerText = `winner : ${box1.innerText}`;
        matches.innerText=`Matches : ${match}`;
        if (box1.innerText === 'X') {
            claps.play();
            document.querySelector('.images').style.width='20%';
       document.querySelector('.images').style.height='20%';
            xscore++;
            x_score.innerText = `X-score : ${xscore}`;
        }
        else {
            claps.play();
            oImage.style.width='20%';
            oImage.style.height='20%';
            oscore++;
            o_score.innerText = `O-score : ${oscore}`;
        }
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';
            document.querySelector('.images').style.width='0%';
        document.querySelector('.images').style.height='0%';
        oImage.style.width='0%';
            oImage.style.height='0%';
        }, 1000)
    }
    if ((box4.innerText == box5.innerText) && (box6.innerText == box4.innerText) && (box4.innerText != '') ) {
        match++;
      
        winner.innerText = `winner : ${box4.innerText}`;
        matches.innerText=`Matches : ${match}`;
        if (box4.innerText === 'X') {
            claps.play();
            imgs.style.width='20%';
            imgs.style.height='20%';
            xscore++;
            x_score.innerText = `X-score : ${xscore}`;
        }
        else {
            claps.play();
            oImage.style.width='20%';
            oImage.style.height='20%';
            oscore++;
            o_score.innerText = `O-score : ${oscore}`;
        }
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';
            imgs.style.width='0%';
            imgs.style.height='0%';
            oImage.style.width='0%';
            oImage.style.height='0%';
        }, 1000)
    }
    if ((box7.innerText == box8.innerText) && (box9.innerText == box7.innerText) && (box7.innerText != '') ) {
       match++;
       
        winner.innerText = `winner : ${box7.innerText}`;
        matches.innerText=`Matches : ${match}`;
        if (box7.innerText === 'X') {
            claps.play();
            document.querySelector('.images').style.width='20%';
            document.querySelector('.images').style.height='20%';
            xscore++;
            x_score.innerText = `X-score : ${xscore}`;
        }
        else {
            claps.play();
            oImage.style.width='20%';
            oImage.style.height='20%';
            oscore++;
            o_score.innerText = `O-score : ${oscore}`;
        }
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';
            document.querySelector('.images').style.width='0%';
        document.querySelector('.images').style.height='0%';
        oImage.style.width='0%';
            oImage.style.height='0%';
        }, 1000)
    }
    if ((box1.innerText == box4.innerText) && (box7.innerText == box1.innerText) && (box1.innerText != '') ) {
        match++;
        matches.innerText=`Matches : ${match}`;
       
        winner.innerText = `winner : ${box7.innerText}`;
        if (box7.innerText === 'X') {
            claps.play();
            document.querySelector('.images').style.width='20%';
            document.querySelector('.images').style.height='20%';
            xscore++;
            x_score.innerText = `X-score : ${xscore}`;
        }
        else {
            claps.play();
            oImage.style.width='20%';
            oImage.style.height='20%';
            oscore++;
            o_score.innerText = `O-score : ${oscore}`;
        }
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';
            document.querySelector('.images').style.width='0%';
        document.querySelector('.images').style.height='0%';
        oImage.style.width='0%';
            oImage.style.height='0%';
        }, 1000)
    }
    if ((box2.innerText == box5.innerText) && (box8.innerText == box2.innerText) && (box2.innerText != '') ) {
        match++;
        winner.innerText = `winner : ${box2.innerText}`;
       
        matches.innerText=`Matches : ${match}`;
        if (box2.innerText === 'X') {
            claps.play();
            document.querySelector('.images').style.width='20%';
            document.querySelector('.images').style.height='20%';
            xscore++;
            x_score.innerText = `X-score : ${xscore}`;
        }
        else {
            claps.play();
            oImage.style.width='20%';
            oImage.style.height='20%';
            oscore++;
            o_score.innerText = `O-score : ${oscore}`;
        }
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';
            document.querySelector('.images').style.width='0%';
        document.querySelector('.images').style.height='0%';
        oImage.style.width='0%';
            oImage.style.height='0%';
        }, 1000)
    }
    if ((box3.innerText == box6.innerText) && (box9.innerText == box3.innerText) && (box3.innerText != '') ) {
        match++;
       
        winner.innerText = `winner : ${box3.innerText}`;
        matches.innerText=`Matches : ${match}`;
        if (box3.innerText === 'X') {
            claps.play();
            document.querySelector('.images').style.width='20%';
            document.querySelector('.images').style.height='20%';
            xscore++;
            x_score.innerText = `X-score : ${xscore}`;
        }
        else {
            claps.play();
            oImage.style.width='20%';
            oImage.style.height='20%';
            oscore++;
            o_score.innerText = `O-score : ${oscore}`;
        }
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';
            document.querySelector('.images').style.width='0%';
        document.querySelector('.images').style.height='0%';
        oImage.style.width='0%';
            oImage.style.height='0%';
        }, 1000) 
    }
    if ((box1.innerText == box5.innerText) && (box9.innerText == box1.innerText) && (box1.innerText != '') ) {
        match++;
       
        winner.innerText = `winner : ${box1.innerText}`;
        matches.innerText=`Matches : ${match}`;
        if (box1.innerText === 'X') {
            claps.play();
            document.querySelector('.images').style.width='20%';
            document.querySelector('.images').style.height='20%';
            xscore++;
            x_score.innerText = `X-score : ${xscore}`;
        }
        else {
            claps.play();
            oImage.style.width='20%';
            oImage.style.height='20%';
            oscore++;
            o_score.innerText = `O-score : ${oscore}`;
        }
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';
            document.querySelector('.images').style.width='0%';
        document.querySelector('.images').style.height='0%';
        oImage.style.width='0%';
            oImage.style.height='0%';
        }, 1000)
    }
    if ((box3.innerText == box5.innerText) && (box7.innerText == box3.innerText) && (box3.innerText != '') ) {
        match++;
       
        winner.innerText = `winner : ${box7.innerText}`;
        matches.innerText=`Matches : ${match}`;
        if (box7.innerText === 'X') {
            claps.play();
            document.querySelector('.images').style.width='20%';
            document.querySelector('.images').style.height='20%';
            xscore++;
            x_score.innerText = `X-score : ${xscore}`;
        }
        else {
            claps.play();
            oImage.style.width='20%';
            oImage.style.height='20%';
            oscore++;
            o_score.innerText = `O-score : ${oscore}`;
        }
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';
            document.querySelector('.images').style.width='0%';
        document.querySelector('.images').style.height='0%';
        oImage.style.width='0%';
            oImage.style.height='0%';
        }, 1000)
    }
    if((box1.innerText !== '')&& (box2.innerText !== '')&& (box3.innerText !=='')&&( box4.innerText !=='')&& (box5.innerText !=='')&& (box6.innerText!=='')&& (box7.innerText !=='')&& (box8.innerText !=='')&&(box9.innerText !=='')){
        match++;
        winner.innerText = `Match Draw`;
        matches.innerText=`Matches : ${match}`;
        document.querySelector('.images').style.width='0%';
        document.querySelector('.images').style.height='0%';
        oImage.style.width='0%';
            oImage.style.height='0%';
        setTimeout(() => {
            box1.innerText = '';
            box2.innerText = '';
            box3.innerText = '';
            box4.innerText = '';
            box5.innerText = '';
            box6.innerText = '';
            box7.innerText = '';
            box8.innerText = '';
            box9.innerText = '';

        }, 1000)
        gameOver.play();
    }
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            turnChance.innerText = `Turn : ${turn}`;
            chechWin();
        }
    })
})
clearBtn.addEventListener("click",()=>{
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");
    box1.innerText = '';
    box2.innerText = '';
    box3.innerText = '';
    box4.innerText = '';
    box5.innerText = '';
    box6.innerText = '';
    box7.innerText = '';
    box8.innerText = '';
    box9.innerText = '';
});
resetBtn.addEventListener("click",()=>{
    xscore=0;
    oscore=0;
    match=1;
    turn='X';
    turnChance.innerText=`Turn : ${turn}`;
    matches.innerText=`Matches : ${match}`;
    winner.innerText="Winner :";
    x_score.innerHTML=`X-score :&nbsp${xscore}`;
    o_score.innerHTML=`O-score :&nbsp${oscore}`;
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");
    box1.innerText = '';
    box2.innerText = '';
    box3.innerText = '';
    box4.innerText = '';
    box5.innerText = '';
    box6.innerText = '';
    box7.innerText = '';
    box8.innerText = '';
    box9.innerText = '';
})
