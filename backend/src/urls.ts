const baseUrl = "/api";

export const routesPath = {
  defaultPath: "/",
  users: `${baseUrl}/users`,
  noAssigneesUsers: `/no-assignees-users`,
  user: "/userId/:id",
  createWorkOrder: `${baseUrl}/create-work-orders`,
  workOrders: `${baseUrl}/work-orders`,
  workOrder: "/workOrderId/:id",
  workOrdersAssignees: `${baseUrl}/work-orders-assignees`,
  updateWorkOrderStatus: "/workOrderId/:id/status/:status",
};
