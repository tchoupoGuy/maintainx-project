import { WorkOrderInsertUseCase } from "../../application/use-case/work-order/insert";

import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { getDate } from "../../utils/get-date";

const insertWorkOrder = WorkOrderInsertUseCase({
  workOrderRepos: UnitOfWork.workOrderRepository,
});

export const handlerInsertWorkOrder = async (req: any, res: any) => {
  const result = await insertWorkOrder(req.body);
  res.json({ result });
  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
