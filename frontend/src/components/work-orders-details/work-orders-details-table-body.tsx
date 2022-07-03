import ToggleSwitch from "components/toggle-switch";
import React, { useMemo } from "react";
import { User, WorkOrder } from "utils/types";

interface Props {
  users: User[];
  workOrder: WorkOrder;
}

export const WorkOrdersDetailsTableBody: React.FC<Props> = ({
  users,
  workOrder,
}) => {
  const workOrderStatus = useMemo(() => {
    return <ToggleSwitch id={workOrder.id} status={workOrder?.status} />;
  }, [workOrder?.id, workOrder?.status]);

  return (
    <tbody className="work-orders-tbody">
      <tr className="work-orders-tr">
        <td className="work-orders-td">{workOrder?.name}</td>
        <td className="work-orders-td">
          {/* {workOrder?.status} */}
          {workOrderStatus}
        </td>
      </tr>
      <tr className="work-orders-tr">
        <th className="work-orders-th" colSpan={2}>
          Assigned Users
        </th>
      </tr>
      <tr className="work-orders-tr">
        <td align="left" className="work-orders-td" colSpan={2}>
          <ul>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => {
                return (
                  <li
                    title={user?.email}
                    className="work-orders-li"
                    key={user.id}
                  >
                    {user.name}
                  </li>
                );
              })
            ) : (
              <div>No users</div>
            )}
          </ul>
        </td>
      </tr>
    </tbody>
  );
};

export default WorkOrdersDetailsTableBody;
