import { UserGetAllUseCase } from "../../application/use-case/user/get-all";
import { UnitOfWork } from "../../infra";

import { consoleOutPut } from "../../utils/console-out-put";
import { getDate } from "../../utils/get-date";

const getAllUser = UserGetAllUseCase({
  userRepos: UnitOfWork.userRepository,
});

export const handlerGetAllUser = async (req: any, res: any) => {
  const users = await getAllUser();

  res.json(users);

  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
