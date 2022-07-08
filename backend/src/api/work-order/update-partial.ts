import { ValidationError } from "../../application/errors";
import { WorkOrderGetUpdatePartialUseCase } from "../../application/use-case/work-order/update-partial";
import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { currentDate } from "../../utils/current-date";

const updateWorkOrderPartial = WorkOrderGetUpdatePartialUseCase({
  workOrderRepos: UnitOfWork.workOrderRepository,
});

export const handlerUpdateWorkOrderPartial = async (req: any, res: any) => {
  const { id } = req.params;
  if (!id) {
    throw new ValidationError(`Missing id ${id}  in path`);
  }
  const workOrderPartial = await updateWorkOrderPartial(Number(id), req.body);

  res.json(workOrderPartial);
  consoleOutPut({
    date: currentDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
