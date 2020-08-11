const buttons = document.querySelectorAll("img.btn"); // creating buttton and it can be click
buttons.forEach(btn => btn.addEventListener('click', captureInput));
document.onload = score(3);

function captureInput(e) {
    //function to get user input
    if (navigator.userAgent.toLocaleLowerCase().indexOf('firefox') > -1) {
        if (e.target.alt == 'reset') {
            score(3); //reset the scoreboard
            document.querySelector("#round").textContent = "Please choose again";
            const imgs = document.querySelectorAll(".img");

            imgs[0].src = "blank.png";
            imgs[1].src = "blank.png";

        } else {
            playRound(e.target.alt, computerPlay());
        }
    } else {
        if (e.path[0].alt == 'reset') {
            score(3); //reset the scoreboard
            document.querySelector("#round").textContent = "Please choose again";
            const imgs = document.querySelectorAll(".img");

            imgs[0].src = "blank.png";
            imgs[1].src = "blank.png";

        } else {
            playRound(e.path[0].alt, computerPlay()); // if reset not clicked, output is computerPlay function
        }
    }
}

function computerPlay() {
    // function to get computer random value
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        default:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // funtion to calculate player & computer input
    var outcome = 0;
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") { outcome = 2; } else if (computerSelection === "Scissors") { outcome = 1; } else { outcome = 0; }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === "Scissors") { outcome = 2; } else if (computerSelection === "Rock") { outcome = 1; } else { outcome = 0; }
    } else {
        if (computerSelection === "Rock") { outcome = 2; } else if (computerSelection === "Paper") { outcome = 1; } else { outcome = 0; }
    }

    const imgs = document.querySelectorAll(".img");

    imgs[0].src = playerSelection + ".png";
    imgs[1].src = computerSelection + ".png";

    const round = document.querySelector("#round");
    if (outcome == 1) {
        round.textContent = playerSelection + " beats " + computerSelection;
    } else if (outcome == 2) {
        round.textContent = playerSelection + " loses to " + computerSelection;
    } else {
        round.textContent = playerSelection + " vs. " + computerSelection +
            ". It's a Tie!";
    }
    score(outcome);
    //calling score function
}

function score(outcome) {
    // get the result and the output are scores
    const score = document.querySelectorAll('p.scores');

    switch (outcome) {
        case 0:
            break;
        case 1:
            score[0].textContent = "" + (parseInt(score[0].textContent) + 1) + "";
            break;
        case 2:
            score[1].textContent = "" + (parseInt(score[1].textContent) + 1) + "";
            break;
        default:
            score[0].textContent = "0";
            score[1].innerHTML = "0";
            break;
    }
}