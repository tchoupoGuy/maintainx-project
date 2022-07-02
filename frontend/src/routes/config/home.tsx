import Home from "pages/home";

import { frontendUrl } from "urls";
import { CustomRoute } from "./types";

const HOME_ROUTES: CustomRoute[] = [
  {
    //Home
    path: frontendUrl.home,
    key: "home",
    exact: true,
    component: () => <Home />,
  },
];

export default HOME_ROUTES;
