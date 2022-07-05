import NavLinks from "components/nav-link";
import { workOrderDetailsLinks } from "components/nav-link/nav-links.definitions";
import PageTitle from "components/page-title";
import WorkOrdersDetailsTable from "components/work-orders-details";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WorkOrdersServices from "services/work-orders.api";

import { GenericObject, WorkOrderDetailsType } from "utils/types";

const WorkOrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [workOrderDetails, setWorkOrderDetails] = useState<
    WorkOrderDetailsType | GenericObject
  >({});
  useEffect(() => {
    if (id) {
      WorkOrdersServices.getWorkOrder(Number(id)).then(
        (result: GenericObject) => {
          setWorkOrderDetails(result);
        }
      );
    }
  }, [id]);

  return (
    <>
      <NavLinks items={workOrderDetailsLinks} />
      <PageTitle title="Work Orders Details" />
      <div>
        {Object.keys(workOrderDetails).length > 0 ? (
          <WorkOrdersDetailsTable workOrderDetails={workOrderDetails} />
        ) : null}
      </div>
    </>
  );
};

export default WorkOrderDetails;
