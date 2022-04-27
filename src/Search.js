import React from "react";
import './Search.css';

export default function Search() {
    return (
        <div className="row Search">
            <div className="col-8">
                <form className="d-flex" id="search-city-form">


                    <input id="city-input"
                           className="form-control me-2"
                           type="search"
                           placeholder="Enter a city"
                           aria-label="Search"
                           autoComplete="on"
                    />
                    <button
                        className="btn btn-outline-primary btn-search"
                        id="search-button"
                        type="submit">
                        Search
                    </button>

                </form>
            </div>
        </div>)

    ;
}