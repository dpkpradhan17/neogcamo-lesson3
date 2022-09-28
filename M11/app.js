const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber =document.querySelector("#lucky-number");
const checkNumber= document.querySelector("#check-button");
const outputBox= document.querySelector("#output-box");

checkNumber.addEventListener("click", function check(){
    const dob= dateOfBirth.value;
    const sum= calculateSum(dob);
    if(sum && dob){
    checkLucky(sum,luckyNumber.value);}
    else{
        outputBox.innerText="Please Enter valid values.";
    }

});

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++){
        sum=sum+ Number(dob.charAt(index));
    }
    return sum;
}

function checkLucky(sum, luckyNumber){
    const checkLuck=sum%luckyNumber;
    if(checkLuck===0){
        outputBox.innerText="Your Birthday is Lucky!";
    }
    else{
        outputBox.innerText="Your Birthday is not lucky!!";
    }
}
