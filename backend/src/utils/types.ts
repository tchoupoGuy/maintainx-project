export enum TableName {
  USERS = "users",
  WORK_ORDERS = "work_orders",
  WORK_ORDERS_ASSIGNEES = "work_order_assignees",
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
