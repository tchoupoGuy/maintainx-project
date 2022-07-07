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

    await userRepos.insert({
      columns: userColumns,
      values: usersValues,
    });

    const allUser = await userRepos.getAll();
    const filterNewUsersIds = allUser
      ?.filter((user) =>
        newUser.some((newUser) => user.email === newUser.email)
      )
      .map((user) => user.id);
    console.log(filterNewUsersIds, "filterNewUsersIds");
    return filterNewUsersIds;
  };
