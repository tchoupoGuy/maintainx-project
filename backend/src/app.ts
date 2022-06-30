import express from "express";
import usersRouter from "./routes/users";
import workOrdersRouter from "./routes/work-orders";
import workOrdersAssignees from "./routes/work-order-assignees";
import { BackendUrl } from "./url";
const app = express();

app.use(express.json());

app.use(BackendUrl.users, usersRouter);
app.use(BackendUrl.workOrders, workOrdersRouter);
app.use(BackendUrl.workOrdersAssignees, workOrdersAssignees);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
