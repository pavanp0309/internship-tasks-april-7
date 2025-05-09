// hooks/useSearch.js
import { useState } from 'react';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to update the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return {
    searchQuery,
    handleSearchChange
  };
};
