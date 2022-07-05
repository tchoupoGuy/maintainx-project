import React from "react";
import { User } from "utils/types";
import { UsersTableBody } from "./users-table-body";
interface Props {
  userList: User[];
}
const UsersTable: React.FC<Props> = ({ userList }) => {
  return (
    <>
      {Array.isArray(userList) && userList.length > 0 ? (
        <table className="work-orders-table">
          <thead className="work-orders-thead">
            <tr className="work-orders-tr">
              <th className="work-orders-th" align="left">
                Name
              </th>
              <th className="work-orders-th" align="right">
                Status
              </th>
            </tr>
          </thead>
          {userList.map((user: User) => {
            return <UsersTableBody key={user.id} user={user} />;
          })}
        </table>
      ) : (
        <div>No Users</div>
      )}
    </>
  );
};

export default UsersTable;
