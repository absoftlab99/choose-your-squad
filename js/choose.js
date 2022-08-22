function getPlayerNames(){
        
}

document.getElementById('btn1').addEventListener('click', function(){
    const listItem = document.getElementById('player1').innerText;
    const ol = document.querySelector('#list');
    const li = document.createElement('li');
    li.innerText = listItem;
    ol.appendChild(li);
})