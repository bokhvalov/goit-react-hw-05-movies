const APIKEY = '565e4989d784811de7dff7d665000157'
const APIURL = 'https://api.themoviedb.org/'

export const getTrandingMovies = async () => {
    return await (
        await fetch(APIURL + `3/trending/movie/day?api_key=${APIKEY}`)
      ).json();
}

export const searchMovie = async (name) => {
    return await (
        await fetch(APIURL+`3/search/movie?api_key=${APIKEY}&query=${name}`)
      ).json();
}

export const getMovieDetails = async (movieId) => {
    return await (
        await fetch(APIURL + `3/movie/${movieId}?api_key=${APIKEY}`)
      ).json();
}

export const getMovieCredits = async (credit_id) => {
    return await (
        await fetch(APIURL + `3/credit/${credit_id}?api_key=${APIKEY}`)
      ).json();
}

export const getMovieReviews = async (movieId) => {
    return await (
        await fetch(APIURL + `3/review/${movieId}?api_key=${APIKEY}`)
      ).json();
}
