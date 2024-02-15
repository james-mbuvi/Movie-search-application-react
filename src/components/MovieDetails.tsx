import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function MovieDetails({ show, onHide, movieId }) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `http://www.omdbapi.com/?i=${movieId}&apikey=263d22d8`;
      const res = await fetch(url);
      const resJson = await res.json();
      setMovieDetails(resJson);
    };

    if (show && movieId) {
      fetchMovieDetails();
    }
  }, [show, movieId]);

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{movieDetails?.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movieDetails ? (
          <>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <p>{movieDetails.Plot}</p>
            <p>Director: {movieDetails.Director}</p>
            <p>Actors: {movieDetails.Actors}</p>
            <p>Genre: {movieDetails.Genre}</p>
            <p>Released: {movieDetails.Released}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieDetails;
