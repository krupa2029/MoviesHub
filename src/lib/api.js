import { API_KEY } from "./apikey";

const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_API = "https://image.tmdb.org/t/p/w500/";

export async function getLatestMovies() {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Could not fetch Movies.");
  }

  return responseData;
}

export async function getMovieDetail(movie_id) {
  const response = await fetch(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
  );
  const loadedMovieDetail = await response.json();

  if (!response.ok) {
    throw new Error(loadedMovieDetail.message || "Could not fetch Movie-Data.");
  }

  // const loadedQuote = {
  //   id: quoteId,
  //   ...data,
  // };

  return loadedMovieDetail;
}
