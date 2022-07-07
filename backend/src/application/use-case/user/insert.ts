import { getUserTuples } from "../../../helpers/item-tuples";
import { User } from "../../../models/user";

import { IUserRepository } from "../../interface/persistence";

type UserCreateDeps = {
  userRepos: IUserRepository;
};

export const UserCreateUseCase =
  ({ userRepos }: UserCreateDeps) =>
  async (newUser: User[]) => {
    const usersValues = getUserTuples(newUser);
    const userColumns = "name,email";

    const lastUserId = await userRepos.insert({
      columns: userColumns,
      values: usersValues,
    });
    return lastUserId;
  };
