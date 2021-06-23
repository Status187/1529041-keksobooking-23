/*let max = 100;

let random = Math.round(Math.random(max) * max);

console.log(random);*/
//Первая функия

function giveRandomNumber(min, max) {
  if (max <= min || min <= 0) {
    throw new RangeError('Данные некорректны');
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);

}

giveRandomNumber(3, 4);

//Вторая функция

function randomFractionalValue(min, max, fixedFractionValue) {
  if (max <= min || min <= 0) {
    throw new RangeError('Данные некорректны');
  }
  const rand = min + Math.random() * (max - min);
  return Number(rand.toFixed(fixedFractionValue));

}

randomFractionalValue(3, 9, 3);
/*
let giveRandomCoordinate = function (min, max) {
  (max <= min || min <= 0) ? ('Неверно введены данные') : giveRandomCoordinate = Math.random() * max;
  return giveRandomCoordinate;
};

giveRandomCoordinate(2, 100);

*/
/*
let random;
let giveRandomNumber = function (min, max) {
  if (max <= min || min < 0) {
    return ('Неверно введены данные');
  } else {
    random = Math.round(Math.random() * (max - min)) + min;
  }
};

giveRandomNumber(1, 12);
console.log(random);
*/
