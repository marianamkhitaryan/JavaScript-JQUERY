let score1 = 0;
let score2 = 0;
document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;

function scores(){
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    document.getElementById("number1").innerHTML = num1;
    document.getElementById("number2").innerHTML = num2;
        if(num1>num2){
            score1++;
            document.getElementById("score1").innerHTML = score1;
            document.getElementById("score2").innerHTML = score2;

        }else{
            score2++;
            document.getElementById("score1").innerHTML = score1;
            document.getElementById("score2").innerHTML = score2;
        }
        if(score1==10){
            document.getElementById("score1").innerHTML = "You win!";
            score1 = 0;
            score2 = 0;
            num1 = 0;
            num2 = 0;
            document.getElementById("number1").innerHTML = num1;
            document.getElementById("number2").innerHTML = num2;
        }else if(score2==10){
            document.getElementById("score2").innerHTML = "You win!";
            score1 = 0;
            score2 = 0;
            num1 = 0;
            num2 = 0;
            document.getElementById("number1").innerHTML = num1;
            document.getElementById("number2").innerHTML = num2;
        }
       
} 

function reset(){
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").innerHTML = score1;
    document.getElementById("score2").innerHTML = score2;
    num1 = 0;
    num2 = 0;
    document.getElementById("number1").innerHTML = num1;
    document.getElementById("number2").innerHTML = num2;

}

function input(){
    const value1 = document.getElementById("player1").value;
    const value2 = document.getElementById("player2").value;
    document.getElementById("player1_name").innerHTML = value1;
    document.getElementById("player2_name").innerHTML = value2;

}










