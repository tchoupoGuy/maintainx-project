import {
  IUserRepository,
  IWorkOrderAssigneesRepository,
} from "../../interface/persistence";

type UserNoAssignedDeps = {
  userRepos: IUserRepository;
  workOrderAssigneesRepos: IWorkOrderAssigneesRepository;
};

export const UserGetNoAssignedUseCase =
  ({ userRepos, workOrderAssigneesRepos }: UserNoAssignedDeps) =>
  async () => {
    const users = await userRepos.getAll();
    const workOrdersAssignees = await workOrderAssigneesRepos.getAll();
    const noAssigneesUsers = users?.filter(
      ({ id }) => !workOrdersAssignees?.some(({ user_id }) => user_id === id)
    );
    return noAssigneesUsers;
  };
