import HOME_ROUTES from "./home";
import { CustomRoute } from "./types";
import USERS_ROUTES from "./users";
import WORK_ORDERS_ROUTES from "./work-orders";

export default [
  ...HOME_ROUTES,
  ...WORK_ORDERS_ROUTES,
  ...USERS_ROUTES,
] as CustomRoute[];
