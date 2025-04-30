const questions = [
    {
        question: "What is Node-RED primarily used for?",
        answers: [
            {text: "Flow-based visual programming", correct: true},
            {text: "Video editing", correct: false},
            {text: "Gaming applications", correct: false},
            {text: "Text processing", correct: false}
        ]
    },
    {
        question: "Which microcontroller is commonly used with Node-RED for sensor integration?",
        answers: [
            {text: "Raspberry Pi Pico", correct: false},
            {text: "Arduino Uno", correct: false},
            {text: "ESP32", correct: true},
            {text: "BeagleBone", correct: false}
        ]
    },
    {
        question: "What role does MQTT play in a Node-RED hydroponics system?",
        answers: [
            {text: "It edits HTML content", correct: false},
            {text: "It transmits sensor data in real-time", correct: true},
            {text: "It stores images from sensors", correct: false},
            {text: "It powers the sensors", correct: false}
        ]
    },
    {
        question: "What type of node in Node-RED allows you to subscribe to an MQTT topic?",
        answers: [
            {text: "MQTT input node", correct: true},
            {text: "Function node", correct: false},
            {text: "Template node", correct: false},
            {text: "CSV node", correct: false}
        ]
    },
    {
        question: "Which sensor helps determine nutrient levels in hydroponic water?",
        answers: [
            {text: "Water level sensor", correct: false},
            {text: "Temperature sensor", correct: false},
            {text: "Flow rate sensor", correct: false},
            {text: "EC sensor", correct: true}
        ]
    },
    {
        question: "How does the water level sensor communicate its readings to Node-RED?",
        answers: [
            {text: "Via the ESP32 sending data to Node-RED", correct: true},
            {text: "By flashing LED lights", correct: false},
            {text: "Through USB connection", correct: false},
            {text: "By writing data to a text file", correct: false}
        ]
    },
    {
        question: "What is one function of the water flow rate sensor in hydroponics?",
        answers: [
            {text: "To monitor light levels", correct: false},
            {text: "To detect blockages or leaks", correct: true},
            {text: "To control temperature", correct: false},
            {text: "To measure pH", correct: false}
        ]
    },
    {
        question: "What happens in Node-RED if an EC level goes beyond a set threshold?",
        answers: [
            {text: "Node-RED shuts down", correct: false},
            {text: "The sensor disconnects", correct: false},
            {text: "An alert can be triggered", correct: true},
            {text: "The chart stops updating", correct: false}
        ]
    },
    {
        question: "Which method can be used to send WhatsApp alerts from Node-RED?",
        answers: [
            {text: "HTTP request node with a third-party API", correct: true},
            {text: "Direct messaging from the ESP32", correct: false},
            {text: "Using email services only", correct: false},
            {text: "SMS command line tools", correct: false}
        ]
    },
    {
        question: "Why is MQTT well-suited for IoT applications like hydroponics?",
        answers: [
            {text: "It stores data permanently", correct: false},
            {text: "It provides high-resolution graphics", correct: false},
            {text: "It only works with desktop computers", correct: false},
            {text: "It works efficiently over low bandwidth", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const SelectedBtn = e.target;
    const isCorrect =SelectedBtn.dataset.correct === "true";
    if(isCorrect){
        SelectedBtn.classList.add("correct");
        score++;
    }
    else{
        SelectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach( button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();