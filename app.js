let inputEle = document.querySelector('#inp');
console.log(inputEle);

let btnTranslate = document.querySelector("#btn-translate")
console.log(btnTranslate);

let translatedText = document.querySelector("#translated-text");
console.log(btnTranslate); 
btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("cclicked");
    translatedText.innerText = "translated: "+ inputEle.value;
})