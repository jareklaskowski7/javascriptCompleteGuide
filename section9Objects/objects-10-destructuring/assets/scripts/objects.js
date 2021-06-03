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
    id: Math.random().toString(),
    info: {
      title,
      [extraName]: extraValue
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    //otherProps is the name of my choice
    if (!('info' in movie)) {
      //
    }
    if (movie.info === undefined) {
      //
    }
    const {info, ...otherProps} = movie;
    if (info) {
      //
    }
    console.log(otherProps);
    const {title: movieTitle} = info;
    let text = movieTitle + ' - ';
    for (const key in info)
      if (key !== 'title')
        text += `${key}: ${info[key]}`;
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
