title = document.querySelector('.title');
let turn = "X";
let squares = []
function result(num1,num2,num3)
{

    title.innerHTML = 'Winner';
            document.getElementById('item'+num1).style.background = '#008b8b';
            document.getElementById('item'+num2).style.background = '#008b8b';
            document.getElementById('item'+num3).style.background = '#008b8b';
            setInterval(function(){title.innerHTML += '.'},1000);
            setTimeout(function(){location.reload()},4000);
}

function winner()
{
    for (let i = 1; i<10; i++) 
    {
        squares[i] = document.getElementById('item' + i).innerHTML;
        
    } 
    
        if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
        {
            
result(1,2,3)

        } 

    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '')
    {
result(4,5,6)
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '')
    {
result(7,8,9)
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '') 
    {
result(1,4,7)

    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != '') 
    {
result(2,5,8)
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '') 
    {
result(3,6,9)
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') 
    {
result(1,5,9)
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') 
    {
result(3,5,7)
    }
        
}

function game(id)
{
    let element = document.getElementById(id)
    if (turn == "X" && element.innerHTML == '')
    {
        element.innerHTML = 'X'
        turn = 'O';
        title.innerHTML = 'O';
    }
    else if (turn == 'O' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
    winner();
} 