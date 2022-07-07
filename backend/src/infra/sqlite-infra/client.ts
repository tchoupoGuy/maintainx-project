import sql from "../../db";
import { WorkOrder } from "../../models/work-orders";

type ItemParams = {
  tableName: string;
  id?: number;
};
type InsertParams = {
  tableName: string;
  innerTableName?: string;
  tableNameId?: string;
  innerTableNameId?: string;
  columns?: string;
  values: string;
};
type UpdateItemParams = {
  tableName: string;
  id: number;
  partialItem: Partial<WorkOrder>;
};

const selectItems = <T>(params: ItemParams) => {
  return sql(`SELECT * FROM ${params.tableName}`).then(
    (items) => items
  ) as Promise<T[] | undefined>;
};

const selectItem = <T>(params: ItemParams) => {
  return sql(`SELECT * FROM ${params.tableName} WHERE id = ?`, params.id).then(
    (item) => item[0]
  ) as Promise<T | undefined>;
};

const updateItem = (params: UpdateItemParams) => {
  const itemKey = Object.keys(params.partialItem)[0];
  const itemValue = Object.values(params.partialItem)[0];

  return sql(
    `UPDATE ${params.tableName} SET ${itemKey} = "${itemValue}"  WHERE id = ?`,
    params.id
  );
};

const insertItem = async (params: InsertParams) => {
  await sql(
    `INSERT INTO ${params.tableName} (${params.columns}) VALUES ${params.values}`
  );
};

export { selectItem, selectItems, updateItem, insertItem };
