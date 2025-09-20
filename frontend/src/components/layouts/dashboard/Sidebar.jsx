import { Link } from "@tanstack/react-router";
import { routes } from "../../../routes/routes";

export default function Sidebar() {
  const dashboardRoutes = routes.filter((r) => r.layout === "DashboardLayout");

  console.log(dashboardRoutes);

  return (
    <aside className="w-64 bg-orange-600 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {dashboardRoutes // Show if showInNavbar is true or undefined
          .map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className="bloc px-3 py-2 rounded hover:bg-orange-700"
                activeProps={{
                  className: "bg-orange-700 font-semibold",
                }}
              >
                {route.name}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}