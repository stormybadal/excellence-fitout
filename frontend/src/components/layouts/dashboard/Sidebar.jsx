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

// import { Link, useMatchRoute } from "@tanstack/react-router";
// import { routes } from "../../../routes/routes";
// import LogoutButton from "../../shared/LogoutButton";

// export default function Sidebar() {
//   const dashboardRoutes = routes.filter((r) => r.layout === "DashboardLayout");

//   return (
//     <aside className="min-h-screen w-64 bg-orange-600 p-4 text-white">
//       <h2 className="mb-6 text-xl font-bold">Dashboard</h2>
//       <ul className="space-y-2">
//         {dashboardRoutes.map((route) => {
//           const isActive = useMatchRoute(route.path);

//           return (
//             <li key={route.path}>
//               {/* Use the full path instead of removing "/dashboard" */}
//               <Link
//                 to={route.path}
//                 className={`block rounded px-3 py-2 hover:bg-orange-700 ${
//                   isActive ? "bg-orange-700 font-semibold" : ""
//                 }`}
//               >
//                 {route.name}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>

//       <LogoutButton />
//     </aside>
//   );
// }




import { useState } from "react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { routes } from "../../../routes/routes";
import LogoutButton from "../../shared/LogoutButton";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // mobile toggle state
  const dashboardRoutes = routes.filter((r) => r.layout === "DashboardLayout");

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-orange-600 text-white p-2 rounded shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 p-6 text-white flex flex-col justify-between transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64`}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center mb-10">
            {/* Logo - hidden only on small screens */}
            <div className="hidden md:flex w-10 h-10 bg-white rounded-full items-center justify-center text-orange-600 font-bold text-lg">
              E
            </div>
            <span className="ml-6 md:ml-3 text-2xl font-bold">Dashboard</span>
          </div>


          {/* Navigation */}
          <ul className="space-y-2">
            {dashboardRoutes.map((route) => {
              const isActive = useMatchRoute(route.path);

              return (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-orange-500 ${
                      isActive ? "bg-orange-700 font-semibold shadow-lg" : ""
                    }`}
                  >
                    {route.icon && <route.icon className="w-5 h-5" />}
                    <span>{route.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom buttons */}
        <div className="mt-6 space-y-2">
          <LogoutButton className="w-full flex justify-start px-4 py-2 rounded-lg hover:bg-orange-500 transition-all duration-200" />
        </div>
      </aside>

      {/* Overlay (Removed for mobile) */}
      {/* Only needed if you want dark background effect */}
    </>
  );
}


