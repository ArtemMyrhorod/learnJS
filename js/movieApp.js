let numberOfFilms = +prompt('How many movies did you watch?');
let movieName = prompt('Name of hte last watched movies?');
let rateOfMovie = prompt('What is your rate for this movie?');
let movieName2 = prompt('Name of hte last watched movies?');
let rateOfMovie2 = prompt('What is your rate for this movie?');
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}
personalMovieDB.movies[movieName] = rateOfMovie;
personalMovieDB.movies[movieName2] = rateOfMovie2;

console.log(personalMovieDB)

