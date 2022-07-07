import { IUserRepository } from "../../../application/interface/persistence";
import { User } from "../../../models/user";
import { InsertWorkOrderType } from "../../../models/work-orders";

import { TableName } from "../../../utils/types";
import { insertItem, selectItem, selectItems } from "./client";
const { USERS } = TableName;

export class UserRepository implements IUserRepository {
  async getAll() {
    return selectItems<User>({ tableName: USERS });
  }

  async getById(id: number) {
    return selectItem<User>({ tableName: USERS, id });
  }

  async insert({ columns, values }: InsertWorkOrderType) {
    await insertItem({ tableName: USERS, columns, values });
  }
}
