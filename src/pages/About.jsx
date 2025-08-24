import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from "lucide-react";

// Team member images
import p1 from '../components/3D Design.png'; // Replace with actual paths
import p2 from '../components/3D Design.png';
import p3 from '../components/3D Design.png';
import p4 from '../components/3D Design.png';
import p5 from '../components/3D Design.png';
import p6 from '../components/3D Design.png';

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

  // Team members data
  const teamMembers = [
    { id: 1, name: 'Raj Francis', role: 'Founder', image: p1 },
    { id: 2, name: 'Suraj Dhanuki', role: 'Co-Founder', image: p2 },
    { id: 3, name: 'Anjana Ashok', role: 'Business Development', image: p3 },
    { id: 4, name: 'Prabhakaran', role: 'UI/UX Designer', image: p4 },
    { id: 5, name: 'Jiolas Paul', role: 'Graphic Designer', image: p5 },
    { id: 6, name: 'Chiranjeevi', role: '3D Designer', image: p6 },
  ];

  return (
    <div className="text-black dark:text-white px-5 py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-x-16">
        
        <div className="relative md:col-span-7">
          <h2 className="text-sm font-bold mb-[10%] font-poppins">The minds behind it all</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-y-16 pt-[1%]">
  {teamMembers.map((member) => (
    <div
      key={member.id}
      className="grid grid-cols-[10px_90%] items-start gap-2 "
    >
      {/* Number */}
      <div className="text-xs text-gray-500 dark:text-gray-400 self-start">
        {String(member.id).padStart(2, '0')}
      </div>

      {/* Image + Name/Role overlay */}
      <div className="relative w-full">
        <img
          src={member.image}
          alt={member.name}
          className="w-[30%] object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-white/70 px-2 py-1 w-[70%]">
          <p className="font-medium text-sm">{member.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>

        {/* Right Column (Company Info & Marquee) */}
        <div className="flex md:col-span-5 flex-col space-y-[10%] ">
          
          {/* Top Section */}
          <div>
            <p className="text-base leading-relaxed">
              We're a creative agency focused on design, development, and content creation to elevate your brand.
            </p>
          </div>

          <div className="overflow-hidden pt-[6%]">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
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
          

          {/* Big Tagline and Footer Text */}
          <div className="flex flex-col space-y-4 pt-[15%]">
            <div className="flex justify-between text-[10px] text-gray-500 dark:text-gray-400">
              <span>2021</span>
              <span>Dot the i's and Cross the t's</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Trait Distinguished
            </h1>
          </div>

          {/* "Who We Are" Section */}
          <div className="grid grid-cols-[auto_1fr] gap-4 items-start pt-[6%]">
            <h2 className="text-sm font-bold font-poppins">who we are</h2>
            <p className="text-base max-w-sm font-raleway leading-relaxed">
              We're a Bangalore-based creative agency crafting digital solutions. Blending strategy, and design, we help businesses grow through results.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}