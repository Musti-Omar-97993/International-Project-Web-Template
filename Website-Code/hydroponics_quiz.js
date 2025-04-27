const questions = [
    {
        question: "Which of the following is a macronutrient that helps plants build strong cell walls?",
        answers: [
            {text: "Calcium (Ca)", correct: true},
            {text: "Zinc (Zn)", correct: false},
            {text: "Boron (B)", correct: false},
            {text: "Iron (Fe)", correct: false},
        ]
    },
    {
        question: "What role do micronutrients like Iron (Fe) and Manganese (Mn) play in hydroponics?",
        answers: [
            {text: "They provide structural support to plants.", correct: false},
            {text: "They help plants absorb sunlight directly.", correct: false},
            {text: "They support enzyme function and chlorophyll production in small amounts.", correct: true},
            {text: "They replace the need for water in nutrient delivery.", correct: false},
        ]
    },
    {
        question: "In which hydroponic system are plant roots misted with nutrient-rich water while hanging in the air?",
        answers: [
            {text: "Deep Water Culture (DWC)", correct: false},
            {text: "Nutrient Film Technique (NFT)", correct: false},
            {text: "Aeroponics", correct: true},
            {text: "Ebb & Flow", correct: false},
        ]
    },
    {
        question: "What is a key benefit of the Deep Water Culture (DWC) system in hydroponics?",
        answers: [
            {text: "It uses no water and only air to grow plants.", correct: false},
            {text: "Roots are misted using fine sprays for aeration.", correct: false},
            {text: "It allows roots to hang in nutrient-rich, oxygenated water for fast growth.", correct: true},
            {text: "Water flows continuously by gravity only.", correct: false},
        ]
    },
    {
        question: "Why are air pumps and air stones important in Deep Water Culture (DWC) systems?",
        answers: [
            {text: "They remove pests from the roots.", correct: false},
            {text: "They deliver nutrients in solid form.", correct: false},
            {text: "They dissolve oxygen into water to support root respiration.", correct: true},
            {text: "They control the pH level of the water.", correct: false},
        ]
    },
    {
        question: "What is the purpose of timers in hydroponic systems like Ebb & Flow?",
        answers: [
            {text: "To control plant height.", correct: false},
            {text: "To automate nutrient misting only at night.", correct: false},
            {text: "To regulate water cycles and prevent roots from drying or flooding.", correct: true},
            {text: "To heat the nutrient solution.", correct: false},
        ]
    },
    {
        question: "How do net pots support plants in hydroponic systems?",
        answers: [
            {text: "They store nutrients for later use.", correct: false},
            {text: "They anchor plants while allowing roots to grow freely into the solution.", correct: true},
            {text: "They cover the plants to block light.", correct: false},
            {text: "They remove excess water from the roots.", correct: false},
        ]
    },
    {
        question: "Why are trellises important in hydroponic setups for plants like tomatoes and beans?",
        answers: [
            {text: "They help deliver water more efficiently.", correct: false},
            {text: "They guide plant growth and support heavy fruit.", correct: true},
            {text: "They block pests and diseases from reaching the plant.", correct: false},
            {text: "They clean the plant leaves with mist.", correct: false},
        ]
    },
    {
        question: "How does light wavelength affect plant growth in hydroponics?",
        answers: [
            {text: "Blue light encourages vegetative growth, while red light promotes flowering.", correct: true},
            {text: "Only ultraviolet light is needed for all growth stages.", correct: false},
            {text: "Green light accelerates root development the most.", correct: false},
            {text: "All light wavelengths are equally effective.", correct: false},
        ]
    },
    {
        question: "Why is monitoring pH and EC important in hydroponic systems?",
        answers: [
            {text: "It helps automate plant harvesting.", correct: false},
            {text: "It ensures nutrients remain available and in the correct concentration.", correct: true},
            {text: "It reduces the need for artificial lighting.", correct: false},
            {text: "It eliminates the need for oxygenation.", correct: false},
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