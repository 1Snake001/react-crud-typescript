import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.scss";
import Table from "./components/Table";
import UserServices from "./services/services";
import NewForm from "./components/NewForm";
import UpdateForm from "./components/UpdateForm";
import { User, InputValue } from "./types/AppTypes";
const userServices = new UserServices();

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [inputValues, setInputValues] = useState<InputValue>({
    name: "",
    email: "",
    address: "",
  });

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
    <main className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Table
                users={users}
                getUserData={getUserData}
                setInputValues={setInputValues}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <UpdateForm
                getUserData={getUserData}
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            }
          />
          <Route
            path="/new"
            element={
              <NewForm
                getUserData={getUserData}
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
