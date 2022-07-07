import { WorkOrderAssigneeSingleInsertUseCase } from "../../application/use-case/work-order-assignees/insert-single";

import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { getDate } from "../../utils/get-date";

const insertWorkOrderAssignees = WorkOrderAssigneeSingleInsertUseCase({
  workOrderAssigneesRepos: UnitOfWork.workOrderAssigneesRepository,
});

export const handlerInsertWorkOrderAssignees = async (req: any, res: any) => {
  const { userId, workOrderId } = req.body;
  await insertWorkOrderAssignees(workOrderId, userId);

  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
