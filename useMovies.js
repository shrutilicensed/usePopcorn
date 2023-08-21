import { useState, useEffect } from "react";
const KEY = "8b113607";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setIsError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&S=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Sorry, error fetching your data");

          const data = await res.json();

          if (data.Response === "False")
            throw new Error("Sorry, movie not found");

          setMovies(data.Search);
          setIsError("");
        } catch (err) {
          if (err.name !== "AbortError") setIsError(err.message);
        } finally {
          setIsLoading(false);
        }
        if (!query.length) {
          setMovies([]);
          setIsError("");
          return;
        }
      }
      // handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, isError };
}
