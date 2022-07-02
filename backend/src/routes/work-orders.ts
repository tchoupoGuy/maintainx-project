import express from "express";

import { selectItem, selectItems } from "../sqlite/client";
import { routesPath } from "../urls";
import { consoleOutPut } from "../utils/console-out-put";
import { getDate } from "../utils/get-date";
import { MethodType, TableName } from "../utils/types";

const router = express.Router();

router.get(routesPath.defaultPath, async (req, res) => {
  const workOrders = await selectItems({ tableName: TableName.WORK_ORDERS });

  res.json(workOrders);
  consoleOutPut({
    date: getDate(),
    method: MethodType.GET,
    path: routesPath.workOrders,
    status: res.statusCode,
  });
});

router.get(routesPath.workOrder, async (req, res) => {
  // Get list of users
  const allUsers = await selectItems({
    tableName: TableName.USERS,
  });

  // Get list of work order assignees
  const workOrderAssignees = await selectItems({
    tableName: TableName.WORK_ORDERS_ASSIGNEES,
  });

  // Filter list of work order assignees by work order id
  const filterWorkOrderAssignees = workOrderAssignees?.filter(
    (order) => order.work_order_id === Number(req.params.id)
  );

  // Get list of users assignees to work orders
  const users = allUsers?.filter(({ id: id }) =>
    filterWorkOrderAssignees?.some(({ user_id: user_id }) => user_id === id)
  );

  // Get work order by id
  const workOrder = await selectItem({
    tableName: TableName.WORK_ORDERS,
    id: Number(req.params.id),
  });

  res.json({
    workOrder,
    users,
  });

  consoleOutPut({
    date: getDate(),
    method: MethodType.GET,
    path: routesPath.workOrders,
    status: res.statusCode,
  });
});

export default router;
