import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function Background() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black font-sans text-gray-800 overflow-hidden">
      {/* SVG background with 2% margin from body edges */}
      

      {/* Page content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}