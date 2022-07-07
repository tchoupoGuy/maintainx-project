import { IUnitOfWork } from "../application/interface/persistence";
import { UserRepository } from "./sqlite-infra/user.repos";
import { WorkOrderAssigneesRepository } from "./sqlite-infra/work-order-assignees.repos";
import { WorkOrderRepository } from "./sqlite-infra/work-order.repos";

const workOrderRepository = new WorkOrderRepository();
const workOrderAssigneesRepository = new WorkOrderAssigneesRepository();
const userRepository = new UserRepository();

export const UnitOfWork: IUnitOfWork = {
  userRepository,
  workOrderRepository,
  workOrderAssigneesRepository,
};
