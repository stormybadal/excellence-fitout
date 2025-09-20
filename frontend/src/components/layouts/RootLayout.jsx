// import { Outlet } from "@tanstack/react-router";
// import { Suspense } from "react";
// import Loading from "../ui/Loading";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const RootLayout = () => {
//   return (
//     <Suspense
//       fallback={
//         <div>
//           <Loading />
//         </div>
//       }
//     >
//       <div className="flex min-h-screen flex-col bg-white text-black">
//         {/* Navbar should be outside <main> */}
//         <Navbar />

//         <main className="flex-1 pt-[72px] md:pt-[80px]">
//           <Outlet />
//         </main>

//         <Footer />
//       </div>
//     </Suspense>
//   );
// };

// export default RootLayout;






import { Outlet, useLocation } from "@tanstack/react-router";
import { Suspense } from "react";
import Loading from "../ui/Loading";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  const location = useLocation();

  // ✅ Check if current path starts with "/dashboard"
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div className="flex min-h-screen flex-col bg-white text-black">
        {/* ✅ Hide Navbar/Footer only on dashboard */}
        {!isDashboardRoute && <Navbar />}

        <main className={`flex-1 ${!isDashboardRoute ? "pt-[72px] md:pt-[80px]" : ""}`}>
          <Outlet />
        </main>

        {!isDashboardRoute && <Footer />}
      </div>
    </Suspense>
  );
};

export default RootLayout;
