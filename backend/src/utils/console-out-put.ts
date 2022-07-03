import { ConsoleOutPutType } from "./types";

export const consoleOutPut = ({
  date,
  method,
  path,
  status,
}: ConsoleOutPutType) => {
  return console.log({ date, method, path, status });
};
