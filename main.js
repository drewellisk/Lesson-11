const buttonsArray = ["2", "3", "4", "5+", "I have no friends."];

const questionBox = document.getElementById("questionnaire");
const question = document.getElementById("question");

function initializeQuestionnaire() {
    for (let i = 0; i < buttonsArray.length; i++) {
        let newButton = document.createElement("button");
        newButton.innerText = buttonsArray[i];
        newButton.classList = "btn btn-dark w-50";
        newButton.addEventListener("click", runQuestionnaire)
        questionBox.append(newButton);
    }
}


function runQuestionnaire(event) {
    const clicked = event.target;
    const buttons = questionBox.querySelectorAll("button");

    console.log(buttons)

    for (i = 0; i < buttonsArray.length; i++) {
        buttons[i].style.display = "none";
    }

    clicked.style.display = "block"
    clicked.style.backgroundColor = "rgb(22,22,22)";

    if (clicked.innerText != "I have no friends.") {
        question.innerText = "Have fun playing with friends!"
    } else {
        question.innerText = "Sorry to hear that... check out our other reviews!"
    }
}

initializeQuestionnaire()