import {generateRandomNumber} from './util.js';
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и y меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const DESCRIPTIONS = [
  'Закат над горами.',
  'Лес в туманной дымке.',
  'Цветущее поле маков.',
  'Могучий водопад шумит.',
  'Осенние листья кружатся.',
  'Милый котенок спит.',
  'Лев рычит в саванне.',
  'Птица летит над морем.',
  'Дельфины играют в волнах.',
  'Сова смотрит внимательно.',
  'Счастливая семья гуляет.',
  'Девушка читает книгу.',
  'Мужчина смотрит вдаль.',
  'Дети играют в парке.',
  'Танцоры в ярких костюмах.',
  'Ночной город в огнях.',
  'Узкие улочки Европы.',
  'Высокие небоскребы растут.',
  'Площадь с историческим зданием.',
  'Мост над рекой ночью.',
  'Яркие краски смешиваются.',
  'Чашка горячего кофе.',
  'Старые книги лежат.',
  'Одинокий стул стоит.',
  'Звездное небо ночью.'
];
const NAMES = [
  'Александр',
  'Даниил',
  'Максим',
  'Артем',
  'Лео',
  'Эван',
  'Марк',
  'Феликс',
  'Роман',
  'Аврора',
  'Эмилия',
  'София',
  'Изабелла',
  'Мия',
  'Лея',
  'Амелия',
  'Элина',
  'Виолетта'
];

const NUMBER_OF_DESCRIPTIONS = 25;
const MIN_COUNT_LIKES = 15;
const MIN_COUNT_COMMENTS = 0;
const MIN_RANGE_AVATAR = 1;
const MIN_NAME_INDEX = 0;
const MIN_MESSAGE_INDEX = 0;
const MAX_COUNT_LIKES = 200;
const MAX_COUNT_COMMENTS = 30;
const MAX_RANGE_AVATAR = 6;
const MaxNameIndex = NAMES.length - 1;
const MaxMessageIndex = MESSAGES.length - 1;


const getArrayComments = () =>
  Array.from({length: generateRandomNumber(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS)}, (valueOfComments,indexComments)=> (
    {
      id: indexComments + 1,
      avatar: `img/avatar-${generateRandomNumber(MIN_RANGE_AVATAR, MAX_RANGE_AVATAR)}.svg`,
      message: MESSAGES[generateRandomNumber(MIN_MESSAGE_INDEX,MaxMessageIndex)],
      name: NAMES[generateRandomNumber(MIN_NAME_INDEX,MaxNameIndex)]
    }
  ));


const getArrayPhotoDescription = () =>
  Array.from({length: NUMBER_OF_DESCRIPTIONS}, (valueOfDescription,indexPhoto) => (
    {
      id:indexPhoto + 1,
      url: `photos/${indexPhoto + 1}.jpg`,
      description: DESCRIPTIONS[indexPhoto],
      likes: generateRandomNumber(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
      comments: getArrayComments()
    }
  )
  );

getArrayPhotoDescription();
