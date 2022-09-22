const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 100);
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('input');
const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');

let score2 = JSON.parse(localStorage.getItem('local_score'));

if(!score2){
    score2 = 0;
}

scoreEl.innerHTML =`Score: ${score2}`;

questionEl.innerHTML = `What's ${num1} x ${num2}`;

const answer = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +answerEl.value;
    if (userAns === answer){
        score2++;
        updateLocalStorage();
    } else {
        score2--;
        updateLocalStorage();
    }
});


function updateLocalStorage(){
    localStorage.setItem('local_score', JSON.stringify(score2));
}
