import { useState } from 'react';

export const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  const next = () => {
    if (currentPage < maxPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const currentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return {
    currentData,
    next,
    prev,
    currentPage,
    maxPage,
  };
};
