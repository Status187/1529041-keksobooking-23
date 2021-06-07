/*let max = 100;

let random = Math.round(Math.random(max) * max);

console.log(random);*/
//Первая функия
let giveRandomNumber = function (min, max) {
  (max <= min || min <= 0) ? ('Неверно введены данные') : giveRandomNumber = Math.round(Math.random() * max);

  return giveRandomNumber;
};
//Вторая функция
giveRandomNumber(2, 20);

let giveRandomCoordinate = function (min, max) {
  (max <= min || min <= 0) ? ('Неверно введены данные') : giveRandomCoordinate = Math.random() * max;
  return giveRandomCoordinate;
};

giveRandomCoordinate(2, 100);
