import { backendUrl } from "urls";

class WorkOrdersServices {
  static getWorkOrders = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    return await fetch(backendUrl.workOrders, { ...requestOptions })
      .then(async (response: any) => {
        return await response.json();
      })
      .catch((Error) => {
        throw new Error("Something went wrong in ", Error);
      });
  };
}

export default WorkOrdersServices;
