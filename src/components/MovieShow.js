import React from "react";
import {useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {
    Link,
    useParams
} from "react-router-dom";

export default function MovieShow( {getMovie, deleteMovie}) {
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
                let movies =getMovie(id);
            if (Array.isArray(movies)&& movies.length >0) {
             let selectedPost = movies;
                if (selectedPost) {
                    setPost(selectedPost);
                }
              }
    },[])

    const onDeleteClick=(e)=> {
        if (post.length> 0) {
            deleteMovie(post[0].id)
        }
         e.preventDefault();
    }
    if (post.length < 1){
             return (<div className="movie-show-box">
            <Link className="back-link" to="/">Back To Index</Link>
            <h3 className="show-title"></h3>
            <h6 className="show-field">Genre: </h6>
            <h6 className="show-field">Year: </h6>
            <h6 className="show-field">Rating: </h6>
            <h6 className="show-field">Actors: </h6>
            <button className="btn btn-danger"
                    onClick={e=> { onDeleteClick(e); navigate(`/`);} }>
                Delete Post
            </button>
        </div>)
    }

        return (<div className="movie-show-box">
            <Link className="back-link" to="/">Back To Index</Link>
            <h3 className="show-title">{post[0].name}</h3>
            <h6 className="show-field">Genre: {post[0].genre}</h6>
            <h6 className="show-field">Year: {post[0].year}</h6>
            <h6 className="show-field">Rating: {post[0].rating}</h6>
            <h6 className="show-field">Actors: {post[0].actors}</h6>
            <button className="btn btn-danger"
                    onClick={e=> {onDeleteClick(e);navigate(`/`);} }>
                Delete Post
            </button>
        </div>)
}
