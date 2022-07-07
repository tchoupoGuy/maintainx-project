import { WorkOrder } from "../../../models/work-orders";
import { IWorkOrderRepository } from "../../interface/persistence";

type WorkOrderUpdatePartialDeps = {
  workOrderRepos: IWorkOrderRepository;
};

export const WorkOrderGetUpdatePartialUseCase =
  ({ workOrderRepos }: WorkOrderUpdatePartialDeps) =>
  async (id: number, partialItem: Partial<WorkOrder>) => {
    await workOrderRepos.updatePartial(id, partialItem);

    return { id, partialItem };
  };
