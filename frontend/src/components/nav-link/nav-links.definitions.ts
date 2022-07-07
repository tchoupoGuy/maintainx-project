import { frontendUrl } from "urls";
import { LinkName, NavLinksType } from "utils/types";

const homeLinks: NavLinksType[] = [
  { id: 1, name: LinkName.WORK_ORDERS, url: frontendUrl.workOrders },
];

const WorkOrdersLinks: NavLinksType[] = [
  { id: 1, name: LinkName.HOME, url: frontendUrl.home },
  {
    id: 2,
    name: LinkName.NEW_WORK_ORDER,
    url: `${frontendUrl.newWorkOrders}/new`,
  },
  { id: 3, name: LinkName.NOT_ASSIGNED_USERS, url: frontendUrl.productivity },
];
const workOrderDetailsLinks: NavLinksType[] = [
  { id: 1, name: LinkName.HOME, url: frontendUrl.home },
  { id: 2, name: LinkName.WORK_ORDERS, url: frontendUrl.workOrders },
];

export { homeLinks, WorkOrdersLinks, workOrderDetailsLinks };
