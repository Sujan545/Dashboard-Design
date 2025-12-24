import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - fixed, no scroll */}
      <Sidebar />

      {/* Right side */}
      <main className="flex-1 flex flex-col">
        {/* Scrollable content only */}
        <div className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
