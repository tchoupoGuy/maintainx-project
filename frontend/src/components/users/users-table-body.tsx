import React from "react";

import { frontendUrl } from "urls";
import { Link } from "react-router-dom";
import { User } from "utils/types";

interface Props {
  user: User;
}

export const UsersTableBody: React.FC<Props> = ({ user }) => {
  return (
    <tbody className="work-orders-tbody">
      <tr className="work-orders-tr">
        <td className="work-orders-td" align="left">
          <Link
            to={`${frontendUrl.workOrders}/${user?.id}`}
            className="work-orders-link"
          >
            {user?.name}
          </Link>
        </td>
        <td className="work-orders-td" align="right">
          {user?.status}{" "}
        </td>
      </tr>
    </tbody>
  );
};
