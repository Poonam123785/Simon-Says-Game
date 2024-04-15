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
