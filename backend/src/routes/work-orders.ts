import express from "express";

import { routesPath } from "../urls";

import { handlerGetAllWorkOrder } from "../api/work-order/get-all";
import { handlerGetWorkOrderById } from "../api/work-order/get-by-id";
import { handlerUpdateWorkOrderPartial } from "../api/work-order/update-partial";
import { handlerInsertWorkOrder } from "../api/work-order/insert";

const router = express.Router();

//Fetch all the work orders in the data base

router.get(routesPath.defaultPath, handlerGetAllWorkOrder);
router.get(routesPath.workOrder, handlerGetWorkOrderById);

// Update Work order status
router.patch(routesPath.updatePartial, handlerUpdateWorkOrderPartial);
router.post(routesPath.insertWorkOrder, handlerInsertWorkOrder);

export default router;
