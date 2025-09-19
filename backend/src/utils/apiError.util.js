/**
 * @module utils/apiError
 * Custom API error for consistent error handling.
 *
 * @extends Error
 *
 * @param {number} statusCode - HTTP status code (e.g., 400, 404, 500).
 * @param {string} [message="Something went wrong"] - Error message.
 * @param {Array<object>} [errors=[]] - Optional detailed error info.
 * @param {string} [stack=""] - Optional custom stack trace.
 *
 * @property {number} statusCode
 * @property {null} data - Always null for error responses.
 * @property {boolean} success - Always false.
 * @property {Array<object>} errors
 */
class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
