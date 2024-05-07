import "./index.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
const UsersList = ({ data, count }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="users-list__table-container">
        <table className="users-list__table">
          <thead className="users-list__table-head">
            <tr>
              {data
                ? Object.keys(data[0]).map((k, i) => {
                    return k !== "id" ? (
                      <th key={i} className="users-list__table-cell">
                        {k}
                      </th>
                    ) : null;
                  })
                : null}
            </tr>
          </thead>
          <tbody className="users-list__table-body">
            {data
              ? data.map((user) => {
                  return (
                    <tr
                      key={user.id}
                      className={classNames(
                        "users-list__table-row",
                        user.status === "inactive" && "-disable"
                      )}
                      onClick={() => {
                        navigate(`/user/${user.id}`);
                      }}>
                      {Object.keys(user).map((k, index) => {
                        return k !== "id" ? (
                          <td key={index} className="users-list__table-cell">
                            {user[k]}
                          </td>
                        ) : null;
                      })}
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="users-list__counter-container">
        <div className="users-list__counter">
          <span>Nunber of page updates: &nbsp;</span>
          <span>{count}</span>
        </div>
      </div>
    </>
  );
};

export default UsersList;
