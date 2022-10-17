// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AddMovie } from "../components/add movie/index";
import { SearchMovie } from "../components/filter/index";
import { MovieCard } from "../components/movie-card/index";
import { Movies } from "../data";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setMovies(Movies);
  }, []);

  useEffect(() => {
    if (filter === "") {
      setMovies(Movies);
    } else {
      setMovies(
        Movies.filter((Movie) => {
          return Movie.title.includes(filter);
          // Movie.rating.includes(filter);
        })
      );
    }
  }, [filter]);

  const handleAddMovie = (text, text2, text3, text4) => {
    const newItem = {
      id: new Date().getTime(),
      title: text,
      description: text2,
      posterUrl: text3,
      rating: text4,
    };
    setMovies([...movies, newItem]);
  };

  const handleSetFilter = (text) => {
    console.log(text);
    setFilter(text);
  };
  return (
    <>
      <AddMovie addMovie={handleAddMovie} />
      <SearchMovie setFilter={handleSetFilter} />
      {movies &&
        movies.map((mov) => (
          <div key={mov.id}>
            <MovieCard el={mov} />
          </div>
        ))}
    </>
  );
};

export default HomePage;
