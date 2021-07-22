function giveRandomNumber(min, max) {
  if (max <= min || min < 0) {
    throw new RangeError('Данные некорректны');
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//giveRandomNumber(3, 4);

//Вторая функция

function randomFractionalValue(min, max, fixedFractionValue) {
  if (max <= min || min < 0) {
    throw new RangeError('Данные некорректны');
  }
  const rand = min + Math.random() * (max - min);
  return Number(rand.toFixed(fixedFractionValue));
}

export {randomFractionalValue, giveRandomNumber};
