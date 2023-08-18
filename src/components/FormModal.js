import React, { useState } from 'react';
import axios from 'axios';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


function FormModal() {
  const [formData, setFormData] = useState({
    movieName: '',
    releaseDate: '',
    genre: '',
    actors: [],
    details: '',
    imageUrl: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to Flask using Axios
      const response = await axios.post('http://localhost:5050/submit', formData);
      console.log(response.data); // Do something with the response
      window.location.href = '/'
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleActorChange = (e) => {
    const actors = e.target.value.split(',').map((actor) => actor.trim());
    setFormData((prevData) => ({
      ...prevData,
      actors: actors,
    }));
  };

  return (
    <div>
      <button
        className="btn position-fixed end-0 mt-2 me-2 z-1 btn-outline-primary rounded-circle "
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FontAwesomeIcon icon={faPlus}/>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Movie
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="movieName" className="form-label">
                    Movie Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="movieName"
                    name="movieName"
                    value={formData.movieName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="releaseDate" className="form-label">
                    Release Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="releaseDate"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre
                  </label>
                  <select
                    className="form-control"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a genre</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    {/* Add more genres */}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="actors" className="form-label">
                    Actors (comma-separated)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="actors"
                    name="actors"
                    value={formData.actors.join(', ')}
                    onChange={handleActorChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="details" className="form-label">
                    Movie Details
                  </label>
                  <textarea
                    className="form-control"
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                  />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-outline-primary"
                    data-bs-dismiss="modal"
                 >
                  Submit
                </button>
                <button
                  type=' button'
                  className='btn btn-outline-secondary'
                  data-bs-dismiss="modal"
                >
                  cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
