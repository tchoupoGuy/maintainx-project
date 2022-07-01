import express from "express";

import { selectItem, selectItems } from "../sqlite/client";
import { routesPath } from "../url";
import { consoleOutPut } from "../utils/console-out-put";
import { getDate } from "../utils/get-date";
import { MethodType, TableName } from "../utils/types";

const router = express.Router();

router.get("/", async (req, res) => {
  const workOrders = await selectItems({ tableName: TableName.WORK_ORDERS });

  res.json(workOrders);
  consoleOutPut({
    date: getDate(),
    method: MethodType.GET,
    path: routesPath.workOrders,
    status: res.statusCode,
  });
});

router.get("/workOrderId/:id", async (req, res) => {
  const workOrders = await selectItem({
    tableName: TableName.WORK_ORDERS,
    id: Number(req.params.id),
  });

  res.json(workOrders);
  consoleOutPut({
    date: getDate(),
    method: MethodType.GET,
    path: routesPath.workOrders,
    status: res.statusCode,
  });
});

export default router;
