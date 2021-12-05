'use strict';

function createRandomNumber () {
  return Math.floor(Math.random() * 100);
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function game () {
  let tryingAmount = 10;
  return function repeat() {
    const randomNumber = createRandomNumber();
    const userNumber = prompt('Угадай число от 1 до 100');
    tryingAmount--;
    if (tryingAmount > 0) {
      if (isNumber(userNumber)) {
        if (userNumber > randomNumber) {
          console.log('Загаданное число меньше, осталось попыток', tryingAmount);
          repeat();
        } else if (userNumber < randomNumber) {
          console.log('Загаданное число больше, осталось попыток', tryingAmount);
          repeat();
        } else if (userNumber == randomNumber ) {
          console.log('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          const newGame = confirm('Попытки закончились, хотите сыграть еще?');
          if (newGame) {
            tryingAmount = 10;
            repeat();
          } else {
            console.log('Игра окончена');
          }
        }
      } else if (userNumber === null) {
        console.log('Игра окончена');
      } else {
        console.log('Введи число!');
        repeat();
      }
    } else {
      const newGame = confirm('Попытки закончились, хотите сыграть еще?');
      if (newGame) {
        tryingAmount = 10;
        repeat();
      } else {
        console.log('Игра окончена');
      }
    }
  }
}

let trying = game();
trying();
