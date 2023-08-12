import React from 'react';

function MovieModal({ movie }) {
  return (
    <div className="modal fade" id={`cardModal-${movie.id}`} tabIndex="-1" aria-labelledby={`cardModalLabel-${movie.Name}`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`cardModalLabel-${movie.Name}`}>{movie.Name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <img src={movie.image} className="card-img-top" alt={movie.Name} />
            <p className="card-text">{movie.about}</p>
            <p className="card-text">Date: {movie.date}</p>
            <p className="card-text">Genre: {movie.genre}</p>
            {movie.actors && <p className="card-text">Actors: {movie.actors.join(', ')}</p>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
