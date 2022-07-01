import WorkOrdersList from "components/work-orders";
import React, { useEffect, useState } from "react";
import WorkOrdersServices from "services/work-orders.api";
import { WorkOrder } from "utils/types";

const WorkOrders: React.FC = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);

  useEffect(() => {
    WorkOrdersServices.getWorkOrders().then((result) => {
      setWorkOrders(result);
    });
  }, []);
  console.log(workOrders, "workOrders");
  return (
    <>
      <WorkOrdersList workOrders={workOrders} />
    </>
  );
};

export default WorkOrders;
