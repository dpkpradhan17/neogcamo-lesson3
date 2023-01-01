var likeBtn = document.querySelector("#button");
var likeCount = document.querySelector("#likeOP");
var counter=0;

likeBtn.addEventListener("click", likeHandler);

function likeHandler(){
    likeCount.innerText=("Thankyou! Follow me on Twitter👇 for more.")
}