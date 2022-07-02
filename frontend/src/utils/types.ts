export enum StatusType {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export type GenericObject = { [key: string]: any };

export interface WorkOrder {
  id: number;
  name: string;
  status: StatusType;
}
export interface WorkOrderDetailsType {
  workOrder: WorkOrder;
  users: User[];
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface WorkOrderAssignees {
  work_order_id: number;
  user_id: number;
}
