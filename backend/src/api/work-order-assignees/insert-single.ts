import { WorkOrderAssigneeSingleInsertUseCase } from "../../application/use-case/work-order-assignees/insert-single";

import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { currentDate } from "../../utils/current-date";

const insertWorkOrderAssignees = WorkOrderAssigneeSingleInsertUseCase({
  workOrderAssigneesRepos: UnitOfWork.workOrderAssigneesRepository,
});

export const handlerInsertWorkOrderAssignees = async (req: any, res: any) => {
  const { userId, workOrderId } = req.body;
  await insertWorkOrderAssignees(workOrderId, userId);

  consoleOutPut({
    date: currentDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
