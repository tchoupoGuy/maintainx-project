import { backendUrl } from "urls";

class UsersServices {
  static getUsers = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    return await fetch(backendUrl.users, { ...requestOptions })
      .then(async (response: any) => {
        return await response.json();
      })
      .catch((Error) => {
        throw new Error("Something went wrong in ", Error);
      });
  };
  static getUser = async (id: number) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    return await fetch(`${backendUrl.users}/userId/${id}`, {
      ...requestOptions,
    })
      .then(async (response: any) => {
        return await response.json();
      })
      .catch((Error) => {
        throw new Error("Something went wrong in ", Error);
      });
  };

  static getNoAssigneesUsers = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    return await fetch(`${backendUrl.users}/no-assignees-users`, {
      ...requestOptions,
    })
      .then(async (response: any) => {
        return await response.json();
      })
      .catch((Error) => {
        throw new Error("Something went wrong in ", Error);
      });
  };
}

export default UsersServices;
