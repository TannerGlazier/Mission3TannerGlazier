﻿const { alert } = require("bootstrap");

//grade weights
var assignment = 0.55;
var group = 0.05;
var quiz = 0.1;
var exam = 0.2;
var intex = 0.1;

//Score and letter grade 
var score = 0;
var letter = ""
var print = ""

$("#btnSend").click(function () {
    // Generate Score
    score = ($('#assignment').val() * assignment) + ($('#group').val() * group) + ($('#quiz').val() * quiz) + ($('#exam').val() * exam) + ($('#intex').val() * intex)

    //Determine letter grade based on score
    if (score >= 94) {
        letter = "A"
    }
    else if (score >=90){
        letter = "A-"
    }
    else if (score >= 87) {
        letter = "B+"
    }
    else if (score >= 84) {
        letter = "B"
    }
    else if (score >= 80) {
        letter = "B-"
    }
    else if (score >= 77) {
        letter = "C+"
    }
    else if (score >= 74) {
        letter = "C"
    }
    else if (score >= 70) {
        letter = "C-"
    }
    else if (score >= 67) {
        letter = "D+"
    }
    else if (score >= 64) {
        letter = "D"
    }
    else if (score >= 60) {
        letter = "D-"
    }
    else {
        letter = "E"
    }

    alert("Grade: " + letter + " Score: " + score.toFixed(2));
    print = "Grade: " + letter + " Score: " + score.toFixed(2);
    $('printgrades').innerHTML = print;
    
});