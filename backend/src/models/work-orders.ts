import { StatusType } from "../utils/types";

export interface WorkOrder {
  id: number;
  name: string;
  status: StatusType;
}
