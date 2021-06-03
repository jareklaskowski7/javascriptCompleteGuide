const addMovieModal = document.getElementById('add-modal');
const deleteMovieModal = document.getElementById('delete-modal');

const startAddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const backdrop = document.getElementById('backdrop');

const movies = [];

// Modals:
const closeAddMovieModal = () => {
  addMovieModal.classList.remove('visible');
  toggleBackdrop();
};

const closeDeleteMovieModal = () => {
  deleteMovieModal.classList.remove('visible');
  toggleBackdrop();
};

const showAddMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const showDeleteMovieModal = () => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
};

// Handlers:
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  clearMovieInput();

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeAddMovieModal();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  clearMovieInput();
  closeAddMovieModal();
  closeDeleteMovieModal();
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  clearMovieInput();
  closeAddMovieModal();
};

const deleteMovieHandler = movieId => {
  for (let idx = 0; movies.length; idx++)
    if (movies[idx].id === movieId) {
      movies.splice(idx, 1);
      const listRoot = document.getElementById('movie-list');
      listRoot.children[idx].remove();
      break;
    }

  closeDeleteMovieModal();
  updateUI();
};

const startDeleteMovieHandler = movieId => {
  showDeleteMovieModal();

  const cancelDeleteButton = deleteMovieModal.querySelector('.btn--passive');
  cancelDeleteButton.removeEventListener('click', closeDeleteMovieModal);
  cancelDeleteButton.addEventListener('click', closeDeleteMovieModal);

  let confirmDeleteButton = deleteMovieModal.querySelector('.btn--danger');
  confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true));
  confirmDeleteButton = deleteMovieModal.querySelector('.btn--danger');
  confirmDeleteButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const clearMovieInput = () => {
  for (const usrInput of userInputs)
    usrInput.value = '';
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const updateUI = () => {
  if (movies.length === 0)
    entryTextSection.style.display = 'block';
  else
    entryTextSection.style.display = 'none';
};

startAddMovieButton.addEventListener('click', showAddMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
