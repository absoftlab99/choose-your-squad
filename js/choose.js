function getPlayerName(player){
        const listItem = document.getElementById(player).innerText;
        const ol = document.querySelector('#list');
        const li = document.createElement('li');
        li.innerText = listItem;
        ol.appendChild(li);  
}
function setPlayer(btn, player){
    const players = document.querySelectorAll('li');
    const playersNumber = players.length;
    if(playersNumber < 5){
        getPlayerName(player);
        const button = document.getElementById(btn);
        button.disabled = true;
        const btns = document.getElementById(btn);
        btns.innerText = '✔️ SELECTED';
        btns.classList = 'btn btn-disabled text-light w-100 rounded-0';
    }
    else{
        alert('You have already selected 5 cricketers.');
    }
}

    document.getElementById('btn1').addEventListener('click', function(){
        setPlayer('btn1', 'player1');
    })
    document.getElementById('btn2').addEventListener('click', function(){
        setPlayer('btn2', 'player2');
    })
    document.getElementById('btn3').addEventListener('click', function(){
        setPlayer('btn3', 'player3');
    })
    document.getElementById('btn4').addEventListener('click', function(){
        setPlayer('btn4', 'player4');
    })
    document.getElementById('btn5').addEventListener('click', function(){
        setPlayer('btn5', 'player5');
    })
    document.getElementById('btn6').addEventListener('click', function(){
        setPlayer('btn6', 'player6');
    })
    document.getElementById('btn7').addEventListener('click', function(){
        setPlayer('btn7', 'player7');
    })
    document.getElementById('btn8').addEventListener('click', function(){
        setPlayer('btn8', 'player8');
    })
    document.getElementById('btn9').addEventListener('click', function(){
        setPlayer('btn9', 'player9');
    })