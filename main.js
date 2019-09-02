var count=0;
function handleClick(btnVal){

var result=document.getElementById(btnVal)
    count+=1;
    if(btnVal == 10){
        count=0;
        document.getElementById('1').innerText='+'
        document.getElementById('2').innerText='+'
        document.getElementById('3').innerText='+'
        document.getElementById('4').innerText='+'
        document.getElementById('5').innerText='+'
        document.getElementById('6').innerText='+'
        document.getElementById('7').innerText='+'
        document.getElementById('8').innerText='+'
        document.getElementById('9').innerText='+'
        document.getElementById('chance').innerHTML = "Player 1's chance";


    }
    else if(document.getElementById('chance').innerHTML == "Player 1 wins"){

    }
    else if(document.getElementById('chance').innerHTML == "Player 2 wins"){

    }
    
    
  else if(count%2!=0){
    if(result.innerText=='+'){
    document.getElementById('chance').innerHTML = "Player 2's chance";
  result.innerText='O'
  checkWinner();
}else{
    alert("Select different box")
}

}
else{
    if(result.innerText=='+'){
    document.getElementById('chance').innerHTML = "Player 1's chance";
    result.innerText='X'
    checkWinner();
}
else{
    alert("Select different box")
}
}

}

function checkWinner(){


    if(count<=4){
        return
    }
    else{

        if(document.getElementById('1').innerText=='O' && document.getElementById('2').innerText=='O' && document.getElementById('3').innerText=='O'){

            document.getElementById('chance').innerHTML = "Player 1 wins";

        }
        else  if(document.getElementById('4').innerText=='O' && document.getElementById('5').innerText=='O' && document.getElementById('6').innerText=='O'){

            document.getElementById('chance').innerHTML = "Player 1 wins";

        }
        else  if(document.getElementById('7').innerText=='O' && document.getElementById('8').innerText=='O' && document.getElementById('9').innerText=='O'){

            document.getElementById('chance').innerHTML = "Player 1 wins";

        }
        else  if(document.getElementById('1').innerText=='O' && document.getElementById('4').innerText=='O' && document.getElementById('7').innerText=='O'){

            document.getElementById('chance').innerHTML = "Player 1 wins";

        }
        else  if(document.getElementById('2').innerText=='O' && document.getElementById('5').innerText=='O' && document.getElementById('8').innerText=='O'){

            document.getElementById('chance').innerHTML = "Player 1 wins";

        }
        else  if(document.getElementById('3').innerText=='O' && document.getElementById('6').innerText=='O' && document.getElementById('9').innerText=='O'){

            document.getElementById('chance').innerHTML = "Player 1 wins";

        }
        else  if(document.getElementById('1').innerText=='O' && document.getElementById('5').innerText=='O' && document.getElementById('9').innerText=='O'){

            document.getElementById('chance').innerHTML = "Player 1 wins";

        }
        else  if(document.getElementById('3').innerText=='O' && document.getElementById('5').innerText=='O' && document.getElementById('9').innerText=='O'){

            document.getElementById('chance').innerHTML = "Player 1 wins";

        }

        else if(document.getElementById('1').innerText=='X' && document.getElementById('2').innerText=='X' && document.getElementById('3').innerText=='X'){

            document.getElementById('chance').innerHTML = "Player 2 wins";

        }
        else  if(document.getElementById('4').innerText=='X' && document.getElementById('5').innerText=='X' && document.getElementById('6').innerText=='X'){

            document.getElementById('chance').innerHTML = "Player 2 wins";

        }
        else  if(document.getElementById('7').innerText=='X' && document.getElementById('8').innerText=='X' && document.getElementById('9').innerText=='X'){

            document.getElementById('chance').innerHTML = "Player 2 wins";

        }
        else  if(document.getElementById('1').innerText=='X' && document.getElementById('4').innerText=='X' && document.getElementById('7').innerText=='X'){

            document.getElementById('chance').innerHTML = "Player 2 wins";

        }
        else  if(document.getElementById('2').innerText=='X' && document.getElementById('5').innerText=='X' && document.getElementById('8').innerText=='X'){

            document.getElementById('chance').innerHTML = "Player 2 wins";

        }
        else  if(document.getElementById('3').innerText=='X' && document.getElementById('6').innerText=='X' && document.getElementById('9').innerText=='X'){

            document.getElementById('chance').innerHTML = "Player 2 wins";

        }
        else  if(document.getElementById('1').innerText=='X' && document.getElementById('5').innerText=='X' && document.getElementById('9').innerText=='X'){

            document.getElementById('chance').innerHTML = "Player 2 wins";

        }
        else  if(document.getElementById('3').innerText=='X' && document.getElementById('5').innerText=='X' && document.getElementById('7').innerText=='X'){

            document.getElementById('chance').innerHTML = "Player 2 wins";


    }
    else{

        if(count==9){
            document.getElementById('chance').innerHTML = "DRAW";
        }
    }



    }
}
