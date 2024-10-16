const quizData=[
    {
        question:"Which language runs in a web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"javaScript",
        correct:"d",
    },
    {
        question:"What does CSS stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct:"b",
    },
    {
        question:"What year was JavaScript launched",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1997",
        correct:"b",
    },
    {
        question:"The default value of the BORDER attribute is",
        a:"1px",
        b:"2px",
        c:"3px",
        d:"0px",
        correct:"a",
    },
    {
        question:"Increasing the cellpadding means",
        a:"Increase the space between cells",
        b:"Increase the softness of your site",
        c:"Increase the distance between cell and content",
        d:"All of the above",
        correct:"c",
    }
];
const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionE1=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText= currentQuizData.question
    a_text.innerHTML=currentQuizData.a
    b_text.innerHTML=currentQuizData.b
    c_text.innerHTML=currentQuizData.c
    d_text.innerHTML=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer

}
submitBtn.addEventListener('click',()=>{
    const answer=getSelected()
    if(answer){
        if(answer==quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})
