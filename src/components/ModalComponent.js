import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ModalComponent({ showModal, closeModal, selectedId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (selectedId) {
      axios.post('http://localhost:5050/movieId', { id: selectedId })
        .then(response => {
          setMovie(response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    }
  }, [selectedId]);

  const handleDelete = async () => {
    try {
      const response = await axios.post('http://localhost:5050/delet', { id: selectedId });
      if (response.status === 200) {
        window.location.href = '/';
        console.log('Movie deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const textColor = {
    color:"dark",
  };

  const { image, Name, about, date, genre, actors } = movie || {};

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={textColor}>{Name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            {image && <img src={image} className="card-img-top" alt={Name} />}
            {about && <p className="card-text"style={textColor}>{about}</p>}
            {date && <p className="card-text" style={textColor}>Date: {date}</p>}
            {genre && <p className="card-text" style={textColor}>Genre: {genre}</p>}
            {actors && <p className="card-text" style={textColor}>Actors: {actors.join(', ')}</p>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete
            </button>
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={closeModal}>
              <FontAwesomeIcon icon={faEyeSlash} /> Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
