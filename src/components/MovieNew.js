import React from 'react';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function MovieNew({addMovie}) {
    let navigate = useNavigate();

    function handleSubmit(e) {

            if (id && name && genre && actors && year && rating) {
                addMovie({id: id, name: name, genre: genre, actors: actors, year: year, rating: rating});
                navigate(`/`);
            }


        e.preventDefault();
    }

     const id = uuidv4();
    const [name, setName] = useState();
    const [genre, setGenre] = useState();
    const [actors, setActors] = useState();
    const [year, setYear] = useState();
    const [rating, setRating] = useState();


    return (
        <form onSubmit={e => {
            handleSubmit(e);
        }}><h3> Create A New Movie</h3>
            <div className={`form-group `}>
                <label>Title</label>
                <input type="text" value={name} className="form-control" name='name'
                       onChange={e => setName(e.target.value)}/>
            </div>
            <div className={`form-group  `}>
                <label>Genre</label>
                <input type="text" value={genre} className="form-control" name="genre"
                       onChange={e => setGenre(e.target.value)}/>

            </div>
            <div className={`form-group `}>
                <label>Actors</label>
                <textarea className="form-control" value={actors} name="actors"
                          onChange={e => setActors(e.target.value)}/>

            </div>
            <div className={`form-group `}>
                <label>The Year The Movie Was Made</label>
                <input type="text" className="form-control" value={year} name="year"
                       onChange={e => setYear(e.target.value)}/>

            </div>
            <div className={`form-group `}>
                <label>The Movie Rating</label>
                <input type="text" className="form-control" value={rating} name="rating"
                       onChange={e => setRating(e.target.value)}/>

            </div>
            <div className="button-box">
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
            </div>
        </form>
    )
}



