import { useEffect, useState } from "react";
import "./index.scss";

import UsersList from "../../userList";

const UserListPage = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState();
  const [count, setCount] = useState(0);

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

      <div className="user-list-page__select-container">
        <label className="user-list-page__label" htmlFor="page-select">
          page:
        </label>
        <select
          className="user-list-page__select"
          name="page-select"
          id="page-select">
          {[...Array(10)].map((v, i) => {
            return (
              <option
                key={i}
                value={i + 1}
                onClick={() => {
                  setPage(i + 1);
                  setCount(count + 1);
                }}>
                {i + 1}
              </option>
            );
          })}
        </select>
      </div>
      <UsersList data={users} count={count} />
    </div>
  );
};

export default UserListPage;
