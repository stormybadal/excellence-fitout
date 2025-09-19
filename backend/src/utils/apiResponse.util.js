/**
 * @module utils/apiResponse
 * Standard API response format for successful operations.
 *
 * @class
 * @param {number} statusCode - HTTP status code (e.g., 200, 201, 204).
 * @param {*} data - Response data payload.
 * @param {string} [message="Success"] - Optional success message.
 *
 * @property {number} statusCode
 * @property {*} data
 * @property {string} message
 * @property {boolean} success - True if statusCode is below 400.
 */
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
