import NavLinks from "components/nav-link";
import { workOrderDetailsLinks } from "components/nav-link/nav-links.definitions";
import PageTitle from "components/page-title";
import UsersTable from "components/users";
import React, { useEffect, useState } from "react";

import UsersServices from "services/users-api";

import { User } from "utils/types";

const Productivity: React.FC = () => {
  const [noAssigneesUsers, setNoAssigneesUsers] = useState<User[]>([]);

  useEffect(() => {
    UsersServices.getNoAssigneesUsers().then((result) => {
      setNoAssigneesUsers(result);
    });
  }, []);
  return (
    <>
      <NavLinks items={workOrderDetailsLinks} />
      <PageTitle title="Not assigned users" />
      <UsersTable userList={noAssigneesUsers} />
    </>
  );
};

export default Productivity;
