const quizData = [
    {
        question: 'Who is not friends with Harry Potter?',
        a: 'Ron Weasley',
        b: 'Neville Longbottom',
        c: 'Draco Malfoy',
        d: 'Hermione Granger',
        correct: 'c'
    },{
        question: ' What does the “D” in “D-Day” stand for?',
        a: 'Dooms',
        b: 'Day',
        c: 'Dark',
        d: 'Dunkirk',
        correct: 'b'
    },{
        question: 'What language is the most spoken worldwide?',
        a: 'Chinese',
        b: 'Spanish',
        c: 'Arabic',
        d: 'English',
        correct: 'a'
    },{
        question: 'How many hearts does an octopus have?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'c'
    },{
        question: 'What is the color of Donald Duck’s bowtie?',
        a: 'White',
        b: 'Yellow',
        c: 'Blue',
        d: 'Red',
        correct: 'd'
    }
]
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById('next');

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}

nextBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else{
        alert("You are at the end of the quiz.")
    }
    
})