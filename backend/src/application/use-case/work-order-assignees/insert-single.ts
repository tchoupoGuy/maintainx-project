import { IWorkOrderAssigneesRepository } from "../../interface/persistence";

type WorkOrderInsertDeps = {
  workOrderAssigneesRepos: IWorkOrderAssigneesRepository;
};

export const WorkOrderAssigneeSingleInsertUseCase =
  ({ workOrderAssigneesRepos }: WorkOrderInsertDeps) =>
  async (userId: number, workOrderId: number) => {
    const worOrderColumns = "work_order_id, user_id";
    const worOrderValues = `("${workOrderId}","${userId}")`;

    await workOrderAssigneesRepos.insert({
      columns: worOrderColumns,
      values: worOrderValues,
    });
  };
