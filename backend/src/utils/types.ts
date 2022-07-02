export enum TableName {
  USERS = "users",
  WORK_ORDERS = "work_orders",
  WORK_ORDERS_ASSIGNEES = "work_order_assignees",
}

export enum TableId {
  USERS_ID = "id",
  WORK_ORDERS_ID = "id",
  ASSIGNEES_USER_ID = "user_id",
  ASSIGNEES_WORK_ORDER_ID = "work_order_id",
}
export enum MethodType {
  GET = "GET",
  POST = "POST",
  UPDATE = "UPDATE",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type ConsoleOutPutType = {
  date: Date;
  method: string;
  path: string;
  status: number;
};

export enum StatusType {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export type GenericObject = { [key: string]: any };
