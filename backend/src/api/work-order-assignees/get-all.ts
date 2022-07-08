import { WorkOrderAssigneesGetAllUseCase } from "../../application/use-case/work-order-assignees/get-all";

import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { currentDate } from "../../utils/current-date";

const getAllWorkOrderAssignees = WorkOrderAssigneesGetAllUseCase({
  workOrderAssigneesRepos: UnitOfWork.workOrderAssigneesRepository,
});

export const handlerGetAllWorkOrderAssignees = async (req: any, res: any) => {
  const workOrdersAssignees = await getAllWorkOrderAssignees();

  res.json(workOrdersAssignees);
  consoleOutPut({
    date: currentDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
