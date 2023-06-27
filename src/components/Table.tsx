
import UserServices from "../services/services";

const userServices = new UserServices();

interface User {
  id: string;
  name: string;
  email: string;
  address: string;
}

interface TableProps {
  users: User[];
  getUserData(): Promise<void>
}

const Table: React.FC<TableProps > = ({users, getUserData}) => {


  const deleteUser = async (id: string) => {
    await userServices.deleteUser(id);
    getUserData();
  };

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
              <td>
                <button className="btn btn-success btn-sm">Update</button>
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
  );
};

export default Table;
