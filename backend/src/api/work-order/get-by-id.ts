import { ValidationError } from "../../application/errors";
import { WorkOrderGetByIdUseCase } from "../../application/use-case/work-order/get-by-id";
import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { currentDate } from "../../utils/current-date";

const getWorkOrderById = WorkOrderGetByIdUseCase({
  workOrderRepos: UnitOfWork.workOrderRepository,
  userRepos: UnitOfWork.userRepository,
  workOrderAssigneesRepos: UnitOfWork.workOrderAssigneesRepository,
});

export const handlerGetWorkOrderById = async (req: any, res: any) => {
  const { id } = req.params || {};

  if (!id) {
    throw new ValidationError(`Missing id ${id} in path`);
  }
  const workOrder = await getWorkOrderById(Number(id));
  res.json(workOrder);
  consoleOutPut({
    date: currentDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
