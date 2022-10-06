const welcomeMsg = document.querySelector("#welcome-msg");
const quizForm =document.querySelector("#quiz");
const submitBtn =document.querySelector("#submit-btn");
const output =document.querySelector("#output");
const output1 =document.querySelector("#output1");

var username = prompt("Enter your username");

welcomeMsg.innerText = "Namaste🙏 "+ username;

const correctAnswers =["Deepak Pradhan","Odisha","None of these","Tangi","Ankleshwar"];

const highScores = [{
    name: "Deepak",
    score: "5"
},
{
    name: "xyz",
    score: "3"
}]

submitBtn.addEventListener("click", calculateScore)

function calculateScore(){
    let score=0;
    let index=0;
    var results = new FormData(quizForm);
    for (let value of results.values()){
        if(value===correctAnswers[index]){
            score= score+1
        }
        index=index+1;
    }
    showMessage("Your Score is " +score)
    hScores(score)
}

function hScores(score){
    for(i=0;i<highScores.length;i++){
        var check = highScores[i];
        if(score>=check.score){
            output1.innerText="Congratulations🎊 " +username +", you have broken all the records.."
        }
        else(
            output1.innerText="Nice " +username+ ", but you are not a top scorer.🙂"
        )
        break;
    }
}

function showMessage(message){
    output.innerText= message;
}