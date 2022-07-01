import React from "react";
import { WorkOrder } from "utils/types";
import { WorkOrdersRow } from "./work-orders-row";

interface Props {
  workOrders: WorkOrder[];
}
export const WorkOrdersList: React.FC<Props> = ({ workOrders }) => {
  return (
    <>
      {Array.isArray(workOrders) && workOrders.length > 0 ? (
        <>
          {workOrders.map((workOrder: WorkOrder) => {
            return (
              <WorkOrdersRow
                key={workOrder.id}
                name={workOrder.name}
                status={workOrder.status}
              />
            );
          })}
        </>
      ) : (
        <div>No work Order</div>
      )}
    </>
  );
};

export default WorkOrdersList;
