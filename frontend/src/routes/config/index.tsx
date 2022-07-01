import HOME_ROUTES from "./home";
import { CustomRoute } from "./types";
import WORK_ORDERS_ROUTES from "./work-orders";

export default [...HOME_ROUTES, ...WORK_ORDERS_ROUTES] as CustomRoute[];
