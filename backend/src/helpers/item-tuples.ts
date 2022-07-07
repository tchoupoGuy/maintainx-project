import { User } from "../models/user";

export const getUserTuples = (usersList: User[]) => {
  return usersList
    .map((user: User) => {
      const tuples = `("${user.name}","${user.email}")`;
      return tuples;
    })
    .join();
};
