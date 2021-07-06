//Первая функия

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

//randomFractionalValue(3, 9, 3);

//Новый раздел

let xx = 0;

const getAvatarImgUrl = () => `img/avatars/user${(++xx).toString().padStart(2, '0')}.png`;

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkInOutTime = ['12:00', '13:00', '14:00'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const description = ['большое помещение', 'маленькое помещение'];

const links = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


// Начало функции

const getMockOffer = () => {
  const location = {
    lat: randomFractionalValue(35.65000, 35.70000, 5),
    lng: randomFractionalValue(139.70000, 139.80000, 5),
  };
  return {
    author: {
      avatar: getAvatarImgUrl(),
    },
    offer: {
      title: 'Вариант жилья',
      address: `${location.lat}, ${location.lng}`,
      price: giveRandomNumber(2000, 6000),
      type: types[giveRandomNumber(0, 4)],
      rooms: giveRandomNumber(1, 4),
      guests: giveRandomNumber(1, 8),
      checkin: checkInOutTime[giveRandomNumber(0, 2)],
      checkout: checkInOutTime[giveRandomNumber(0, 2)],
      features: features[giveRandomNumber(0, 5)],
      description: description[giveRandomNumber(0, 1)],
      photos: links[giveRandomNumber(0, 2)],
    },
    location: location,
  };
};

const arrHousingOptions = [];

for (let io = 0; io < 10; io++) {
  arrHousingOptions.push(getMockOffer());
}

console.log(arrHousingOptions);
