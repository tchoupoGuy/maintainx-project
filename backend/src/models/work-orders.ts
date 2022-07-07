import { StatusType } from "../utils/types";
import { User } from "./user";

export interface WorkOrder {
  id: number;
  name: string;
  status: StatusType;
}

export interface NewWorkOrder {
  workOrder: WorkOrder;
  users: User[];
}

export type InsertWorkOrderType = { columns: string; values: string };
