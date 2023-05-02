import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      // const res = await fetch(`https://jsonplaceholder.typicode.com/users/10`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  return (
    <div className="container">
      {loading ? (
        <div className="loading">
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <>
          <div className="p-5">
            <h2>User Details</h2>
            <br />
            <Table striped bordered hover responsive variant="light">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>{user.id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Street</td>
                  <td>{user.address.street}</td>
                </tr>
                <tr>
                  <td>Suite</td>
                  <td>{user.address.suite}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{user.address.city}</td>
                </tr>
                <tr>
                  <td>Zipcode</td>
                  <td>{user.address.zipcode}</td>
                </tr>
                <tr>
                  <td>Latitude</td>
                  <td>{user.address.geo.lat}</td>
                </tr>
                <tr>
                  <td>Longitude</td>
                  <td>{user.address.geo.lng}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>{user.website}</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td>{user.company.name}</td>
                </tr>
                <tr>
                  <td>Company Catch Phrase</td>
                  <td>{user.company.catchPhrase}</td>
                </tr>
                <tr>
                  <td>Company bs</td>
                  <td>{user.company.bs}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
