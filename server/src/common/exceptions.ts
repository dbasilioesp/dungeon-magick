
export class APIError extends Error {

}
export class NotFound extends APIError {

  public status = 404;

}
