import { IWorkOrderAssigneesRepository } from "../../../application/interface/persistence";
import { WorkOrderAssignees } from "../../../models/work-order-assignees";
import { InsertWorkOrderType } from "../../../models/work-orders";

import { TableName } from "../../../utils/types";
import { insertItem, selectItems } from "./client";
const { WORK_ORDERS_ASSIGNEES } = TableName;

export class WorkOrderAssigneesRepository
  implements IWorkOrderAssigneesRepository
{
  async getAll() {
    return selectItems<WorkOrderAssignees>({
      tableName: WORK_ORDERS_ASSIGNEES,
    });
  }

  async insert({ columns, values }: InsertWorkOrderType) {
    await insertItem({ tableName: WORK_ORDERS_ASSIGNEES, columns, values });
  }
}
