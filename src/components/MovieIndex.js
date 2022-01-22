import React, {useState, useRef, useEffect} from 'react';
import {Link} from "react-router-dom";

//import {movieSearch} from '../actions/index';

function  MovieIndex({movies}) {

    function renderMovies() {
        return movies.map((post) => {
            return (
                <li className="list-group-item" key = {post.id}>
                    <Link to={"movies/" + post.id}>
                        <strong className="movie-name-two">{post.name}</strong>
                        <span className="movie-genre-two">{post.genre}</span>
                    </Link>
                </li>
            )
        })
    }

        return (
            <div>
                 <div className="index-header">
                    <div className="search-bar text-xs-left">
                        <input placeholder="search by name" onChange={(event) => this.props.movieSearch(event.target.value) } />
                    </div>
                    <div className ="add-movie-button">
                        <Link to ="/movies/new" className="btn btn-primary">Add a Post </Link>
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
                        {renderMovies() }
                    </ul>
                </div>
            </div>
        )

}

export default MovieIndex;
