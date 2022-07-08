import { WorkOrderAssigneesInsertUseCase } from "../../application/use-case/work-order-assignees/insert";
import { UnitOfWork } from "../../infra";

import { consoleOutPut } from "../../utils/console-out-put";
import { currentDate } from "../../utils/current-date";

const insertWorkOrderAssignees = WorkOrderAssigneesInsertUseCase({
  workOrderAssigneesRepos: UnitOfWork.workOrderAssigneesRepository,
});

export const handlerInsertWorkOrderAssignees = async (req: any, res: any) => {
  const result = await insertWorkOrderAssignees(req.body);
  res.json({ result });
  consoleOutPut({
    date: currentDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
