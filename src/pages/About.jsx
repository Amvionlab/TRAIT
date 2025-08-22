import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import graphic from 'C:/xampp/htdocs/TRAIT/src/components/graphic.svg';
import uiux from 'C:/xampp/htdocs/TRAIT/src/components/uiux.svg';
import td from 'C:/xampp/htdocs/TRAIT/src/components/3d.svg';
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#1F1F1F';
      document.documentElement.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#ffffff';
      document.documentElement.style.color = '#000000';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="text-black dark:text-white flex flex-col items-start justify-start px-3">
      <div className="container -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-[55%_45%] relative">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Team Section */}
            <div className="-ml-2 mt-1">
              <h2 className="text-sm font-bold mb-4 font-poppins">The minds behind it all</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-6 text-right">01</span>
                  <img src={graphic} alt="Raj Francis" className="h-24 w-24 object-cover rounded" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Raj Francis</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Founder</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-6 text-right">02</span>
                  <img src={uiux} alt="Suraj Dhanuki" className="h-24 w-24 object-cover rounded" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Suraj Dhanuki</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Co-Founder</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-6 text-right">03</span>
                  <img src={td} alt="Anjana Ashok" className="h-24 w-24 object-cover rounded" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Anjana Ashok</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Business Development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-6 text-right">04</span>
                  <img src={graphic} alt="Prabhakaran" className="h-24 w-24 object-cover rounded" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Prabhakaran</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-6 text-right">05</span>
                  <img src={uiux} alt="Jiolas Paul" className="h-24 w-24 object-cover rounded" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Jiolas Paul</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Graphic Designer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-6 text-right">06</span>
                  <img src={td} alt="Chiranjeevi" className="h-24 w-24 object-cover rounded" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Chiranjeevi</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">3D Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 ml-[55%] pl-6 sm:ml-0 sm:absolute sm:top-0 sm:right-0 w-full sm:w-[45%]">
            {/* Agency Description */}
            <div>
              <p className="text-base max-w-sm font-raleway leading-relaxed">
                We're a creative agency focused on design, development, and content creation to elevate your brand.
              </p>
            </div>

            {/* Clients Section with Scrolling Animation */}
            <div className="overflow-hidden">
              <style>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
              `}</style>
              <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap text-sm font-bold">
                <span className="mx-4 text-red-500">EXPERIENCES</span>
                <span className="mx-4 text-green-500">TUBORG</span>
                <span className="mx-4 text-orange-500">DNA NETWORKS</span>
                <span className="mx-4 text-red-500">EXPERIENCES</span>
                <span className="mx-4 text-green-500">TUBORG</span>
                <span className="mx-4 text-orange-500">DNA NETWORKS</span>
              </div>
            </div>

            {/* Footer Section */}
            <div className="flex justify-between text-[10px] text-gray-500 dark:text-gray-400">
              <span>2021</span>
              <span>Dot the i's and Cross the t's</span>
            </div>

            {/* Big Tagline */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Trait Distinguished
              </h1>
            </div>

            {/* Who We Are Section */}
            <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
              <h2 className="text-sm font-bold font-poppins">who we are</h2>
              <p className="text-base max-w-sm font-raleway leading-relaxed">
                We're a Bangalore-based creative agency crafting digital solutions. Blending strategy, and design, we help businesses grow through results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}