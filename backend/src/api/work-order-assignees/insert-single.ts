// import { WorkOrderAssigneesInsertUseCase } from "../../application/use-case/work-order-assignees/insert";
// import { WorkOrderAssigneeSingleInsertUseCase } from "../../application/use-case/work-order-assignees/insert-single";
// import { WorkOrderInsertUseCase } from "../../application/use-case/work-order/insert";

// import { UnitOfWork } from "../../infra/persistence";
// import { consoleOutPut } from "../../utils/console-out-put";
// import { getDate } from "../../utils/get-date";

// const insertWorkOrderAssignees = WorkOrderAssigneeSingleInsertUseCase({
//     workOrderAssigneesRepos:UnitOfWork.workOrderAssigneesRepository
// });

// export const handlerInsertWorkOrderAssignees = async (req: any, res: any) => {
//    await insertWorkOrderAssignees();

//   consoleOutPut({
//     date: getDate(),
//     method: req.method,
//     path: req.path,
//     status: res.statusCode,
//   });
// };
