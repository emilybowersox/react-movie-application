import React from "react";
import '../css/style.css';

export default function MovieSearch() {

    const movieSearch = async (e) => {
        e.preventDefault()
        console.log("submitting");
    }

    //hardcoding a value since we're not pulling it from the input form yet
    const query = "Booksmart";

    //es6 template literals- the backticks ` ` to reference the value of the variable in ${}
    const apiUrl = `"https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&query=${query}&page=1&include_adult=false"``;

    return (
        <form className="form" onSubmit={movieSearch}>
            <label className="label" htmlFor="query">Movie Name:</label>
            <input className="input" type="text" name="query" placeholder="i.e. Booksmart"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}
