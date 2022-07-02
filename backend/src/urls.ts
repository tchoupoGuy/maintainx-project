const baseUrl = "/api";

export const routesPath = {
  users: `${baseUrl}/users`,
  workOrders: `${baseUrl}/work-orders`,
  workOrdersAssignees: `${baseUrl}/work-orders-assignees`,
  workOrder: "/workOrderId/:id",
  user: "/userId/:id",
  defaultPath: "/",
  updateWorkOrderStatus: "/workOrderId/:id/status/:status",
};
