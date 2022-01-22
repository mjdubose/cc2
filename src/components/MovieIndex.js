import React, {useState, useEffect, useCallback} from 'react';
import {Link} from "react-router-dom";



function MovieIndex({movies}) {
    const renderMovies = useCallback( (foundMovies)=> {
        return foundMovies.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"movies/" + post.id}>
                        <strong className="movie-name-two">{post.name}</strong>
                        <span className="movie-genre-two">{post.genre}</span>
                    </Link>
                </li>
            )
        })
    },[]);
    const [foundMovies, setFoundMovies] = useState([]);
    useEffect(() => {
        if (movies.length > 0) {
            setFoundMovies(movies);
        }
        renderMovies(foundMovies);
    }, []);


    function movieSearch(name) {
        if (name !== '') {
            setFoundMovies(foundMovies.filter(item => {
                if (item.name) {
                    return item.name.toLowerCase().includes(name.toLowerCase());
                }
                return false;
            }))
        } else {
            setFoundMovies(movies);
        }
    }

    return (
        <div>
            <div className="index-header">
                <div className="search-bar text-xs-left">
                    <input placeholder="search by name" onChange={event => movieSearch(event.target.value)}/>
                </div>
                <div className="add-movie-button">
                    <Link to="/movies/new" className="btn btn-primary">Add a Post </Link>
                </div>
            </div>
            <div className="movies-list">
                <div className="movie-info">
                    <h1>Movies</h1>
                    <div className="movie-name-genre">
                        <h2 className="movie-name">Movie Name</h2>
                        <h2 className="movie-genre">Movie Genre</h2>
                    </div>
                </div>
                <ul className="list-group">
                    {renderMovies(foundMovies)}
                </ul>
            </div>
        </div>
    )
}

export default MovieIndex;
