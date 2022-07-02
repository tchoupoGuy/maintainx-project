import "./work-orders.css";
import React from "react";
import { WorkOrder } from "utils/types";
import { WorkOrdersTableBody } from "./work-orders-table-body";

interface Props {
  workOrders: WorkOrder[];
}
export const WorkOrdersList: React.FC<Props> = ({ workOrders }) => {
  return (
    <>
      <div>
        <h1>Work Orders</h1>
      </div>
      {Array.isArray(workOrders) && workOrders.length > 0 ? (
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
          {workOrders.map((workOrder: WorkOrder) => {
            return (
              <WorkOrdersTableBody key={workOrder.id} workOrder={workOrder} />
            );
          })}
        </table>
      ) : (
        <div>No work Order</div>
      )}
    </>
  );
};

export default WorkOrdersList;
