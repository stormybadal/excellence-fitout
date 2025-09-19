## API Response Status Codes

| Code    | Status                | Description                                                                           |
| ------- | --------------------- | ------------------------------------------------------------------------------------- |
| **200** | OK                    | For successful `GET` / `POST` / `PUT` operations.                                     |
| **201** | Created               | When a resource is successfully created (e.g., new user or product).                  |
| **400** | Bad Request           | Missing or invalid request body/params (e.g., required field not sent or wrong type). |
| **401** | Unauthorized          | Token missing/invalid or no auth header. Unauthorized access.                         |
| **403** | Forbidden             | Authenticated but lacks permission (e.g., user trying to access admin-only route).    |
| **404** | Not Found             | When resource (user, product, etc.) isn’t found in DB.                                |
| **409** | Conflict              | When trying to create a duplicate entry (e.g., user already exists).                  |
| **500** | Internal Server Error | A generic error for unexpected failures on the server.                                |
