import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import MovieDisplay from "./component/MovieDisplay";
import Form from "./component/Form";

export default function App() {
  
  const apiKey="25bd6601";
  const [movie,setMovie]=useState(null);

  const getMovie=async(searchTerm)=>{
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  }


  useEffect(() => {
    getMovie("Super");
  }, []);


  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}




