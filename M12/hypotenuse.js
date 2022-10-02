const inputs = document.querySelectorAll(".input");
const submitBtn =document.querySelector("#submit-btn");
const output =document.querySelector("#output");


submitBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value), Number(inputs[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares);
    output.innerText ="Hypotenuse is "+hypotenuse;
    
}

function calculateSumOfSquares(side1, side2){
    const sumOfSquares = side1*side1 + side2*side2;
    return sumOfSquares;
}