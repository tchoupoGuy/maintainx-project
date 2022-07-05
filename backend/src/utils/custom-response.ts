import { GenericObject } from "./types";

export const customResponse = (statusCode: number, data: GenericObject) => {
  const HttpResponse: GenericObject = {
    200: data,
    201: data,
    400: "BAD_REQUEST",
    401: "UNAUTHORIZED",
    403: "FORBIDDEN",
    404: "NOT_FOUND",
    500: "SERVER_ERROR",
  };
  return HttpResponse[statusCode];
};
