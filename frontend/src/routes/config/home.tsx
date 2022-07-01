import { Link } from "react-router-dom";

import { frontendUrl } from "../../urls";
import { CustomRoute } from "./types";
function Home() {
  return (
    <>
      <p>
        Take me to the <Link to={frontendUrl.workOrders}>Work Orders Page</Link>
        .
      </p>
    </>
  );
}
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
