import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Background() {
  return (
    <div className=" min-h-screen bg-white dark:bg-black font-sans text-gray-800 overflow-hidden">
      {/* Page content */}
      <div className="flex flex-col min-h-screen">
        <header className="h-[10vh]">
          <Header />
        </header>
        <main className="h-[90vh] container mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}