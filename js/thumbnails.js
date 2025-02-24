const container = document.createDocumentFragment();
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const picturesList = document.querySelector('.pictures');

const createThumbnails = (photo) => {

  const picture = templatePicture.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');
  pictureImg.src = photo.url;
  pictureImg.alt = photo.description;
  pictureLikes.textContent = photo.likes;
  pictureComments.textContent = photo.comments.length;
  return picture;
};
const renderThumbnails = (photos) => {
  photos.forEach((photo) => {
    const picture = createThumbnails(photo);

    container.appendChild(picture);
  });

  picturesList.appendChild(container);
};

export {renderThumbnails};

