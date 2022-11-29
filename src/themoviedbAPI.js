const APIKEY = '565e4989d784811de7dff7d665000157';
const APIURL = 'https://api.themoviedb.org/';

export const getTrandingMovies = async () => {
  const fetchResult = await (
    await fetch(APIURL + `3/trending/movie/day?api_key=${APIKEY}`)
  ).json();
  return fetchResult.results;
};

export const searchMovie = async name => {
  const fetchResult = await (
    await fetch(APIURL + `3/search/movie?api_key=${APIKEY}&query=${name}`)
  ).json();
  return fetchResult.results;
};

export const getMovieDetails = async movieId => {
  const fetchResult = await (
    await fetch(APIURL + `3/movie/${movieId}?api_key=${APIKEY}`)
  ).json();
  return fetchResult;
};

export const getMovieCredits = async credit_id => {
  const fetchResult = await (
    await fetch(APIURL + `3/credit/${credit_id}?api_key=${APIKEY}`)
  ).json();
  return fetchResult.results;
};

export const getMovieReviews = async movieId => {
  const fetchResult = await (
    await fetch(APIURL + `3/review/${movieId}?api_key=${APIKEY}`)
  ).json();
  return fetchResult.results;
};
  