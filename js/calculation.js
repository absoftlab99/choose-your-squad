document.getElementById('calculate').addEventListener('click', function(){
    //get data from field
    const playerPriceField = document.getElementById('player-price');
    const playerPriceString = playerPriceField.value;
    const playerPrice = parseFloat(playerPriceString);
    const totalPlayerPrice = playerPrice * 5;

    const playerExpenceText = document.getElementById('player-expence');

    playerExpenceText.innerText = totalPlayerPrice;
})


