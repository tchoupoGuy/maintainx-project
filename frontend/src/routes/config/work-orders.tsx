import NewWorkOrder from "pages/new-work-order";
import WorkOrderDetails from "pages/work-order-details";
import WorkOrders from "pages/work-orders";
import { frontendUrl } from "urls";
import { CustomRoute } from "./types";

const WORK_ORDERS_ROUTES: CustomRoute[] = [
  {
    // work orders
    path: frontendUrl.workOrders,
    key: "work-orders",
    exact: true,
    component: () => <WorkOrders />,
  },
  {
    // work order Details
    path: `${frontendUrl.workOrders}/:id`,
    key: "work-order-details",
    exact: true,
    component: () => <WorkOrderDetails />,
  },
  {
    // New work order
    path: `${frontendUrl.newWorkOrders}/:code`,
    key: "new-work-order",
    exact: true,
    component: () => <NewWorkOrder />,
  },
];

export default WORK_ORDERS_ROUTES;
