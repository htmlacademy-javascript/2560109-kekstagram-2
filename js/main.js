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

const range = {
  MIN_FOR_NAMES: 0,
  maxForNames: NAMES.length - 1,
  MIN_FOR_MESSAGES: 0,
  maxForMessages: MESSAGES.length - 1,
  MIN_FOR_LIKES: 15,
  MAX_FOR_LIKES: 200,
  MIN_FOR_AVATARS: 0,
  MAX_FOR_AVATARS:6,
  MIN_FOR_COMMENTS:0,
  MAX_FOR_COMMENTS:30
};

const generateRandomNumber = (min,max) => {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const arrayFromDescription = Array.from({length: NUMBER_OF_DESCRIPTIONS}, (valueOfDescription,indexPhoto) => (
  {
    id:indexPhoto + 1,
    url: `photos/${indexPhoto + 1}.jpg`,
    description: DESCRIPTIONS[indexPhoto],
    likes: generateRandomNumber(range.MIN_FOR_LIKES, range.MAX_FOR_LIKES),
    comments: Array.from({length: generateRandomNumber(range.MIN_FOR_COMMENTS, range.MAX_FOR_COMMENTS)}, (valueOfComments,indexComments)=> (
      {
        id: indexComments + 1,
        avatar: `img/avatar-${generateRandomNumber(range.MIN_FOR_AVATARS, range.MAX_FOR_AVATARS)}.svg`,
        message: MESSAGES[generateRandomNumber(range.MIN_FOR_MESSAGES,range.maxForMessages)],
        name: NAMES[generateRandomNumber(range.MIN_FOR_NAMES,range.maxForNames)]
      }
    ))
  }
)
);
