import express from "express";

import usersRouter from "./routes/users";
import workOrdersRouter from "./routes/work-orders";
import workOrdersAssignees from "./routes/work-order-assignees";
import { routesPath } from "./url";
const app = express();

app.use(express.json());

app.use(routesPath.users, usersRouter);
app.use(routesPath.workOrders, workOrdersRouter);
app.use(routesPath.workOrdersAssignees, workOrdersAssignees);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
