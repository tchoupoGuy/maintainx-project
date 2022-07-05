import React, { useEffect, useState } from "react";

import NavLinks from "components/nav-link";
import { WorkOrdersLinks } from "components/nav-link/nav-links.definitions";
import WorkOrdersList from "components/work-orders";

import WorkOrdersServices from "services/work-orders.api";

import { WorkOrder } from "utils/types";
import PageTitle from "components/page-title";

const WorkOrders: React.FC = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);

  useEffect(() => {
    WorkOrdersServices.getWorkOrders().then((result) => {
      setWorkOrders(result);
    });
  }, []);

  return (
    <>
      <NavLinks items={WorkOrdersLinks} />
      <PageTitle title="Work Orders" />
      <WorkOrdersList workOrders={workOrders} />
    </>
  );
};

export default WorkOrders;
