import React, {useState, useRef, useEffect} from 'react';
import './style.css';

import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';
import {Route, Routes} from "react-router-dom";
import MovieIndex from "./MovieIndex";
const LOCAL_STORAGE_KEY = 'local.movies'



function App() {
    const [movies, setMovies] = useState([]);
    const todoNameRef = useRef()

    useEffect(() => {
        if (movies && Array.isArray(movies) && movies.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies))
        }
    }, [movies]);

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (storedMovies) setMovies(storedMovies);
    }, []);

    // function toggleTodo(id){
    //     const newTodos = [...movies]
    //     const todo = newTodos.find(todo => todo.id === id)
    //     todo.complete = !todo.complete;
    //     setMovies(newTodos);
    // }
    // function clearCompletedTodos (e){
    //     const newTodos = movies.filter(todo => !todo.complete);
    //     setMovies(newTodos);
    // }
    //
    // function handleAddTodo(e) {
    //     const name = todoNameRef.current.value;
    //     if (name === '') return;
    //     setMovies(prevTodos => {
    //         return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    //     });
    //     todoNameRef.current.value = null;
    // }

    return (
        <Routes>
            <Route path="/" element = {<MovieIndex movies={movies} />} />
            <Route path="/movies/new" element = {<MovieIndex movies={movies} />} />
        </Routes>
    )

    // return (<>
    //         <TodoList todos={todos} toggleTodo = {toggleTodo}/>
    //         <input ref={todoNameRef} type="text"/>
    //         <button onClick={handleAddTodo}> Add Todo</button>
    //         <button onClick={clearCompletedTodos}> Clear Completed</button>
    //         <div> {todos.filter(todo => !todo.complete).length} left to do</div>
    //     </>
    // );
}

export default App;
