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
    const assigneesColumns = `work_order_id, user_id`;
    let newUserIds: number[] | undefined = [];

    const newWorkOrders = await insertWorkOrder(workOrder);

    if (newUserIds.length > 0) {
      newUserIds = await insertUser(users);
      await Promise.all(
        (newUserIds as number[]).map(async (userId) => {
          const assigneesValues = `("${Number(newWorkOrders?.id)}", "${Number(
            userId
          )}")`;
          await workOrderAssigneesRepos.insert({
            columns: assigneesColumns,
            values: assigneesValues,
          });
        })
      );
    }
  };
