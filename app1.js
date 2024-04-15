/*
let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow","green",  "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 350);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 350);
}
function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random() * btns.length );
    let randColor = btns[randIdx];
    let randBtn = document.querySelector("." + randColor);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx) {
        if (userSeq[idx] === gameSeq[idx]) {
          if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
          }
       }
    else {
            h2.innerHTML = `Game over! Your score was <b> ${level} </b> <br> Press any key to start.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function () {
                document.querySelector("body").style.backgroundColor = "white";
            },150);
            reset();
    }
}
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
} 

// Remove event listeners from buttons
for (let btn of allBtns) {
    btn.removeEventListener("click", btnPress);
}

// Add event listeners to buttons again
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
*/

let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");

// Start the game when any key is pressed
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

// Function to flash a button
function flashButton(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 350);
}

// Function to generate the next level
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Randomly select a button and add it to the game sequence
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);

    // Flash the selected button
    let randBtn = document.querySelector(`.${randColor}`);
    flashButton(randBtn);
}

// Function to handle button clicks
function btnPress() {
    let btn = this;
    flashButton(btn);

    // Get the color of the clicked button
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    // Check the user's input against the game sequence
    checkAnswer(userSeq.length - 1);
}

// Function to check the user's answer
function checkAnswer(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            // If the user completes the sequence, proceed to the next level after a delay
            setTimeout(levelUp, 1000);
        }
    } else {
        // If the user makes a mistake, end the game and reset
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

// Add event listeners to all buttons
allBtns.forEach(btn => btn.addEventListener("click", btnPress));

// Function to reset the game
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}