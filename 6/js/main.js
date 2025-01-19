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
const RANGE_FOR_NAME = [0,NAMES.length - 1];
const RANGE_FOR_MESSAGE = [0,MESSAGES.length - 1];
const RANGE_FOR_LIKES = [15,200];
const RANGE_FOR_AVATAR = [0,6];
const RANGE_FOR_COMMENTS = [0,30];
const NUMBER_OF_DESCRIPTIONS = Array.from({length:25} ,(_,index) => index + 1);


const generateRandomNumber = (min,max) => {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};


const arrayFromDescription = Array.from({length: NUMBER_OF_DESCRIPTIONS.length}, (l, indexPhoto) => (
  {
    id:indexPhoto + 1,
    url: `photos/${NUMBER_OF_DESCRIPTIONS[indexPhoto]}.jpg`,
    description: DESCRIPTIONS[indexPhoto],
    likes: generateRandomNumber(RANGE_FOR_LIKES[0], RANGE_FOR_LIKES[1]),
    comments: Array.from({length: generateRandomNumber(RANGE_FOR_COMMENTS[0], RANGE_FOR_COMMENTS[1])}, (k,indexComments)=> (
      {
        id: indexComments + 1,
        avatar: `img/avatar-${generateRandomNumber(RANGE_FOR_AVATAR[0], RANGE_FOR_AVATAR[1])}.svg`,
        message: MESSAGES[generateRandomNumber(RANGE_FOR_MESSAGE[0],RANGE_FOR_MESSAGE[1])],
        name: NAMES[generateRandomNumber(RANGE_FOR_NAME[0],RANGE_FOR_NAME[1])]
      }
    ))
  }
)
);
