import { UnitOfWork } from "../../../infra";
import { NewWorkOrder } from "../../../models/work-orders";
import { IWorkOrderAssigneesRepository } from "../../interface/persistence";
import { UserCreateUseCase } from "../user/insert";
import { WorkOrderInsertUseCase } from "../work-order/insert";

type WorkOrderAssigneesInsertDeps = {
  workOrderAssigneesRepos: IWorkOrderAssigneesRepository;
};
const insertUser = UserCreateUseCase({
  userRepos: UnitOfWork.userRepository,
});

const insertWorkOrder = WorkOrderInsertUseCase({
  workOrderRepos: UnitOfWork.workOrderRepository,
});

export const WorkOrderAssigneesInsertUseCase =
  ({ workOrderAssigneesRepos }: WorkOrderAssigneesInsertDeps) =>
  async (newWorkOrder: NewWorkOrder) => {
    const { users, workOrder } = newWorkOrder;
    const lastUserId = await insertUser(users);
    const lastWorkOrderId = await insertWorkOrder(workOrder);
    const assigneesColumns = `work_order_id, user_id`;
    const assigneesValues = `("${Number(lastWorkOrderId)}", "${Number(
      lastUserId
    )}")`;

    await workOrderAssigneesRepos.insert({
      columns: assigneesColumns,
      values: assigneesValues,
    });
  };
