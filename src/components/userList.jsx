import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import "../App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
        setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const filteredUsers = users.filter((user) => {
    const { name, email } = user;
    const searchTermLowercase = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(searchTermLowercase) ||
      email.toLowerCase().includes(searchTermLowercase)
    );
  });
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <h1 className="text-center my-5">All User Details</h1>
      <div className="input-container font-weight-bold">
        <div className="form-group search-input-cus">
          <label
            htmlFor="search-field"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Search by Name or Email
          </label>
          <input
            type="text"
            className="form-control "
            id="search-field"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {loading ? (
        <>
          <div className="loading">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <div className="loading-text">Loading users...</div>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="p-5">
              <Table striped bordered hover responsive variant="light">
                <thead>
                  <tr>
                    <th className="th-lg-percent">Name</th>
                    <th className="th-lg-percent">Username</th>
                    <th className="th-lg-percent">Email</th>
                    <th className="th-lg-percent">Phone</th>
                    <th className="th-lg-percent">Website</th>
                    <th className="th-lg-percent">Company</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <Link to={`/user/${user.id}`} className="text-dec">
                          {user.name}
                        </Link>
                      </td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>{user.company.name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </>
          <Pagination
            totalUsers={filteredUsers.length}
            usersPerPage={usersPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default UserList;
