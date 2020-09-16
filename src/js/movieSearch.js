import React from "react";
import '../css/style.css';

export default function MovieSearch() {
    return (
        <form className="form" action="">
            <label className="label" htmlFor="query">Movie Name:</label>
            <input className="input" type="text" name="query" placeholder="i.e. Booksmart"/>
            <button className="button" type="submit">Search</button>
        </form>

        // <h1>Hello World</h1>
    )

}
