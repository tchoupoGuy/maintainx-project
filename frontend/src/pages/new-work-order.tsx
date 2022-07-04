import NewWorkOrdersForm from "components/new-work-orders/new-work-orders-form";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { frontendUrl } from "urls";

const NewWorkOrder: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  console.log(code);
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link style={{ padding: 8 }} to={frontendUrl.home}>
          Home
        </Link>
        <Link style={{ padding: 8 }} to={frontendUrl.workOrders}>
          Work Orders
        </Link>
      </div>

      <NewWorkOrdersForm />
    </>
  );
};

export default NewWorkOrder;
