var btnTranslate =document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txt-input");
var outputBox= document.querySelector("#output")

var serverURL="https://api.funtranslations.com/translate/braille.json";

function urlConstructor(text){
    return serverURL+"?"+"text="+ text;
};
function errorHandle(error){
    console.log("error occured: "+error);
    alert("The server is busy. Please try later.")
}

function clickFunction(){
    var inputText = txtInput.value;
    fetch(urlConstructor(inputText))
        .then(response => response.json())
        .then(json=>{
            var translatedText= json.contents.translated;
            outputBox.innerText=translatedText;
        })
    .catch(errorHandler)
    
};
btnTranslate.addEventListener("click",clickFunction);