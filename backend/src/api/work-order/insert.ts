import { WorkOrderInsertUseCase } from "../../application/use-case/work-order/insert";

import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { currentDate } from "../../utils/current-date";

const insertWorkOrder = WorkOrderInsertUseCase({
  workOrderRepos: UnitOfWork.workOrderRepository,
});

export const handlerInsertWorkOrder = async (req: any, res: any) => {
  const newWorkOrder = await insertWorkOrder(req.body);
  res.jso(newWorkOrder);
  consoleOutPut({
    date: currentDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
