import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGJmNTJhMzgwYjQzZjUzNjc5M2I1YTE0MWUyNTNhNyIsIm5iZiI6MTc0MDE0MTk3OC44OTEsInN1YiI6IjY3Yjg3NTlhNDQ0ZGQ3ZmNlZmJhNzIxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HXDL6y0k3ACbiRKdu14ueWcPveCnyEasujEGnARUGkE",
  },
};

export async function fetchPopularTitles() {
  const url = "https://api.themoviedb.org/3/movie/popular";

  const response = await axios.get(url, options);
  return response.data;
}

export async function fetchWithQuery(query) {
  const url = "https://api.themoviedb.org/3/search/movie";
  const o = {
    ...options,
    params: { query },
  };

  const response = await axios.get(url, o);
  return response.data;
}

export async function fetchFilmDetails(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}`;
  const response = await axios.get(url, options);
  return response.data;
}

export async function fetchFilmCredits(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
  const response = await axios.get(url, options);
  return response.data;
}

export async function fetchFilmReviews(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;
  const response = await axios.get(url, options);
  return response.data;
}
