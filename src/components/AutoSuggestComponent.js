import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';
import ModalComponent from './ModalComponent'; // Import the ModalComponent

const AutoSuggestComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (inputValue) {
      axios.post('http://localhost:5050/searchbar', { name: inputValue })
        .then(response => {
          setSuggestions(response.data);
        })
        .catch(error => {
          console.error('Error fetching suggestions:', error);
        });
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Typeahead
        id="typeahead-input"
        options={suggestions.map(item => item.name)}
        placeholder="Type something..."
        onChange={(selected) => {
          if (selected && selected.length > 0) {
            const selectedName = selected[0];
            const selectedMovie = suggestions.find(item => item.name === selectedName);
            if (selectedMovie) {
              console.log('Selected ID:', selectedMovie.id);
              setSelectedId(selectedMovie.id);
              openModal();
            }
          } else {
            setSelectedId(null);
          }
        }}
        onInputChange={(text) => setInputValue(text)}
      />
      <ModalComponent showModal={showModal} closeModal={closeModal} selectedId={selectedId} />
    </div>
  );
};

export default AutoSuggestComponent;
