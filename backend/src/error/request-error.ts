export class RequestError {
  code?: string;
  message: string;

  constructor(message: string, code?: string) {
    this.code = code;
    this.message = message;
  }
}
