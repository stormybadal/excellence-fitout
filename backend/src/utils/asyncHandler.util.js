/**
 * @module utils/asyncHandler
 * Express middleware wrapper to handle async errors.
 *
 * Automatically catches rejected promises and forwards errors to Express error handlers.
 *
 * @param {Function} requestHandler - Async route handler function (req, res, next).
 * @returns {Function} Wrapped Express middleware with error handling.
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
