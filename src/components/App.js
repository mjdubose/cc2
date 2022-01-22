import React, {useState,  useEffect} from 'react';
import '../style.css';
import {Route, Routes} from "react-router-dom";
import MovieIndex from "./MovieIndex";
import MovieShow from "./MovieShow";
import MovieNew from './MovieNew';
const LOCAL_STORAGE_KEY = 'local.movies'

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies && Array.isArray(movies) && movies.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies))
        }
    }, [movies]);

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (storedMovies) setMovies(storedMovies);
    }, []);

    const addMovie = (movie) =>{
        let movieList = [...movies, movie];
        setMovies(movieList);
        if (movies && Array.isArray(movies) && movies.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies))
        }
    }

    const deleteMovie =(id) => {
        let movieList = movies.filter(item => item.id !== id);
        setMovies(movieList);
    }

    const getMovie=(id)=>{
        if (movies.length > 0) {
            return movies.filter(item => item.id === id);
        } else {
            const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            if (storedMovies) setMovies(storedMovies);
            return storedMovies.filter(item => item.id === id);
        }
    }

    return (
        <Routes>
            <Route path="/" element = {<MovieIndex movies={movies} />} />
            <Route path="/movies/new" element = {<MovieNew addMovie={addMovie}  />} />
            <Route path="movies/:id" element={<MovieShow getMovie={getMovie} deleteMovie={deleteMovie} /> } />
        </Routes>
    )
}

export default App;

