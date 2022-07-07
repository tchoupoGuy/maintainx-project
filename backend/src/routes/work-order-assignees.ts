import express from "express";
import { handlerGetAllWorkOrderAssignees } from "../api/work-order-assignees/get-all";
import { handlerInsertWorkOrderAssignees } from "../api/work-order-assignees/insert";

import { routesPath } from "../urls";

const router = express.Router();

router.get(routesPath.defaultPath, handlerGetAllWorkOrderAssignees);
router.post(
  routesPath.insertAssigneesWorkOrder,
  handlerInsertWorkOrderAssignees
);

export default router;
