import { UserGetNoAssignedUseCase } from "../../application/use-case/user/get-no-assigned";
import { UnitOfWork } from "../../infra";

import { consoleOutPut } from "../../utils/console-out-put";
import { currentDate } from "../../utils/current-date";

const getNoAssignedUsers = UserGetNoAssignedUseCase({
  userRepos: UnitOfWork.userRepository,
  workOrderAssigneesRepos: UnitOfWork.workOrderAssigneesRepository,
});

export const handlerGetNoAssignedUsers = async (req: any, res: any) => {
  const users = await getNoAssignedUsers();

  res.json(users);

  consoleOutPut({
    date: currentDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
