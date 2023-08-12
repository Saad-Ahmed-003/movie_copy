import React, { useState, useEffect } from 'react';
import MovieModal from './MovieModal';

function UserData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5050/movies')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (userData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g3">
        {userData.map(movie => (
          <div key={movie.id} className="col-md-4">
            <div className="card mb-4" style={{ maxWidth: '18rem' }}>
              {/* <img src={movie.image} className="card-img-top" alt={movie.Name} /> */}
              <div className="card-body">
                <h5 className="card-title">{movie.Name}</h5>
                <p className="card-text">Date: {movie.date}</p>
                <p className="card-text">Genre: {movie.genre}</p>
                {movie.actors && <p className="card-text">Actors: {movie.actors.join(', ')}</p>}
              </div>
              <div className='card-footer'>
                <button
                  className='btn btn-outline-secondary'
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target={`#cardModal-${movie.id}`}
                >
                  View
                </button>
              </div>
            </div>
            <MovieModal movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserData;
