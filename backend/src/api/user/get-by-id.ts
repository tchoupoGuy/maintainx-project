import { ValidationError } from "../../application/errors";
import { UserGetByIdUseCase } from "../../application/use-case/user/get-by-id";
import { UnitOfWork } from "../../infra";

import { consoleOutPut } from "../../utils/console-out-put";
import { getDate } from "../../utils/get-date";

const getUserById = UserGetByIdUseCase({
  userRepos: UnitOfWork.userRepository,
});

export const handlerGetUserById = async (req: any, res: any) => {
  const { id } = req.params;
  if (!id) {
    throw new ValidationError(`Missing id ${id} in path`);
  }
  const users = await getUserById(Number(id));

  res.json(users);

  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
