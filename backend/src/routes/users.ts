import express from "express";
import { handlerGetAllUser } from "../api/user/get-all";
import { handlerGetUserById } from "../api/user/get-by-id";
import { handlerGetNoAssignedUsers } from "../api/user/get-no-assigned";
import { handlerInsertUser } from "../api/user/insert";

import { routesPath } from "../urls";

const router = express.Router();

router.get(routesPath.defaultPath, handlerGetAllUser);

router.get(routesPath.user, handlerGetUserById);
router.get(routesPath.insertUser, handlerInsertUser);
router.get(routesPath.noAssigneesUsers, handlerGetNoAssignedUsers);

export default router;
