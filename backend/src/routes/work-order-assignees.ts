import express from "express";

import { selectItems } from "../sqlite/client";
import { routesPath } from "../urls";
import { consoleOutPut } from "../utils/console-out-put";
import { getDate } from "../utils/get-date";
import { TableName } from "../utils/types";

const router = express.Router();

router.get(routesPath.defaultPath, async (req, res) => {
  const workOrdersAssignees = await await selectItems({
    tableName: TableName.WORK_ORDERS_ASSIGNEES,
  });
  res.json(workOrdersAssignees);
  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
});

export default router;
