const questions=[
    {
        question:"what is the capital of pakistan?",
        answers:[
        {text:"Peshawer", correct:false},
        {text:"Lahore", correct:false},
        {text:"Karachi", correct:false},
        {text:"Islamabad", correct:true},
        ]
    },
    {
        question:"what is the old college in pakistan?",
        answers:[
        {text:"Islamia college peshawer", correct:true},
        {text:"Edward college pheshawar", correct:false},
        {text:"GC lahore", correct:false},
        {text:"Panjab college", correct:false},
        ]
    },
    {
        question:"what is the PM of pakistan?",
        answers:[
            {text:"Imran khan", correct:false},
            {text:"Zardari", correct:false},
            {text:"Shehbaz sharif", correct:true},
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
