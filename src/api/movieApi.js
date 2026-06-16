const API_KEY = "3130cafe";

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  );

  const data = await response.json();

  return data.Search || [];
};