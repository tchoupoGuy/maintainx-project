import WorkOrdersDetailsTable from "components/work-orders-details";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import WorkOrdersServices from "services/work-orders.api";
import { frontendUrl } from "urls";
import { GenericObject, WorkOrderDetailsType } from "utils/types";

const WorkOrderDetails: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const [workOrderDetails, setWorkOrderDetails] = useState<
    WorkOrderDetailsType | GenericObject
  >({});
  useEffect(() => {
    if (id) {
      let workOrderId: number = Number(id);

      WorkOrdersServices.getWorkOrder(workOrderId).then(
        (result: GenericObject) => {
          setWorkOrderDetails(result);
        }
      );
    }
  }, [id]);

  console.log(workOrderDetails, "workOrder");
  console.log(id, "id");
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link style={{ padding: 8 }} to={frontendUrl.home}>
          Home
        </Link>
        <Link style={{ padding: 8 }} to={frontendUrl.workOrders}>
          Work Orders
        </Link>
      </div>
      <div>
        {workOrderDetails ? (
          <WorkOrdersDetailsTable workOrderDetails={workOrderDetails} />
        ) : null}
      </div>
    </>
  );
};

export default WorkOrderDetails;
