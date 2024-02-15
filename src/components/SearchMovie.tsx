import React, { useState } from "react";

function SearchMovie(props) {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Movie Search</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movie..."
              aria-label="Search"
              onChange={(e) => props.setSearch(e.target.value)}
            />
          
          </form>
        </div>
      </nav>
    </>
  );
}

export default SearchMovie;


















