var location1 = 3; //хранение позиции клетки корабля
var location2 = 4;
var location3 =5;

// перемненная для номера текущей попытки
var guess; // undefined

// переменная для количества попаданий
var hits = 0;

//переменная для количества попыток
var guesses = 0;

//хранение информации о том, потоплен корабль или нет
var isSunk = false;

while (isSunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number 0-6):');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number');
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert('HIT!');

            if (hits == 3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        }
        else {
            alert('MISS!');
        }
    }
}
var stats = 'You took ' + guesses + ' guesses to sink the battleship, ' +
        'which means your shooting accuracy was ' + (3/guesses);
alert(stats);