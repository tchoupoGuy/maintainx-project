import NavLinks from "components/nav-link";
import React from "react";

import { workOrderDetailsLinks } from "components/nav-link/nav-links.definitions";
import NewWorkOrdersForm from "components/new-work-orders/new-work-orders-form";
import PageTitle from "components/page-title";

const NewWorkOrder: React.FC = () => {
  return (
    <>
      <NavLinks items={workOrderDetailsLinks} />
      <PageTitle title="New Work Order" />
      <NewWorkOrdersForm />
    </>
  );
};

export default NewWorkOrder;
