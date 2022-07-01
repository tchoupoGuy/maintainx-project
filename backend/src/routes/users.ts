import express from "express";

import { selectItem, selectItems } from "../sqlite/client";
import { routesPath } from "../url";
import { consoleOutPut } from "../utils/console-out-put";
import { getDate } from "../utils/get-date";
import { MethodType, TableName } from "../utils/types";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await selectItems({ tableName: TableName.USERS });
  res.json(users);
  consoleOutPut({
    date: getDate(),
    method: MethodType.GET,
    path: routesPath.users,
    status: res.statusCode,
  });
});

router.get("/userId/:id", async (req, res) => {
  const users = await selectItem({
    tableName: TableName.USERS,
    id: Number(req.params.id),
  });
  res.json(users);
  consoleOutPut({
    date: getDate(),
    method: MethodType.GET,
    path: routesPath.users,
    status: res.statusCode,
  });
});

export default router;
