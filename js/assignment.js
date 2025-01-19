"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
const shiftvalue;
const popvalue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.textContent = 'First item: ${todo[0]}'
}

function updateAnswerTwo() {
    answerTwoEl.textContent = `Last item: ${todos[todos.length - 1]}`;
}

function removeLastValue() {
    popValue = todos.pop();
    updateAnswerTwo();
}

function removeFirstValue() {
    shiftValue = todos.shift();
    updateAnswerOne();
}

function addShiftAndPopValues() {
    todos.push("Complete the assignment");
    updateAnswerFive();
}

function updateAnswerFour() {
    answerFourEl.textContent = `Array length: ${todos.length}`;

}

function reverseTodoList() {
    todos.reverse();
    updateAnswerSix();
}

function updateAnswerFive() {
    answerFiveEl.textContent = `Updated Todo list: ${todos.join(", ")}`;
}

function updateAnswerSix() {
    answerSixEl.textContent = `Reversed Todo list: ${todos.join(", ")}`;
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    updateAnswerFour();
    updateAnswerFive();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    removeLastValue();
    removeFirstValue();
    addShiftAndPopValues()
    reverseTodoList();
    render();
});
