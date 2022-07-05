import express from "express";

import { selectItem, selectItems } from "../sqlite/client";
import { routesPath } from "../urls";
import { consoleOutPut } from "../utils/console-out-put";
import { getDate } from "../utils/get-date";
import { TableName } from "../utils/types";

const router = express.Router();

router.get(routesPath.defaultPath, async (req, res) => {
  const users = await selectItems({ tableName: TableName.USERS });

  res.json(users);
  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
});

router.get(routesPath.noAssigneesUsers, async (req, res) => {
  const users = await selectItems({ tableName: TableName.USERS });

  const workOrdersAssignees = await selectItems({
    tableName: TableName.WORK_ORDERS_ASSIGNEES,
  });

  const noAssigneesUsers = users.filter(
    ({ id }) => !workOrdersAssignees.some(({ user_id }) => user_id === id)
  );

  res.json(noAssigneesUsers);
  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
});

router.get(routesPath.user, async (req, res) => {
  const users = await selectItem({
    tableName: TableName.USERS,
    id: Number(req.params.id),
  });
  res.json(users);
  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
});

export default router;