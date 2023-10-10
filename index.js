var questions = [
    {
        title: 'What is HTML',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Markup Language'
    },
    {
        title: 'What is CSS',
        options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
        correctAnswer: 'Styling Language'
    },
    {
        title: 'What is JS',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    },
    {
        title: 'What is React',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    }
]

var count = 0;
var score = 0

function startQuiz() {
    var reset = document.getElementById("Reset");
    reset.className = " hide"
    var result = document.getElementById("Result");
    result.className = " hide"
    // console.log(event.target)
    var start = document.getElementById("start")
    start.className = "hide"
    var nextBtn = document.getElementById("nextBtn")
    nextBtn.className = " "
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.className = ""
    // ....................................

    var quesTitle = document.getElementById("title");
    quesTitle.innerHTML = questions[count].title
    // now for options
    var option = document.getElementById("option");
    option.innerHTML = "" //for previous options clear
    for (let i = 0; i < questions.length; i++) {
        var input = document.createElement("input");
        input.value = questions[count].options[i];
        input.type = "radio"  // type here through dom
        input.name = "quizOption";
        input.required = true;
        option.append(input) //for radio button value
        option.append(input.value) //as a label for input radio
    }
}

function nextQues() {
    var selectedAnswer = getSelectedAnswer();

    if (selectedAnswer === null) {
        alert("Please select an option before moving to the next question.");
    } else {
        var correctAnswer = questions[count].correctAnswer;
        if (selectedAnswer === correctAnswer) {
            // Correct answer
            score += 10;
            console.log(score);
        }
        // Increment the count to move to the next question
        count++;

        if (count < questions.length) {
            var quesTitle = document.getElementById("title");
            quesTitle.innerHTML = questions[count].title;
            var option = document.getElementById("option");
            option.innerHTML = "";

            for (let i = 0; i < questions[count].options.length; i++) {
                var input = document.createElement("input");
                input.value = questions[count].options[i];
                input.type = "radio";
                input.name = "quizOption";
                input.required = true;
                option.append(input);
                option.append(input.value);
            }
        } else {
            result();
        }
    }
}

/* function checker() {
    if (count < questions.length) {
        var selectedAnswer = getSelectedAnswer();
        var correctAnswer = questions[count].correctAnswer;
        console.log("correctAnswer---> ye hai ", correctAnswer)
        if (selectedAnswer === correctAnswer) {
            // Correct answer
            score += 10; // You can adjust the score increment as needed
            console.log(score)
        }
        nextQues();
    } else {
        // End of the quiz, show the result
        result();
    }
}
 */
function getSelectedAnswer() {
    var options = document.getElementsByName("quizOption");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            console.log("ye select kiya hai--->", options[i].value)
            return options[i].value;
        }
    }
    return null; // No answer selected
}

function result() {
    var nextBtn = document.getElementById("nextBtn")
    nextBtn.className = "hide"
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.className = "hide"
    var result = document.getElementById("Result");
    result.className = ""
    // result.append(score)
    // var reset = document.getElementById("Reset");
    // reset.className = ""
    result.innerHTML = "Your Score: " + score; // Display the score
    var reset = document.getElementById("Reset");
    reset.className = "";
}


function restartQuiz() {
    count = 0
    score = 0
    startQuiz()
}

