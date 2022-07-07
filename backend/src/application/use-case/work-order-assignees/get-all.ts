import { IWorkOrderAssigneesRepository } from "../../interface/persistence";

type WorkOrderAssigneesGetAllDeps = {
  workOrderAssigneesRepos: IWorkOrderAssigneesRepository;
};

export const WorkOrderAssigneesGetAllUseCase =
  ({ workOrderAssigneesRepos }: WorkOrderAssigneesGetAllDeps) =>
  async () => {
    const workOrdersAssignees = await workOrderAssigneesRepos.getAll();
    return workOrdersAssignees;
  };
