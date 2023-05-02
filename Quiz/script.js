let data;
let id = 0;
let score = 0;
let start = false;

function question() {

    start = true;

    for (const element of data) {

        if (element["ID"] == id) {

            console.log(element);

            console.log(`ID = ${id}, ANS = ${element["ANSID"]}`);
    
            document.getElementById('question').innerHTML = element["QUESTION"];
    
            document.getElementById('ans1').innerHTML = element["ANSWER1"];
            document.getElementById('ans2').innerHTML = element["ANSWER2"];
            document.getElementById('ans3').innerHTML = element["ANSWER3"];

            break;

        }

    }

}
// downcount() outside of start-check
function ans1() {
    if (data[id]["ANSID"] == 1 && start) {
        id++;
        countUp();
        question(); 
    } else {
        countDown();
    }
}

function ans2() {
    if (data[id]["ANSID"] == 2 && start) {
        id++;
        countUp();
        question();    
    } else {
        countDown();
    }
}
function ans3() {
    if (data[id]["ANSID"] == 3 && start) {
        id++;
        countUp();
        question();
    } else {
        countDown();
    }
}
// 
const countUp = () => {
    score++;
    document.getElementById('score').innerHTML = `Your score: ${score}/10`;
}
const countDown = () => {
    score--;
    document.getElementById('score').innerHTML = `Your score: ${score}/10`;
}

// Function to read the csv-file
window.onload = function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "db.csv", true);
    xhr.responseType = "text";
    xhr.onload = function() {
        data = Papa.parse(xhr.responseText, { header: true }).data;
    };
    xhr.send();
}