let numberOfFilms = +prompt('How many movies did you watch?');
if (numberOfFilms < 10) {
  alert('Quite few movies were watched');
} else if (numberOfFilms < 30) {
  alert('You are a classical watcher');
} else if (numberOfFilms >= 30) {
  alert('You are cool')
} else {
  alert('Something wrong')
}
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}
let movieName;
let rateOfMovie;
for (let i = 1; i < 3; i++) {
  movieName = prompt('Name of the last watched movies?');
  if (movieName === null || movieName.length === 0 || movieName.length > 50) {
    alert('Data is invalid. Try one more time.')
    i--;
    continue;
  }
  rateOfMovie = +prompt('What is your rate for this movie?');
  personalMovieDB.movies[`${i}. ${movieName}`] = rateOfMovie;
}


// personalMovieDB.movies[movieName] = rateOfMovie;

console.log(personalMovieDB)

