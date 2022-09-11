var btnTranslate = document.querySelector("#btn-translate");

 
var txtInput = document.querySelector("#txt-input");

var outputdiv = document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/cheunh.json"
function getTranslateUrl(text){
   return serverUrl + "?" + "text=" + text;
}

function errorhandler(){
   console.log("error occured");
   alert("Something worng with server try again ");
}

function clickEventHandler(){
   var inputtText=txtInput.value;
   fetch(getTranslateUrl(inputtText))
   .then(Response => Response.json())
   .then(json => outputdiv.innerHTML=json.contents.translated)
   .catch(errorhandler)
}
btnTranslate.addEventListener("click",clickEventHandler);

   