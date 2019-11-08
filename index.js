// Array initialization
const questionArray = [

    'How much weighs a blue whale?',
    'Who is the best rapper in the world?',
    'What is the color of grass?',
    'How are you?'

];

const answerArray = [

    '75000 kilograms',
    'Aesop Rock',
    'Green',
    'GOo0o0d'

];



const questionArrayOne = []


const answerArrayOne = []


// Question counter
let questionNumber = 0
let questionNumberOne = 0
// First question; initialized when page loads
theQuestion = document.getElementById('question')
theQuestion.innerText = questionArray[questionNumber]
theAnswer = document.getElementById('answer')
theAnswer.innerText = ''
// First question initialized
theQuestionOne = document.getElementById('questionOne')
theQuestionOne.innerText =  'No submitted question yet'
theAnswerOne = document.getElementById('answerOne')
theAnswerOne.innerText = 'No answer yet'





// Functions to retrieve answer to current question and go to next question (called by onclick)

function answerQuestionFunction() {

    
    theAnswer = document.getElementById('answer')
    theAnswer.innerText = answerArray[questionNumber]
           
};

function newQuestionFunction() {
    questionNumber +=1;
    theQuestion = document.getElementById('question')
    theQuestion.innerText = questionArray[questionNumber]
    theAnswer = document.getElementById('answer')
    theAnswer.innerText = ''

    
}

function putNewQuestion() {
let newQuestion = document.getElementById('questionArea')
let newAnswer = document.getElementById('answerArea')
newQuestion = newQuestion.value
newAnswer = newAnswer.value

questionArray.push(newQuestion)
answerArray.push(newAnswer)
}

function deleteQuestion() {
    questionArray.splice(questionNumber, '')
    theQuestion = document.getElementById('question')
    theQuestion.innerText = questionArray[questionNumber]
    theAnswer = document.getElementById('answer')
    theAnswer.innerText = ''
    questionNumber +=1

}


// functionscategory 1

function answerQuestionFunctionOne() {

    
    theAnswerOne = document.getElementById('answerOne')
    theAnswerOne.innerText = answerArrayOne[questionNumberOne]
           
}

function newQuestionFunctionOne() {
    questionNumberOne +=1;

    theQuestionOne = document.getElementById('questionOne')
    theQuestionOne.innerText = questionArrayOne[questionNumberOne]
    theAnswerOne = document.getElementById('answerOne')
    theAnswerOne.innerText = ''


    
}

function putNewQuestionOne() {
let newQuestionOne = document.getElementById('questionAreaOne')
let newAnswerOne = document.getElementById('answerAreaOne')
newQuestionOne = newQuestionOne.value
newAnswerOne = newAnswerOne.value

questionArrayOne.push(newQuestionOne)
answerArrayOne.push(newAnswerOne)

if(questionArrayOne.length === 1){
    questionNumberOne = -1
}



}

function deleteQuestionOne() {
    questionArray.splice(questionNumberOne)

}

