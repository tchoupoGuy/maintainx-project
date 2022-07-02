import React from "react";
import { GenericObject, WorkOrderDetailsType } from "utils/types";
import WorkOrdersDetailsTableBody from "./work-orders-details-table-body";

interface Props {
  workOrderDetails: WorkOrderDetailsType | GenericObject;
}

const WorkOrdersDetailsTable: React.FC<Props> = ({ workOrderDetails }) => {
  console.log(workOrderDetails, "workOrder");
  return (
    <>
      <div>
        <h1>Work Orders Details</h1>
      </div>
      <table className="work-orders-table">
        <thead className="work-orders-thead">
          <tr className="work-orders-tr">
            <th align="left" className="work-orders-th">
              Name
            </th>
            <th align="right" className="work-orders-th">
              {" "}
              Status
            </th>
          </tr>
        </thead>
        <WorkOrdersDetailsTableBody
          users={workOrderDetails?.users}
          workOrder={workOrderDetails?.workOrder}
        />
      </table>
    </>
  );
};

export default WorkOrdersDetailsTable;
