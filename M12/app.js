const inputs = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-btn");
const output =document.querySelector("#output");


checkButton.addEventListener("click", checkTriangle);

function checkTriangle(){
    const sumOfAngles = calculateSumofAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    
    if (sumOfAngles === 0){
        output.innerText="Please fill the necessary values."
    }
    else{
        if(sumOfAngles===180){
            output.innerText="That's Right It is a triangle."
        }
        else{
            output.innerText="Oops! This is not a Triangle."
        }
    }
    
}

function calculateSumofAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

