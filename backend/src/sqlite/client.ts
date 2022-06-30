import sql from "../db";
import { GenericObject } from "../utils/types";

type ItemType = {
  tableName: string;
  id?: number;
  data?: any;
};

export const selectItems = async (params: ItemType) => {
  const response: GenericObject[] = await sql(
    `SELECT * FROM ${params.tableName}`
  );
  return response;
};

export const selectItem = async (params: ItemType) => {
  const response: GenericObject[] = await sql(
    `SELECT * FROM ${params.tableName} WHERE id = ?`,
    params.id
  );
  return response[0];
};
