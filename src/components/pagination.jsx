import React from 'react';
import PropTypes from 'prop-types';
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

Pagination.propTypes = {
  totalUsers: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
