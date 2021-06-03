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
  console.log(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);
