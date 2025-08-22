import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import graphic from '../components/graphic.svg';
import uiux from '../components/uiux.svg';
import td from '../components/3d.svg';
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const members = [
    { id: "01", name: "Raj Francis", role: "Founder", img: graphic },
    { id: "02", name: "Suraj Dhanuki", role: "Co-Founder", img: uiux },
    { id: "03", name: "Anjana Ashok", role: "Business Development", img: td },
    { id: "04", name: "Prabhakaran", role: "UI/UX Designer", img: graphic },
    { id: "05", name: "Jiolas Paul", role: "Graphic Designer", img: uiux },
    { id: "06", name: "Chiranjeevi", role: "3D Designer", img: td },
  ];
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
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
      {members.map((m) => (
        <div
          key={m.id}
          className="grid grid-cols-[40px_120px_1fr] items-center gap-4"
        >
          {/* Number */}
          <span className="text-xs text-gray-500 dark:text-gray-400">{m.id}</span>

          {/* Image */}
          <img
            src={m.img}
            alt={m.name}
            className="h-20 w-20 object-cover rounded-md"
          />

          {/* Text */}
          <div>
            <p className="font-semibold">{m.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{m.role}</p>
          </div>
        </div>
      ))}
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