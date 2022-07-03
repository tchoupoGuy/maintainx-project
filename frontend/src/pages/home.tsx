import React from "react";
import { Link } from "react-router-dom";
import { frontendUrl } from "urls";

const Home: React.FC = () => {
  return (
    <>
      <p>
        Take me to the <Link to={frontendUrl.workOrders}>Work Orders Page</Link>
        .
      </p>
    </>
  );
};
export default Home;
