import { useEffect, useState } from "react";
import "./index.scss";

import UsersList from "../../userList";
import SelectField from "../../SelectField";

const UserListPage = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    await fetch(`https://gorest.co.in/public/v2/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, [page]);
  return (
    <div className="user-list-page">
      <div className="user-list-page__header">
        <h1>Users</h1>
      </div>

      <SelectField setPage={setPage} />
      <UsersList data={users} page={page} />
    </div>
  );
};

export default UserListPage;
