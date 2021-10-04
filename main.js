/******************************************************
Solution & Explanation Box 
*************************************/
var soln_box = document.getElementById("soln-container");
var soln_D2by2 = document.querySelector('.D2by2');
var soln_D3by3 = document.querySelector('.D3by3');
var soln_T2by2 = document.querySelector('.T2by2');
var soln_T3by3 = document.querySelector('.T3by3');




/************************************
Determinant of 2 X 2 matrix
********************************/

let answer1 = document.getElementById("answer1");
const detInput1 = document.querySelector('.det2input1');
const detInput2 = document.querySelector('.det2input2');
const detInput3 = document.querySelector('.det2input3');
const detInput4 = document.querySelector('.det2input4');
let view = document.querySelector('.view');
let view2 = document.querySelector('.view2');

function matrix2by2() {
    let soln1 = (detInput1.value * detInput4.value) - (detInput2.value * detInput3.value);
    alert(soln1);
    view.style.display = "block";
}

function input1() {
    if (detInput1.value == "" || detInput2.value == "" || detInput3.value == "" || detInput4.value == "") {
        alert("All fields are required");
    }
    else {
        return matrix2by2();
    }
}
answer1.addEventListener('click', input1);

/*Explaination button that appears after the answer has being displayed */
view.addEventListener('click', () => {
    soln_box.style.display = "block";
    soln_D2by2.style.display = "block";
    soln_D3by3.style.display = "none";
    soln_T2by2.style.display = "none";
    soln_T3by3.style.display = "none";
})
view2.addEventListener('click', () => {
    soln_box.style.display = "block";
    soln_D2by2.style.display = "none";
    soln_D3by3.style.display = "block";
    soln_T2by2.style.display = "none";
    soln_T3by3.style.display = "none";
})


/************************************
Determinant of 3 X 3 matrix
********************************/
const det3Input1 = document.querySelector('.det3input1');
const det3Input2 = document.querySelector('.det3input2');
const det3Input3 = document.querySelector('.det3input3');
const det3Input4 = document.querySelector('.det3input4');
const det3Input5 = document.querySelector('.det3input5');
const det3Input6 = document.querySelector('.det3input6');
const det3Input7 = document.querySelector('.det3input7');
const det3Input8 = document.querySelector('.det3input8');
const det3Input9 = document.querySelector('.det3input9');
let answer2 = document.getElementById('answer2');

/*Calcualtion for 3 by determinant matrix */
function matrix3by3() {
    let soln2 = (det3Input1.value * ((det3Input5.value * det3Input9.value) - (det3Input6.value * det3Input8.value))) -
        (det3Input2.value * ((det3Input4.value * det3Input9.value) - (det3Input6.value * det3Input7.value))) +
        (det3Input3.value * ((det3Input4.value * det3Input8.value) - (det3Input5.value * det3Input7.value)));

    alert(soln2);
    view2.style.display = "block";
}

/*Function for checking if all det. field for 3 by 3 matrix has being inputed */
function input2() {
    if (det3Input1.value == "" || det3Input2.value == "" || det3Input3.value == "" || det3Input4.value == "") {
        alert("All fields are required");
    }
    else {
        return matrix3by3();
    }
}
answer2.addEventListener('click', input2);

/* Transpose for 2 by 2 matrix */
const trans2_input1 = document.querySelector(".trans2input1");
const trans2_input2 = document.querySelector(".trans2input2");
const trans2_input3 = document.querySelector(".trans2input3");
const trans2_input4 = document.querySelector(".trans2input4");

const answer2_input1 = document.querySelector(".answer2input1");
const answer2_input2 = document.querySelector(".answer2input2");
const answer2_input3 = document.querySelector(".answer2input3");
const answer2_input4 = document.querySelector(".answer2input4");

let answer3 = document.getElementById('answer3');

function transpose2by2() {
    answer2_input1.value = trans2_input1.value;
    answer2_input2.value = trans2_input3.value;
    answer2_input3.value = trans2_input2.value;
    answer2_input4.value = trans2_input4.value;

    soln_box.style.display = "block";
    soln_D2by2.style.display = "none";
    soln_D3by3.style.display = "none";
    soln_T2by2.style.display = "block";
    soln_T3by3.style.display = "none";

}
function input3() {
    if (trans2_input1.value == "" || trans2_input2.value == "" || trans2_input3.value == "" || trans2_input4.value == "") {
        alert('All fields are required');
    }
    else {
        return transpose2by2();
    }
}
answer3.addEventListener('click', input3);

/* Transpose for 3 by 3 matrix */

const trans3_input1 = document.querySelector(".trans3input1");
const trans3_input2 = document.querySelector(".trans3input2");
const trans3_input3 = document.querySelector(".trans3input3");
const trans3_input4 = document.querySelector(".trans3input4");
const trans3_input5 = document.querySelector(".trans3input5");
const trans3_input6 = document.querySelector(".trans3input6");
const trans3_input7 = document.querySelector(".trans3input7");
const trans3_input8 = document.querySelector(".trans3input8");
const trans3_input9 = document.querySelector(".trans3input9");

const answer3_input1 = document.querySelector(".answer3input1");
const answer3_input2 = document.querySelector(".answer3input2");
const answer3_input3 = document.querySelector(".answer3input3");
const answer3_input4 = document.querySelector(".answer3input4");
const answer3_input5 = document.querySelector(".answer3input5");
const answer3_input6 = document.querySelector(".answer3input6");
const answer3_input7 = document.querySelector(".answer3input7");
const answer3_input8 = document.querySelector(".answer3input8");
const answer3_input9 = document.querySelector(".answer3input9");

let answer4 = document.getElementById('answer4');


function transpose3by3() {
    answer3_input1.value = trans3_input1.value;
    answer3_input2.value = trans3_input4.value;
    answer3_input3.value = trans3_input7.value;
    answer3_input4.value = trans3_input2.value;
    answer3_input5.value = trans3_input5.value;
    answer3_input6.value = trans3_input8.value;
    answer3_input7.value = trans3_input3.value;
    answer3_input8.value = trans3_input6.value;
    answer3_input9.value = trans3_input9.value;

    soln_box.style.display = "block";
    soln_D2by2.style.display = "none";
    soln_D3by3.style.display = "none";
    soln_T2by2.style.display = "none";
    soln_T3by3.style.display = "block";


}

function input4() {
    if (trans3_input1.value == "" || trans3_input3.value == "" || trans3_input3.value == "" || trans3_input4.value == "" || trans3_input5.value == "" || trans3_input6.value == "" || trans3_input7.value == "" || trans3_input8.value == "" || trans3_input9.value == "") {
        alert('All fields are required');
    }
    else {
        return transpose3by3();
    }
}
answer4.addEventListener('click', input4);

