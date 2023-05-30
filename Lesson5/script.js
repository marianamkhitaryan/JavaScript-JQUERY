
let playerX = "X";
let playerO = "O";
let turn = playerX;

$(".cell").click(function (){
    if (turn === playerX ){
        $(this).text(playerX);
        turn = playerO;
    }else{
        $(this).text(playerO);
        turn = playerX;
    }

    if($(".cell")[0].innerHTML == 'X' && $(".cell")[1].innerHTML == 'X' && $(".cell")[2].innerHTML == 'X'){
        $("h2").html("X won")
    }else if($(".cell")[3].innerHTML == 'X' && $(".cell")[4].innerHTML == 'X' && $(".cell")[5].innerHTML == 'X'){
        $("h2").html("X won")
    }else if($(".cell")[6].innerHTML == 'X' && $(".cell")[7].innerHTML == 'X' && $(".cell")[8].innerHTML == 'X'){
        $("h2").html("X won")
    }else if($(".cell")[0].innerHTML == 'X' && $(".cell")[3].innerHTML == 'X' && $(".cell")[6].innerHTML == 'X'){
        $("h2").html("X won")
    }else if($(".cell")[1].innerHTML == 'X' && $(".cell")[4].innerHTML == 'X' && $(".cell")[7].innerHTML == 'X'){
        $("h2").html("X won")
    }else if($(".cell")[2].innerHTML == 'X' && $(".cell")[5].innerHTML == 'X' && $(".cell")[8].innerHTML == 'X'){
        $("h2").html("X won")
    }else if($(".cell")[0].innerHTML == 'X' && $(".cell")[4].innerHTML == 'X' && $(".cell")[8].innerHTML == 'X'){
        $("h2").html("X won")
    }else if($(".cell")[2].innerHTML == 'X' && $(".cell")[4].innerHTML == 'X' && $(".cell")[6].innerHTML == 'X'){
        $("h2").html("X won")
    }else{
        console.log("");
    }

    if($(".cell")[0].innerHTML=='O' && $(".cell")[1].innerHTML == 'O' && $(".cell")[2].innerHTML == 'O'){
        $("h2").html("O won")
    }else if($(".cell")[3].innerHTML=='O' && $(".cell")[4].innerHTML == 'O' && $(".cell")[5].innerHTML == 'O'){
        $("h2").html("O won")
    }else if($(".cell")[6].innerHTML=='O' && $(".cell")[7].innerHTML =='O' && $(".cell")[8].innerHTML == 'O'){
        $("h2").html("O won")
    }else if($(".cell")[0].innerHTML=='O' && $(".cell")[3].innerHTML == 'O' && $(".cell")[6].innerHTML == 'O'){
        $("h2").html("O won")
    }else if($(".cell")[1].innerHTML=='O' && $(".cell")[4].innerHTML == 'O' && $(".cell")[7].innerHTML == 'O'){
        $("h2").html("O won")
    }else if($(".cell")[2].innerHTML=='O' && $(".cell")[5].innerHTML == 'O' && $(".cell")[8].innerHTML == 'O'){
        $("h2").html("O won")
    }else if($(".cell")[0].innerHTML=='O' && $(".cell")[4].innerHTML == 'O' && $(".cell")[8].innerHTML == 'O'){
        $("h2").html("O won")
    }else if($(".cell")[2].innerHTML=='O' && $(".cell")[4].innerHTML == 'O' && $(".cell")[6].innerHTML == 'O'){
        $("h2").html("O won")
    }else{
        console.log("");
    }
})



$("button").click(function(){
    $(".cell").html(" ");
    $("h2").html(" ");
    turn = playerX;
})

