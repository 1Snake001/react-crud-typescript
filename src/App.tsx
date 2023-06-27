import React, { useEffect, useState } from "react";
import "./style/App.scss";
import Form from "./components/Form";
import Table from "./components/Table";

import UserServices from "./services/services";
const userServices = new UserServices();

function App() {
  interface User {
    id: string;
    name: string;
    email: string;
    address: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  async function getUserData() {
    const data = await userServices.getAllUsers();

    let users = data.docs.map((doc) => ({
      ...(doc.data() as User),
      id: doc.id,
    }));

    setUsers(users);
  }
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Form  getUserData={getUserData}/>
      <Table users={users} getUserData={getUserData}/>
    </div>
  );
}

export default App;
