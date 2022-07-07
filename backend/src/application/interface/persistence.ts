import { User } from "../../models/user";
import { WorkOrderAssignees } from "../../models/work-order-assignees";
import { InsertWorkOrderType, WorkOrder } from "../../models/work-orders";

export interface IWorkOrderRepository {
  getById: (id: number) => Promise<WorkOrder | undefined>;
  getAll: () => Promise<WorkOrder[] | undefined>;
  updatePartial: (id: number, partialItem: Partial<WorkOrder>) => Promise<void>;
  insert: ({ columns, values }: InsertWorkOrderType) => Promise<void>;
}
export interface IUserRepository {
  getById: (id: number) => Promise<User | undefined>;
  getAll: () => Promise<User[] | undefined>;
  insert: ({ columns, values }: InsertWorkOrderType) => Promise<void>;
}
export interface IWorkOrderAssigneesRepository {
  getAll: () => Promise<WorkOrderAssignees[] | undefined>;
  insert: ({ columns, values }: InsertWorkOrderType) => Promise<void>;
}

export interface IUnitOfWork {
  workOrderRepository: IWorkOrderRepository;
  workOrderAssigneesRepository: IWorkOrderAssigneesRepository;
  userRepository: IUserRepository;
}
