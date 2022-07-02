import WorkOrdersList from "components/work-orders";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkOrdersServices from "services/work-orders.api";
import { frontendUrl } from "urls";
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
      <Link style={{ padding: 8 }} to={frontendUrl.home}>
        Home
      </Link>
      <WorkOrdersList workOrders={workOrders} />
    </>
  );
};

export default WorkOrders;
