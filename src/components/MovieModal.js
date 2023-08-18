import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function MovieModal({ movie }) {
  const handleDelete = async () => {
    try {
      const response = await axios.post('http://localhost:5050/delet', { id: movie.id });
      if (response.status === 200) {
        window.location.href = '/'
        // Perform any UI updates or actions after successful delete
        console.log('Movie deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };
  return (
    <div className="modal fade" id={`cardModal-${movie.id}`} tabIndex="-1" aria-labelledby={`cardModalLabel-${movie.Name}`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`cardModalLabel-${movie.Name}`}>{movie.Name}</h5>
          </div>
          <div className="modal-body">
            <img src={movie.image} className="card-img-top" alt={movie.Name} />
            <p className="card-text">{movie.about}</p>
            <p className="card-text">Date: {movie.date}</p>
            <p className="card-text">Genre: {movie.genre}</p>
            {movie.actors && <p className="card-text">Actors: {movie.actors.join(', ')}</p>}
          </div>
          <div className="modal-footer">
            <button type='button' className='btn btn-outline-danger' onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrashCan}/>
            </button>
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              <FontAwesomeIcon icon={faEyeSlash}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
