const  questions  =  [
        {
        question: "What is the capital of Pakistan?",
        choices: ["Peshawar", "Karachi", "Islamabad", "Lahore"],
        correct: 2
    },
    {
        question: "What is the name of PM of pakistan?",
        choices: ["Imarn khan", "Shahbaz sharif", "Zardari", "Maulana Fazlur Rahman"],
        correct: 1
    },
    {
        question: " Which river is the longest in Pakistan?  ",
        choices: ["Ravi", "Sutlej", "Chenab", "Indus"], // Answer:   B) Indus
        correct: 3
    },
    {
        question: "  Who was the founder of Pakistan? ",
        choices: ["Liaquat Ali Khan", "Allama Iqbal", "Muhammad Ali Jinnah", "Sir Syed Ahmed Khan"],  //Answer:   C) Muhammad Ali Jinnah
        correct: 2
    }

]   


let answer_btn = document.querySelectorAll("answer-btn");
const scoreDisplay = document.getElementById('score');
const nextQuestionBtn = document.getElementById('next-question-btn');