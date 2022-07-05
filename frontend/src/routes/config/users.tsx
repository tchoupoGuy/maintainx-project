import Productivity from "pages/productivity";

import { frontendUrl } from "urls";
import { CustomRoute } from "./types";

const USERS_ROUTES: CustomRoute[] = [
  {
    //Users
    path: frontendUrl.productivity,
    key: "users",
    exact: true,
    component: () => <Productivity />,
  },
];

export default USERS_ROUTES;
