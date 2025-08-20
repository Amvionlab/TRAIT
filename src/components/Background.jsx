import { Outlet } from "react-router-dom";
import Header from "./Header";
import bgLight from "./background-light.webp"; // Path to your SVG
import bgDark from "./background-dark.webp";
export default function Background() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black font-sans text-gray-800 overflow-hidden">
      {/* SVG background with 2% margin from body edges */}
      
      <div className="absolute inset-[0%] z-0">
        <img
          src={bgLight}
          alt="Background lines"
          className="w-full h-full py-6 px-4 object-fit dark:hidden"
        />
        <img
          src={bgDark}
          alt="Background lines dark"
          className="w-full h-full py-6 px-4 object-fit hidden dark:block"
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