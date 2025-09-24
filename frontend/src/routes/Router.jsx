// import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
// import { lazy } from "react";
// import RootLayout from "../components/layouts/RootLayout.jsx";
// import DashboardLayout from "../components/layouts/DashboardLayout.jsx";
// import { routes } from "./routes.js";

// // Create the root route
// const rootRoute = createRootRoute({
//   component: RootLayout,
// });

// // Helper to dynamically import page components
// const importPage = (name) => lazy(() => import(`../pages/${name}.jsx`));

// // Separate routes by layout
// const mainRoutesConfig = routes.filter(r => r.layout !== "DashboardLayout");
// const dashboardRoutesConfig = routes.filter(r => r.layout === "DashboardLayout");

// // Create main routes (children of root)
// const mainRoutes = mainRoutesConfig.map(route =>
//   createRoute({
//     getParentRoute: () => rootRoute,
//     path: route.path,
//     component: importPage(route.name),
//   })
// );

// // Create a dashboard parent route (child of root)
// const dashboardParentRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/dashboard",
//   component: DashboardLayout,
// });

// // Create dashboard child routes (relative paths)
// const dashboardChildRoutes = dashboardRoutesConfig.map(route =>
//   createRoute({
//     getParentRoute: () => dashboardParentRoute,
//     path: route.path.replace("/dashboard/", "") || "/", // Handle "/dashboard" path correctly
//     component: importPage(route.name),
//   })
// );

// // Add dashboard routes as children to dashboardParentRoute
// dashboardParentRoute.addChildren(dashboardChildRoutes);

// // Combine all children under root
// const routeTree = rootRoute.addChildren([...mainRoutes, dashboardParentRoute]);

// // Create and export router
// export const router = createRouter({ routeTree });








// src/routes/router.js
// import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
// import { lazy } from "react";
// import RootLayout from "../components/layouts/RootLayout.jsx";
// import DashboardLayout from "../components/layouts/DashboardLayout.jsx";
// import { routes } from "./routes.js";

// // ----------------------
// // Helper: Dynamic import
// // ----------------------
// const importPage = (name) => lazy(() => import(`../pages/${name}.jsx`));

// // ----------------------
// // Root Route
// // ----------------------
// const rootRoute = createRootRoute({
//   component: RootLayout,
// });

// // ----------------------
// // Separate routes by layout
// // ----------------------
// const mainRoutesConfig = routes.filter(r => r.layout !== "DashboardLayout");
// const dashboardRoutesConfig = routes.filter(r => r.layout === "DashboardLayout");

// // ----------------------
// // Create main routes (children of root)
// // ----------------------
// const mainRoutes = mainRoutesConfig.map(route =>
//   createRoute({
//     getParentRoute: () => rootRoute,
//     path: route.path,
//     component: importPage(route.name),
//   })
// );

// // ----------------------
// // Dashboard parent route
// // ----------------------
// const dashboardParentRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/dashboard",
//   component: DashboardLayout,
// });

// // ----------------------
// // Dashboard child routes
// // ----------------------
// const dashboardChildRoutes = dashboardRoutesConfig.map(route =>
//   createRoute({
//     getParentRoute: () => dashboardParentRoute,
//     path: route.path === "/dashboard" ? "/" : route.path.replace("/dashboard/", ""),
//     component: importPage(route.name),
//   })
// );

// // Add children to dashboard parent
// dashboardParentRoute.addChildren(dashboardChildRoutes);

// // ----------------------
// // Combine all routes under root
// // ----------------------
// const routeTree = rootRoute.addChildren([...mainRoutes, dashboardParentRoute]);

// // ----------------------
// // Export router
// // ----------------------
// export const router = createRouter({ routeTree });




import { createRootRoute, createRoute, createRouter, redirect } from "@tanstack/react-router";
import { lazy } from "react";
import RootLayout from "../components/layouts/RootLayout.jsx";
import DashboardLayout from "../components/layouts/DashboardLayout.jsx";
import { routes } from "./routes.js";
import { getUser } from "../utils/auth.js";

// ----------------------
// Helper: Dynamic import
// ----------------------
const importPage = (name) => lazy(() => import(`../pages/${name}.jsx`));

// ----------------------
// Helper: Check auth (cookie)
// ----------------------
const isLoggedIn = () => {
  // Example: check accessToken cookie
  return document.cookie.includes("accessToken=");
};

// ----------------------
// Root Route
// ----------------------
const rootRoute = createRootRoute({
  component: RootLayout,
});

// ----------------------
// Separate routes by layout
// ----------------------
const mainRoutesConfig = routes.filter((r) => r.layout !== "DashboardLayout");
const dashboardRoutesConfig = routes.filter((r) => r.layout === "DashboardLayout");

// ----------------------
// Create main routes (children of root)
// ----------------------
const mainRoutes = mainRoutesConfig.map((route) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: route.path,
    component: importPage(route.name),
  })
);

// ----------------------
// Dashboard parent route with protection
// ----------------------
const dashboardParentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardLayout,
  beforeLoad: () => {
    const user = getUser();
    if (!user) {
      throw redirect({ to: "/admin/in" });
    }
    // return { user }; // pass down if needed
  },
});


// ----------------------
// Dashboard child routes
// ----------------------
const dashboardChildRoutes = dashboardRoutesConfig.map((route) =>
  createRoute({
    getParentRoute: () => dashboardParentRoute,
    path: route.path === "/dashboard" ? "/" : route.path.replace("/dashboard/", ""),
    component: importPage(route.name),
  })
);

// Add children to dashboard parent
dashboardParentRoute.addChildren(dashboardChildRoutes);

// ----------------------
// Combine all routes under root
// ----------------------
const routeTree = rootRoute.addChildren([...mainRoutes, dashboardParentRoute]);

// ----------------------
// Export router
// ----------------------
export const router = createRouter({ routeTree });
