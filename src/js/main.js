/* JS: Implements the Quiz utility with questions imported from a JSON file. */


/**
 * Defines essential variables & objects.
 *   questions       = Questions parsed from JSON file.
 *   questions_count = Number of questions in JSON file.
 *   question_index  = Index of current question.
 *   question_title  = The actual question.
 *   answers         = Possible answer(s).
 *   score           = Score obtained by user.
 *   btn_submit      = Triggered when an answer is submitted.
 */
let questions;
let questions_count;
let question_index;
let question_title = document.getElementById("title");
let answers = document.getElementById("answers");
let score = 0;
let btn_submit = document.getElementById("btn_submit");


/**
 * Gets questions from the JSON file.
 */
function getQuestions(){
    let request = new XMLHttpRequest();

    request.open("GET", "resources/questions.json", false);
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200){
            // console.log(request.responseText);
            questions = JSON.parse(request.responseText).questions;
            questions_count = questions.length;
            question_index = 0;
            // console.log(questions, questions_count, question_index);
        }
    }
    request.send();
}

/**
 * Displays current question & possible answers (options).
 */
function displayQuestion(question){
    question_title.innerHTML = "";
    answers.innerHTML = "";

    let title = document.createTextNode(question.title);
    question_title.appendChild(title);

    /* Describes behaviour of each possible answer. */
    question.answers.forEach(answer => {
        console.log(answer);
        let label = document.createElement("label");
        let answer_input = document.createElement("input");

        answer_input.setAttribute("type", "radio");
        answer_input.setAttribute("name", "answer");
        answer_input.setAttribute("value", answer.id);
        answer_input.classList.add("answer");

        let answer_title = document.createTextNode(answer.answer);
        label.appendChild(answer_input);
        label.appendChild(answer_title);

        answers.appendChild(label);
    });
}

/**
 * Describes the behaviour of SUBMIT button.
 */
btn_submit.addEventListener("click", function () {
    let answers = document.getElementsByClassName("answer");

    for (let i = 0; i < answers.length; i++){
        let answer = answers[i];
        let question = questions[question_index];

        if (answer.checked && answer.value == question.correct){
            answer.parentNode.classList.add("correct");
            score++;
        } else if (answer.checked && answer.value != question.correct) {
            answer.parentNode.classList.add("incorrect");
        }

        answer.disabled = true;
    }
    question_index++;

    let btn_next = document.getElementById("btn_next");
    btn_next.classList.remove("hide");
    btn_submit.classList.add("hide");
});

/**
 * Describes the behaviour of NEXT button.
 */
btn_next.addEventListener("click", function(){
    if (question_index == questions_count) {
        document.getElementById("question").classList.add("hide");
        document.getElementById("scores").classList.remove("hide");
        document.getElementById("score").innerHTML = score + "/" + (questions_count - "1");
        return;
    }

    displayQuestion(questions[question_index]);
    btn_submit.classList.remove("hide");
    btn_next.classList.add("hide");
});


/**
 * Initializes the utility.
 *   - Get all the questions.
 *   - Display the current question with the list of possible answers.
 */
getQuestions();
displayQuestion(questions[question_index]);