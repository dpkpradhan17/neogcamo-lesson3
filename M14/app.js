var inputs = document.querySelectorAll(".input");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector("#output");

checkBtn.addEventListener("click", clickHandler);

function clickHandler(){
    var initial = Number(inputs[0].value);
    var stock = Number(inputs[1].value);
    var current = Number(inputs[2].value);

    if (initial === 0 || stock=== 0 || current === 0){
        showMessage("Please fill the details properly🙏")
    }
    else{
        calculateProfitAndLoss(initial,stock,current);
    }
    
}

function calculateProfitAndLoss(initial, stock, current){
    if(initial > current){
        var loss= (initial-current)*stock;
        var lossPercentage = (loss/initial)*100;
        showMessage(`😭😖Oops you are in loss of ${loss} and loss percentage is ${lossPercentage}%`)
    }
    else if(current>initial){
        var profit = (current-initial)*stock;
        var profitPercentage =(profit/initial)*100;
        showMessage(`🥳🥳Yay! you are in profit of ${profit} and profit percentage is ${profitPercentage}`);
    }
    else{
        showMessage("🙂No Pain No Gain🙂");
    }
    
}

function showMessage(message){
    output.innerText = message;
}


