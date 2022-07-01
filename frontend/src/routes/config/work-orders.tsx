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
];

export default WORK_ORDERS_ROUTES;
