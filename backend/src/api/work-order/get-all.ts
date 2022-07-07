import { WorkOrderGetAllUseCase } from "../../application/use-case/work-order/get-all";
import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { getDate } from "../../utils/get-date";

const getAllWorkOrder = WorkOrderGetAllUseCase({
  workOrderRepos: UnitOfWork.workOrderRepository,
});

export const handlerGetAllWorkOrder = async (req: any, res: any) => {
  const workOrders = await getAllWorkOrder();

  res.json(workOrders);
  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
