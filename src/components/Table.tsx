import UserServices from "../services/services";
import { Link } from "react-router-dom";
import { User, TableProps } from "../types/TableTypes";
const userServices = new UserServices();

const Table: React.FC<TableProps> = ({
  users,
  getUserData,
  setInputValues,
}) => {
  const updateUser = async (user: User) => {
    setInputValues(user);
  };

  const deleteUser = async (id: string) => {
    await userServices.deleteUser(id);
    getUserData();
  };

  return (
    <main>
      <Link to='new' className="btn btn-primary">New Form</Link>
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
                <td>
                  <Link
                    to={`/${user.id}`}
                    className="btn btn-success btn-sm"
                    onClick={() => updateUser(user)}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        }
      </table>
    </main>
  );
};

export default Table;
