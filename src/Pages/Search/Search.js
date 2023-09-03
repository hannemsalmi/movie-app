import React, { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <span className='pageTitle'>Search</span>
      <input
        className='search-box'
        type='text'
        placeholder='Search for movies and series...'
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div className="search-results">
        {searchResults.map((result) => (
          <SingleContent
            key={result.id}
            id={result.id}
            poster={result.poster_path}
            title={result.title || result.name}
            date={result.first_air_date || result.release_date}
            media_type={result.media_type}
            vote_average={result.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;