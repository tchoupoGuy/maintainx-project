import express from "express";
import { getUserTuples } from "../helpers/item-tuples";

import { routesPath } from "../urls";
import { consoleOutPut } from "../utils/console-out-put";
import { getDate } from "../utils/get-date";
import { HttpStatusCode, TableName } from "../utils/types";
import { handlerGetAllWorkOrder } from "../api/work-order/get-all";
import { handlerGetWorkOrderById } from "../api/work-order/get-by-id";
import { handlerUpdateWorkOrderPartial } from "../api/work-order/update-partial";
import { insertItem } from "../infra/persistence/sqlite-infra/client";
import { handlerInsertWorkOrder } from "../api/work-order/insert";

const router = express.Router();

//Fetch all the work orders in the data base

router.get(routesPath.defaultPath, handlerGetAllWorkOrder);
router.get(routesPath.workOrder, handlerGetWorkOrderById);

// Update Work order status
router.patch(routesPath.updatePartial, handlerUpdateWorkOrderPartial);
router.post(routesPath.insertWorkOrder, handlerInsertWorkOrder);

export default router;
