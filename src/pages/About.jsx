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
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">01</span>
                  <img src={graphic} alt="Raj Francis" className="h-[60%] w-auto object-contain" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">Raj Francis</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Founder</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">02</span>
                  <img src={uiux} alt="Suraj Dhanuki" className="h-[60%] w-auto object-contain" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">Suraj Dhanuki</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Co-Founder</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">03</span>
                  <img src={td} alt="Anjana Ashok" className="h-[60%] w-auto object-contain" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">Anjana Ashok</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Business Development</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">04</span>
                  <img src={graphic} alt="Prabhakaran" className="h-[60%] w-auto object-contain" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">Prabhakaran</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">05</span>
                  <img src={uiux} alt="Jiolas Paul" className="h-[60%] w-auto object-contain" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">Jiolas Paul</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Graphic Designer</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">06</span>
                  <img src={td} alt="Chiranjeevi" className="h-[60%] w-auto object-contain" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">Chiranjeevi</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">3D Designer</p>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="flex justify-between text-[10px] text-gray-500 dark:text-gray-400 max-w-xs -ml-2">
              <span>2021</span>
              <span>Dot the i's and Cross the t's</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 ml-[55%] pl-6 sm:ml-0 sm:absolute sm:top-0 sm:right-0 w-full sm:w-[45%]">
            {/* Agency Description */}
            <div>
              <p className="text-base max-w-sm font-raleway">
                We're a creative agency focused on design, development, and content creation to elevate your brand.
              </p>
            </div>

            {/* Clients Section */}
            <div>
              <h2 className="text-sm font-bold mb-4 font-poppins">Clients</h2>
              <div className="flex space-x-4">
                <span className="text-red-500">EXPERIENCES</span>
                <span className="text-green-500">Tuborg</span>
                <span className="text-orange-500">DNA Networks</span>
              </div>
            </div>

            {/* Big Tagline */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Trait Distinguished
              </h1>
            </div>

            {/* Who We Are Section */}
            <div className="pt-9 space-y-8">
              <p className="text-base max-w-sm font-raleway">
                We're a Bangalore-based creative agency crafting digital solutions. Blending strategy, and design, we help businesses grow through results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}