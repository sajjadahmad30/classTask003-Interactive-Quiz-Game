const questions=[
    {
        question:"What is the capital of pakistan?",
        answers:[
        {text:"Peshawer", correct:false},
        {text:"Lahore", correct:false},
        {text:"Karachi", correct:false},
        {text:"Islamabad", correct:true},
        ]
    },
    {
        question:"What is the oldest college in pakistan?",
        answers:[
        {text:"Islamia college peshawer", correct:true},
        {text:"Edward college pheshawar", correct:false},
        {text:"GC lahore", correct:false},
        {text:"Panjab college", correct:false},
        ]
    },
    {
        question:"What is the Current PM of pakistan?",
        answers:[
            {text:"Imran khan", correct:false},
            {text:"Zardari", correct:false},
            {text:"Shahbaz sharif", correct:true},
        {text:"Maulana fazlur rahman", correct:false},
        ]
    },
];

const  questionElements= document.getElementById("question")
const  answerButtons= document.getElementById("answer-buttons")
const  nextButton= document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();   
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElements.innerHTML=questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers=>{
        const button=document.createElement("button")
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextButton.style.display='block'
}

function showScore(){
    resetState();
    questionElements.innerHTML=`Your Score ${score} out of ${questions.length} !`
    nextButton.innerHTML="Play Again.... ";
    nextButton.style.display='block'
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
