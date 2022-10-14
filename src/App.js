import { useEffect, useState } from "react";
import "./App.css";
import { AddMovie } from "./components/add movie";
import { SearchMovie } from "./components/filter";
import { MovieCard } from "./components/movie card";
import { Movies } from "./data";

function App() {
  const [movies, setMovies] = useState([]);
  const[filter,setFilter]=useState("")

  useEffect(() => {
    setMovies(Movies);
  }, []);

  useEffect(() => {
    if (filter === "") {
      setMovies(Movies);
    } else {
      setMovies(Movies.filter((Movie) => {
         return Movie.title.includes(filter)
          Movie.rating.includes(filter);
        })
      );
    }
  }, [filter]);

  const handleAddMovie = (text,text2,text3,text4) => {
    const newItem = {
      id: new Date().getTime(),
      title: text,
      description:text2,
      posterUrl:text3,
      rating:text4,
    };
    setMovies([...movies, newItem]);
  };

  const handleSetFilter = (text) => {
    console.log(text);
    setFilter(text);
  };

  return (
    <div className="App">
      <AddMovie addMovie={handleAddMovie}/>
      <SearchMovie setFilter={handleSetFilter}/>
      {movies && movies.map((mov)=>(
        <MovieCard key={mov.id} el={mov} />
      ))}
    </div>
  );
}

export default App;
