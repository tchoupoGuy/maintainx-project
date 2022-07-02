import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WorkOrdersServices from "services/work-orders.api";
import { GenericObject, WorkOrder } from "utils/types";

const WorkOrderDetails: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const [workOrder, setWorkOrder] = useState<WorkOrder | GenericObject>({});
  useEffect(() => {
    if (id) {
      let workOrderId: number = Number(id);

      WorkOrdersServices.getWorkOrder(workOrderId).then(
        (result: GenericObject) => {
          setWorkOrder(result);
        }
      );
    }
  }, [id]);

  console.log(workOrder, "workOrder");
  return <div>{`work-order-details ${id}`}</div>;
};

export default WorkOrderDetails;
