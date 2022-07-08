import React from "react";

import { frontendUrl } from "urls";
import { Link } from "react-router-dom";
import { WorkOrder } from "utils/types";

interface Props {
  workOrder: WorkOrder;
}

export const WorkOrdersTableBody: React.FC<Props> = ({ workOrder }) => {
  return (
    <tbody className="work-orders-tbody">
      <tr className="work-orders-tr">
        <td className="work-orders-td work-orders-td-hover " align="left">
          <Link
            to={`${frontendUrl.workOrders}/${workOrder?.id}`}
            className="work-orders-link"
          >
            {workOrder?.name}
          </Link>
        </td>
        <td className="work-orders-td" align="right">
          {workOrder?.status}{" "}
        </td>
      </tr>
    </tbody>
  );
};
