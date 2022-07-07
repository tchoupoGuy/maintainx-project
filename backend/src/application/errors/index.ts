import { RequestError } from "../../error/request-error";
import { CustomErrorCode } from "./codes";

export class ValidationError extends RequestError {
  constructor(message: string) {
    super(CustomErrorCode.VALIDATION_ERROR, message);
  }
}
