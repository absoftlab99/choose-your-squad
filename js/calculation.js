//player expence
document.getElementById('calculate').addEventListener('click', function(){
    const playerPrice = fieldValue('player-price')
    const totalPlayerPrice = playerPrice * listLenght();
    const playerExpenceText = document.getElementById('player-expence');
    playerExpenceText.innerText = totalPlayerPrice;
    return totalPlayerPrice;
})

document.getElementById('calculate-total').addEventListener('click', function(){
    const player = fieldValue('player-price') * listLenght();
    const manager = fieldValue('manager');
    const coach = fieldValue('coach');
    const total = player + manager + coach;
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
