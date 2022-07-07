import { UserGetNoAssignedUseCase } from "../../application/use-case/user/get-no-assigned";

import { UnitOfWork } from "../../infra/persistence";
import { consoleOutPut } from "../../utils/console-out-put";
import { getDate } from "../../utils/get-date";

const getNoAssignedUsers = UserGetNoAssignedUseCase({
  userRepos: UnitOfWork.userRepository,
  workOrderAssigneesRepos: UnitOfWork.workOrderAssigneesRepository,
});

export const handlerGetNoAssignedUsers = async (req: any, res: any) => {
  const users = await getNoAssignedUsers();

  res.json(users);

  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
