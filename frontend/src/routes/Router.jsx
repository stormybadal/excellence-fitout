import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { lazy } from "react";
import RootLayout from "../components/layouts/RootLayout.jsx";
import DashboardLayout from "../components/layouts/DashboardLayout.jsx";
import { routes } from "./routes.js";

// Create the root route
const rootRoute = createRootRoute({
  component: RootLayout,
});

// Helper to dynamically import page components
const importPage = (name) => lazy(() => import(`../pages/${name}.jsx`));

// Separate routes by layout
const mainRoutesConfig = routes.filter(r => r.layout !== "DashboardLayout");
const dashboardRoutesConfig = routes.filter(r => r.layout === "DashboardLayout");

// Create main routes (children of root)
const mainRoutes = mainRoutesConfig.map(route =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: route.path,
    component: importPage(route.name),
  })
);

// Create a dashboard parent route (child of root)
const dashboardParentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardLayout,
});

// Create dashboard child routes (relative paths)
const dashboardChildRoutes = dashboardRoutesConfig.map(route =>
  createRoute({
    getParentRoute: () => dashboardParentRoute,
    path: route.path.replace("/dashboard/", "") || "/", // Handle "/dashboard" path correctly
    component: importPage(route.name),
  })
);

// Add dashboard routes as children to dashboardParentRoute
dashboardParentRoute.addChildren(dashboardChildRoutes);

// Combine all children under root
const routeTree = rootRoute.addChildren([...mainRoutes, dashboardParentRoute]);

// Create and export router
export const router = createRouter({ routeTree });