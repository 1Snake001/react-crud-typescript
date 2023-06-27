import React, { useEffect, useState } from "react";
import UserServices from "../services/services";

const userServices = new UserServices();

const Table = () => {
  interface User {
    id: string;
    name: string;
    email: string;
    address: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUserData() {
      const data = await userServices.getAllUsers();

      let users = data.docs.map((doc) => ({
        ...(doc.data() as User),
        id: doc.id,
      }));

      setUsers(users);
    }
    getUserData();
  }, []);

  console.log(users);

  return (
    <table className="table table-striped container">
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
        </tr>
      </thead>
      {
        <tbody>
          {Object.values(users).map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td><button className="btn btn-success btn-sm">Update</button><button className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>
      }
    </table>
  );
};

export default Table;
