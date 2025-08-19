import { Outlet } from "react-router-dom";
import Header from "./Header";
import bgLines from "./background.webp"; // Path to your SVG

export default function Background() {
  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-800 overflow-hidden">
      {/* SVG background with 2% margin from body edges */}
      <div className="absolute inset-[0%]  z-0">
        <img
          src={bgLines}
          alt="Background lines"
          className="w-full h-full py-6 px-4 object-fit"
        />
      </div>

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