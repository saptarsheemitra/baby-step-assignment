import React from 'react';
import '../App.css';

const Pagination = ({ totalUsers, usersPerPage, currentPage, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map(number => (
          <div key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(number)}>
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};


export default Pagination;
