import {
  IUserRepository,
  IWorkOrderAssigneesRepository,
  IWorkOrderRepository,
} from "../../interface/persistence";

type WorkOrderGetByIdDeps = {
  workOrderRepos: IWorkOrderRepository;
  workOrderAssigneesRepos: IWorkOrderAssigneesRepository;
  userRepos: IUserRepository;
};

export const WorkOrderGetByIdUseCase =
  ({
    workOrderRepos,
    userRepos,
    workOrderAssigneesRepos,
  }: WorkOrderGetByIdDeps) =>
  async (id: number) => {
    // Get list of users
    const allUsers = await userRepos.getAll();
    // Get list of work order assignees
    const workOrdersAssignees = await workOrderAssigneesRepos.getAll();

    // Filter list of work order assignees by work order id
    const filterWorkOrderAssignees = workOrdersAssignees?.filter(
      (order) => order.work_order_id === id
    );

    // Get list of users assignees to work orders
    const users = allUsers?.filter(({ id }) =>
      filterWorkOrderAssignees?.some(({ user_id }) => user_id === id)
    );

    // Get work order by id
    const workOrder = await workOrderRepos.getById(id);

    return { workOrder, users };
  };
