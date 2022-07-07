import { IUserRepository } from "../../interface/persistence";

type UserGetByIdAllDeps = {
  userRepos: IUserRepository;
};

export const UserGetByIdUseCase =
  ({ userRepos }: UserGetByIdAllDeps) =>
  async (id: number) => {
    const users = await userRepos.getById(id);
    return users;
  };
