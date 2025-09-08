import { Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import Loading from "../ui/Loading";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div className="flex min-h-screen flex-col bg-white text-black">
        <main className="flex-1">
         <Navbar/>
          <Outlet />
          <Footer/>
        </main>
      </div>
    </Suspense>
  );
};

export default RootLayout;
