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

    await workOrderRepos.insert({
      columns: worOrderColumns,
      values: worOrderValues,
    });
    const allWorkOrder = await workOrderRepos.getAll();
    const filterNewWorkOrder = allWorkOrder?.filter(
      (workOrder) => workOrder.name === name
    )[0];
    return filterNewWorkOrder;
  };
