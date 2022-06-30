import express from "express";

import { selectItems } from "../sqlite/client";
import { BackendUrl } from "../url";
import { consoleOutPut } from "../utils/console-out-put";
import { getDate } from "../utils/get-date";
import { MethodType, TableName } from "../utils/types";

const router = express.Router();

router.get("/", async (req, res) => {
  const workOrdersAssignees = await await selectItems({
    tableName: TableName.WORK_ORDERS_ASSIGNEES,
  });
  res.json(workOrdersAssignees);
  consoleOutPut({
    date: getDate(),
    method: MethodType.GET,
    path: BackendUrl.workOrdersAssignees,
    status: res.statusCode,
  });
});

export default router;
