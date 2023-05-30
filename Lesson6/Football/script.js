const img = document.getElementById("ball");
const container = document.getElementById("container");

var imgCS = window.getComputedStyle(img);

var score1 = 0;
var score2 = 0;
var firstPlayer = document.getElementById("first");
var secondPlayer = document.getElementById("second");
firstPlayer.innerText = score1;
secondPlayer.innerText = score2;

//Keydown
document.onkeydown = checkKey;

function checkKey(e) {

    if (e.keyCode == '38' || e.keyCode == '87') {
        img.style.top = `${img.offsetTop - 10}px`;
    }
    else if (e.keyCode == '40' || e.keyCode == '83') {
        img.style.top = `${img.offsetTop + 10}px`;
    }
    else if (e.keyCode == '37' || e.keyCode == '65') {
        img.style.left = `${img.offsetLeft - 10}px`;
    }
    else if (e.keyCode == '39' || e.keyCode == '68') {
        img.style.left = `${img.offsetLeft + 10}px`;
    }

    //Scoring
    function scoring(){
        if(parseInt(imgCS.left) == 150){
            score1++;
            firstPlayer.innerText = score1;
            secondPlayer.innerText = score2;
            img.style.left = "670px";
            img.style.top = "280px";

        }
        if(parseInt(imgCS.left) == 1170){
            score2++;
            firstPlayer.innerText = score1;
            secondPlayer.innerText = score2;
            img.style.left = "670px";
            img.style.top = "280px";

        }
    

        if(parseInt(imgCS.top) == 0 || parseInt(imgCS.top) == 580){
            img.style.left = "670px";
            img.style.top = "280px";
        }
    }
       
    scoring()

    

}



// left = 37
// up = 38
// right = 39
// down = 40
