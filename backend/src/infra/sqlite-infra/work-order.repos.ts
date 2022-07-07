import { IWorkOrderRepository } from "../../application/interface/persistence";
import { InsertWorkOrderType, WorkOrder } from "../../models/work-orders";
import { TableName } from "../../utils/types";
import { insertItem, selectItem, selectItems, updateItem } from "./client";
const { WORK_ORDERS } = TableName;

export class WorkOrderRepository implements IWorkOrderRepository {
  async getAll() {
    return selectItems<WorkOrder>({ tableName: WORK_ORDERS });
  }

  async getById(id: number) {
    return selectItem<WorkOrder>({ tableName: WORK_ORDERS, id });
  }

  async updatePartial(id: number, partialItem: Partial<WorkOrder>) {
    await updateItem({
      tableName: WORK_ORDERS,
      id,
      partialItem,
    });
  }
  async insert({ columns, values }: InsertWorkOrderType) {
    await insertItem({ tableName: WORK_ORDERS, columns, values });
  }
}
