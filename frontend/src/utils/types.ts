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
  status?: string;
}

export interface WorkOrderAssignees {
  work_order_id: number;
  user_id: number;
}

export type ToggleSwitchType = {
  isOpen?: boolean;
  status: StatusType;
};

export type updateWorkOrderInput = {
  id: number;
  partialItem: Partial<WorkOrder>;
};
export type insertWorkOrderInput = {
  workOrder: WorkOrder;
  users: User[];
};
export type NavLinksType = {
  id: number;
  name: string;
  url: string;
};

export enum LinkName {
  HOME = "Home",
  WORK_ORDERS = "Work Orders",
  NEW_WORK_ORDER = "New Work Order",
  NOT_ASSIGNED_USERS = "Not assigned users",
}
