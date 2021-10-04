var dt2 = document.querySelector('.fakedt2');
var dt3 = document.querySelector('.fakedt3');
var trans2 = document.querySelector('.faketrans2');
var trans3 = document.querySelector('.faketrans3');

let answer = document.getElementById('answer');

var buttons = {
    opt1: document.getElementById('opt1'),
    opt2: document.getElementById('opt2'),
    opt3: document.getElementById('opt3'),
    opt4: document.getElementById('opt4'),

    /* buttons for answers matrix */
    answer1: document.getElementById('answer1'),
    answer2: document.getElementById('answer2'),
    answer3: document.getElementById('answer3'),
    answer4: document.getElementById('answer4'),
}

window.onload = function () {
    opt1.classList.add('active');
}
buttons.opt1.addEventListener('click', () => {
    dt2.style.display = "block";
    dt3.style.display = "none";
    trans2.style.display = "none";
    trans3.style.display = "none";


    opt1.classList.add('active');
    opt2.classList.remove('active');
    opt3.classList.remove('active');
    opt4.classList.remove('active');

    answer1.style.display = "block";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
})
buttons.opt2.addEventListener('click', () => {
    dt2.style.display = "none";
    dt3.style.display = "block";
    trans2.style.display = "none";
    trans3.style.display = "none";

    opt1.classList.remove('active');
    opt2.classList.add('active');
    opt3.classList.remove('active');
    opt4.classList.remove('active');

    answer1.style.display = "none";
    answer2.style.display = "block";
    answer3.style.display = "none";
    answer4.style.display = "none";
})
buttons.opt3.addEventListener('click', () => {
    dt2.style.display = "none";
    dt3.style.display = "none";
    trans2.style.display = "block";
    trans3.style.display = "none";

    opt1.classList.remove('active');
    opt2.classList.remove('active');
    opt3.classList.add('active');
    opt4.classList.remove('active');

    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "block";
    answer4.style.display = "none";
})
buttons.opt4.addEventListener('click', () => {
    dt2.style.display = "none";
    dt3.style.display = "none";
    trans2.style.display = "none";
    trans3.style.display = "block";

    opt1.classList.remove('active');
    opt2.classList.remove('active');
    opt3.classList.remove('active');
    opt4.classList.add('active');

    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "block";
})

const solnBox = document.getElementById('soln-container');
document.querySelector('.close').addEventListener('click', () => {
    solnBox.style.display = "none";
})