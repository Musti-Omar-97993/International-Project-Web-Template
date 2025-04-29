const questions = [
    {
        question: "What is Node-RED primarily used for?",
        answers: [
            {text: "Flow-based visual programming", correct: true},
            {text: "Video editing", correct: false},
            {text: "Gaming applications", correct: false},
            {text: "Text processing", correct: false},
        ]
    },
    {
        question: "How does Node-RED help in hydroponic systems?",
        answers: [
            {text: "By watering plants manually", correct: false},
            {text: "By automating sensor data collection and control", correct: true},
            {text: "By heating the water", correct: false},
            {text: "By planting seeds", correct: false},
        ]
    },
    {
        question: "Which device is commonly integrated with Node-RED in hydroponic setups?",
        answers: [
            {text: "PlayStation 5", correct: false},
            {text: "ESP32 microcontroller", correct: true},
            {text: "Kitchen oven", correct: false},
            {text: "Electric fan", correct: false},
        ]
    },
    {
        question: "What does the EC sensor measure?",
        answers: [
            {text: "The temperature of water", correct: false},
            {text: "The electrical conductivity to determine nutrient levels", correct: true},
            {text: "The pressure inside the water pipes", correct: false},
            {text: "The amount of light hitting the plants", correct: false},
        ]
    },
    {
        question: "Where should the EC sensor signal wire be connected on the ESP32?",
        answers: [
            {text: "To a digital output pin", correct: false},
            {text: "To a Wi-Fi antenna", correct: false},
            {text: "To an analog input pin", correct: true},
            {text: "To the battery terminal", correct: false},
        ]
    },
    {
        question: "What happens when the water level sensor detects low water in Node-RED?",
        answers: [
            {text: "It starts a music playlist", correct: false},
            {text: "It triggers an automated water pump control", correct: true},
            {text: "It shuts down the system immediately", correct: false},
            {text: "It changes the color of the lights", correct: false},
        ]
    },
    {
        question: "Where should you install the water level sensor?",
        answers: [
            {text: "Inside the lighting system", correct: false},
            {text: "Attached to the side of the water tank", correct: true},
            {text: "In the soil of the plants", correct: false},
            {text: "On top of the greenhouse roof", correct: false},
        ]
    },
    {
        question: "What does the water flow rate sensor help detect?",
        answers: [
            {text: "Pests attacking the plants", correct: false},
            {text: "Blockages or leaks in the irrigation system", correct: true},
            {text: "Amount of sunlight", correct: false},
            {text: "Temperature of the room", correct: false},
        ]
    },
    {
        question: "Which communication methods can ESP32 use to send flow rate data to Node-RED?",
        answers: [
            {text: "MQTT, HTTP, or WebSocket", correct: true},
            {text: "Bluetooth or HDMI", correct: false},
            {text: "CD-ROM or floppy disk", correct: false},
            {text: "Wi-Fi only", correct: false},
        ]
    },
    {
        question: "What visualization method is recommended for monitoring water flow rate in Node-RED?",
        answers: [
            {text: "Use a bar graph", correct: false},
            {text: "Use a gauge or chart", correct: true},
            {text: "Use a pie chart only", correct: false},
            {text: "Use a text-only display", correct: false},
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