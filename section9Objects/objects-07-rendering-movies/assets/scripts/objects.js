const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  )
    return;

  const newMovie = {
    id: Math.random(),
    info: {
      title,
      [extraName]: extraValue
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieEl = document.createElement('li');
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

addMovieBtn.addEventListener('click', addMovieHandler);
