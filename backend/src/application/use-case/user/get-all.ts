import { IUserRepository } from "../../interface/persistence";

type UserGetAllDeps = {
  userRepos: IUserRepository;
};

export const UserGetAllUseCase =
  ({ userRepos }: UserGetAllDeps) =>
  async () => {
    const users = await userRepos.getAll();
    return users;
  };
