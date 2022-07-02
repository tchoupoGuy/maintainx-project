import WorkOrderDetails from "pages/work-order-details";
import WorkOrders from "pages/work-orders";
import { frontendUrl } from "../../urls";
import { CustomRoute } from "./types";

const WORK_ORDERS_ROUTES: CustomRoute[] = [
  {
    // /work-order
    path: frontendUrl.workOrders,
    key: "work-orders",
    exact: true,
    component: () => <WorkOrders />,
  },
  {
    // /work-order
    path: `${frontendUrl.workOrders}/:id`,
    key: "work-order-details",
    exact: true,
    component: () => <WorkOrderDetails />,
  },
];

export default WORK_ORDERS_ROUTES;
