var btnTranslate =document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txt-input");
var outputBox= document.querySelector("#output")

var serverURL="https://api.funtranslations.com/translate/braille.json";

function urlConstructor(text){
    return serverURL+"?"+"text="+ text;
};

function clickFunction(){
    var inputText = txtInput.value;
    fetch(urlConstructor(inputText))
        .then(response => response.json())
        .then(json=>{
            var translatedText= json.contents.translated;
            outputBox.innerText=translatedText;
        })
    
};
btnTranslate.addEventListener("click",clickFunction);