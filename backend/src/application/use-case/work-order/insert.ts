import { WorkOrder } from "../../../models/work-orders";
import { IWorkOrderRepository } from "../../interface/persistence";

type WorkOrderInsertDeps = {
  workOrderRepos: IWorkOrderRepository;
};

export const WorkOrderInsertUseCase =
  ({ workOrderRepos }: WorkOrderInsertDeps) =>
  async (newWorkOrder: WorkOrder) => {
    const { name } = newWorkOrder;
    const worOrderColumns = "name,status";
    const worOrderValues = `("${name}","OPEN")`;

    const lastWorkOrderId = await workOrderRepos.insert({
      columns: worOrderColumns,
      values: worOrderValues,
    });
    return lastWorkOrderId;
  };
