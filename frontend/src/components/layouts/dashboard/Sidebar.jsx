// import { Link } from "@tanstack/react-router";
// import { routes } from "../../../routes/routes";

// export default function Sidebar() {
//   const dashboardRoutes = routes.filter((r) => r.layout === "DashboardLayout");

//   return (
//     <aside className="w-64 bg-orange-600 text-white min-h-screen p-4">
//       <h2 className="text-xl font-bold mb-6">Dashboard</h2>
//       <ul className="space-y-2">
//         {dashboardRoutes // Show if showInNavbar is true or undefined
//           .map((route) => (
//             <li key={route.path}>
//               <Link
//                 to={route.path}
//                 className="bloc px-3 py-2 rounded hover:bg-orange-700"
//                 activeProps={{
//                   className: "bg-orange-700 font-semibold",
//                 }}
//               >
//                 {route.name}
//               </Link>
//             </li>
//           ))}
//       </ul>
//     </aside>
//   );
// }

import { Link, useMatchRoute } from "@tanstack/react-router";
import { routes } from "../../../routes/routes";
import LogoutButton from "../../shared/LogoutButton";

export default function Sidebar() {
  const dashboardRoutes = routes.filter((r) => r.layout === "DashboardLayout");

  return (
    <aside className="min-h-screen w-64 bg-orange-600 p-4 text-white">
      <h2 className="mb-6 text-xl font-bold">Dashboard</h2>
      <ul className="space-y-2">
        {dashboardRoutes.map((route) => {
          const isActive = useMatchRoute(route.path);

          return (
            <li key={route.path}>
              {/* Use the full path instead of removing "/dashboard" */}
              <Link
                to={route.path}
                className={`block rounded px-3 py-2 hover:bg-orange-700 ${
                  isActive ? "bg-orange-700 font-semibold" : ""
                }`}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <LogoutButton />
    </aside>
  );
}
