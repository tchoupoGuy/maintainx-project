const baseUrl = "/api";

export const routesPath = {
  defaultPath: "/",
  users: `${baseUrl}/users`,
  noAssigneesUsers: `/no-assignees-users`,
  user: "/userId/:id",
  insertUser: `/insert-users`,
  workOrders: `${baseUrl}/work-orders`,
  insertWorkOrder: `/insert-work-orders`,
  updatePartial: "/workOrderId/:id/patch",
  workOrder: "/workOrderId/:id",
  workOrdersAssignees: `${baseUrl}/work-orders-assignees`,
  insertAssigneesWorkOrder: `/insert`,
};
