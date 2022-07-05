export enum TableName {
  USERS = "users",
  WORK_ORDERS = "work_orders",
  WORK_ORDERS_ASSIGNEES = "work_order_assignees",
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

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}
