import sql from "../db";
import { GenericObject } from "../utils/types";

type ItemParams = {
  tableName: string;
  id?: number;
};
type UpdateItemParams = {
  tableName: string;
  id?: number;
  status?: string;
  item?: string | number;
  newItem?: string | number;
};

export const selectItems = async (params: ItemParams) => {
  const response: GenericObject[] = await sql(
    `SELECT * FROM ${params.tableName}`
  );
  return response;
};

export const selectItem = async (params: ItemParams) => {
  const response: GenericObject[] = await sql(
    `SELECT * FROM ${params.tableName} WHERE id = ?`,
    params.id
  );
  return response[0];
};

export const updateItem = async (params: UpdateItemParams) => {
  const response: GenericObject[] = await sql(
    `UPDATE ${params.tableName} SET ${params.item} = "${params.newItem}"  WHERE id = ?`,
    params.id
  );
  return response[0];
};

// `UPDATE ${params.tableName} SET ${params.item} = ${params.newItem}  WHERE id = ?`,
