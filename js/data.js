import {randomFractionalValue, giveRandomNumber} from './support-function';

let x = 0;

const getAvatarImgUrl = () => `img/avatars/user${(++x).toString().padStart(2, '0')}.png`;

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkInOutTime = ['12:00', '13:00', '14:00'];

const description = ['большое помещение', 'маленькое помещение'];

const links = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


// Начало функции

const getMockOffer = () => {
  const getRandomFeatures = features.sort(() => Math.random() - 0.5).slice(0, giveRandomNumber(1, 6));
  const getRandomPhotos = links.sort(() => Math.random() - 0.5).slice(0, giveRandomNumber(1, 3));
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
      features: getRandomFeatures,
      description: description[giveRandomNumber(0, 1)],
      photos: getRandomPhotos,
    },
    location: location,
  };
};

const arrHousingOptions = [];

for (let i = 0; i < 10; i++) {
  arrHousingOptions.push(getMockOffer());
}

export {getMockOffer};
//console.log(arrHousingOptions);
