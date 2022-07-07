import { UserCreateUseCase } from "../../application/use-case/user/insert";

import { UnitOfWork } from "../../infra";
import { consoleOutPut } from "../../utils/console-out-put";
import { getDate } from "../../utils/get-date";

const insertUser = UserCreateUseCase({
  userRepos: UnitOfWork.userRepository,
});

export const handlerInsertUser = async (req: any, res: any) => {
  const result = await insertUser(req.body);
  res.json({ result });

  consoleOutPut({
    date: getDate(),
    method: req.method,
    path: req.path,
    status: res.statusCode,
  });
};
