var okBtn = document.getElementById("okBtn");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

okBtn.addEventListener("click", okClick);

function okClick(){
    var word = document.getElementById("textInput").value;
    var wordP = document.createElement("p");
    wordP.innerText = word;
    input1.appendChild(wordP);

    var letter1 = document.getElementById("selectedLetter").value;
    var letter2 = document.getElementById("changedLetter").value;
    var letter1P = document.createElement("p");
    letter1P.innerText = letter1 + " " + "-->" + " " + letter2;
    input2.appendChild(letter1P);

    var letter2P = document.createElement("p");
    letter2P.innerText = word.replace(new RegExp(letter1,'gi'), letter2);
    input3.appendChild(letter2P);
}