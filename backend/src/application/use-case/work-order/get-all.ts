import { IWorkOrderRepository } from "../../interface/persistence";

type WorkOrderGetAllDeps = {
  workOrderRepos: IWorkOrderRepository;
};

export const WorkOrderGetAllUseCase =
  ({ workOrderRepos }: WorkOrderGetAllDeps) =>
  async () => {
    const workOrders = await workOrderRepos.getAll();
    return workOrders;
  };
