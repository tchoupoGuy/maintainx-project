import { backendUrl } from "urls";
import { StatusType, updateWorkOrderInput } from "utils/types";

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
  static getWorkOrder = async (id: number) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    return await fetch(`${backendUrl.workOrders}/workOrderId/${id}`, {
      ...requestOptions,
    })
      .then(async (response: any) => {
        return await response.json();
      })
      .catch((Error) => {
        throw new Error("Something went wrong in ", Error);
      });
  };
  static updateWorkOrderStatus = async ({
    id,
    partialItem,
  }: updateWorkOrderInput) => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partialItem),
    };

    return await fetch(`${backendUrl.workOrders}/workOrderId/${id}/patch`, {
      ...requestOptions,
    })
      .then(async (response: any) => {
        return await response.json();
      })
      .catch((Error) => {
        throw new Error("Something went wrong in ", Error);
      });
  };
}

export default WorkOrdersServices;
