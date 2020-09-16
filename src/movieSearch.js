import React from "react";

export default function MovieSearch() {
    return (
        <form action="" className="form">
            <label htmlFor="query" className="label">Movie Name:</label>
            <input className="input" type="text" name="query" placeholder="i.e. Booksmart"/>
            <button className="button" type="submit">Search</button>
        </form>

        // <h1>Hello World</h1>
    )

}
