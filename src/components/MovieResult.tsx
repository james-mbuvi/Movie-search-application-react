import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import MovieDetails from './MovieDetails';

function MovieResults({ movies }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = (movieId) => {
    setSelectedMovieId(movieId);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="movie-results-container">
      <Row className="row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID}>
            <Card className="h-100" onClick={() => handleShowDetails(movie.imdbID)}>
              <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
              <Card.Body>
                <Card.Title className="text-center">{movie.Title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MovieDetails show={showDetails} onHide={handleCloseDetails} movieId={selectedMovieId} />
    </div>
  );
}

export default MovieResults;

