function getPlayerName(player){
        const listItem = document.getElementById(player).innerText;

        const ol = document.querySelector('#list');
        const li = document.createElement('li');
        li.innerText = listItem;
        ol.appendChild(li);

}
document.getElementById('btn1').addEventListener('click', function(){
    getPlayerName('player1');
    const button = document.getElementById('btn1');
    button.disabled = true;
    const btn = document.getElementById('btn1');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})
document.getElementById('btn2').addEventListener('click', function(){
    getPlayerName('player2');
    const button = document.getElementById('btn2');
    button.disabled = true;
    const btn = document.getElementById('btn2');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})
document.getElementById('btn3').addEventListener('click', function(){
    getPlayerName('player3');
    const button = document.getElementById('btn3');
    button.disabled = true;
    const btn = document.getElementById('btn3');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})
document.getElementById('btn4').addEventListener('click', function(){
    getPlayerName('player4');
    const button = document.getElementById('btn4');
    button.disabled = true;
    const btn = document.getElementById('btn4');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})
document.getElementById('btn5').addEventListener('click', function(){
    getPlayerName('player5');
    const button = document.getElementById('btn5');
    button.disabled = true;
    const btn = document.getElementById('btn5');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})
document.getElementById('btn6').addEventListener('click', function(){
    getPlayerName('player6');
    const button = document.getElementById('btn6');
    button.disabled = true;
    const btn = document.getElementById('btn6');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})
document.getElementById('btn7').addEventListener('click', function(){
    getPlayerName('player7');
    const button = document.getElementById('btn7');
    button.disabled = true;
    const btn = document.getElementById('btn7');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})
document.getElementById('btn8').addEventListener('click', function(){
    getPlayerName('player8');
    const button = document.getElementById('btn8');
    button.disabled = true;
    const btn = document.getElementById('btn8');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})
document.getElementById('btn9').addEventListener('click', function(){
    getPlayerName('player9');
    const button = document.getElementById('btn9');
    button.disabled = true;
    const btn = document.getElementById('btn9');
    btn.innerText = 'SELECTED';
    btn.classList = 'btn btn-disabled text-light w-100 rounded-0';
})