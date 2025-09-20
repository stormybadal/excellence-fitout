import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../ui/Loading";
import Sidebar from "./dashboard/Sidebar";
import Header from "./dashboard/Header";

const DashboardLayout = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div className="flex min-h-screen bg-gray-50 text-black">
        <Sidebar />

        {/* Main section */}
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 pt-16 md:ml-64">
            <Outlet />
          </main>
        </div>
      </div>
    </Suspense>
  );
};

export default DashboardLayout;
