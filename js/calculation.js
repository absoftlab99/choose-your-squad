//player expence
document.getElementById('calculate').addEventListener('click', function(){
    const playerPrice = fieldValue('player-price')
    const totalPlayerPrice = playerPrice * listLenght();
    if(isNaN(totalPlayerPrice) === false){
        const playerExpenceText = document.getElementById('player-expence');
        playerExpenceText.innerText = totalPlayerPrice;
        return totalPlayerPrice;
    }
    else{
        alert('Please input valid player price');
        const playerExpenceText = document.getElementById('player-expence');
        playerExpenceText.innerText = '';
        const playerPrice = document.getElementById('player-price');
        playerPrice.value = '';
    }
})

document.getElementById('calculate-total').addEventListener('click', function(){
    const playerExpenceText = document.getElementById('player-expence');
    const playerExpenceString = playerExpenceText.innerText;
    const playerExpence = parseFloat(playerExpenceString);
    const manager = fieldValue('manager');
    if(isNaN(manager) === false){
        return manager;
    }
    else{
        alert('Please input valid manager price');
        const manager = document.getElementById('manager');
        manager.value = '';
    }
    const coach = fieldValue('coach');
    if(isNaN(coach) === false){
        return coach;
    }
    else{
        alert('Please input valid coach price');
        const coach = document.getElementById('coach');
        coach.value = '';
    }
    const total = playerExpence + manager + coach;
    const totalText = document.getElementById('total');
    totalText.innerText = total;
})

function listLenght(){
    const players = document.querySelectorAll('li');
    const playersNumber = players.length;
    return playersNumber;
}
//player + manager + cocha expence
function fieldValue(id){
    const managerCoachField = document.getElementById(id);
    const managerCoachString = managerCoachField.value;
    const managerCoach = parseFloat(managerCoachString);
    return managerCoach;
}
