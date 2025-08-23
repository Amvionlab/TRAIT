import { useState, useEffect } from 'react';
import td from '../components/3D Design.png'
import graphic from '../components/Graphic Design.png'
import uiux from '../components/UI UX Design.png'
import { ArrowUpRight } from "lucide-react";

export default function Home() {
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
    <div className="text-black dark:text-white flex flex-col font-uxum items-start justify-start pt-2 px-6">
      <div className="container -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-[55%_45%] relative">
          {/* Left Column */}
          <div className="space-y-12">

            {/* All Services Section */}
            <div className=" mt-6">
              <h2 className="text-sm font-bold mb-4 font-uxum">All Services</h2>
              <p className="text-xs mb-4 text-gray-500 dark:text-gray-400">(06)</p>
              <ul className="text-left max-w-md space-y-1 font-medium">
                <li className="text-xs">3D Design</li>
                <li className="text-xs">UI/UX Design</li>
                <li className="text-xs">Graphic Design</li>
                <li className="text-xs">Front-end Development</li>
                <li className="text-xs">Back-end Development</li>
                <li className="text-xs">Content Creation</li>
              </ul>
            </div>

            {/* Join Us Section */}
            <div className="pt-6">
              <div className="grid grid-cols-3 items-start">
                <div>
                  <p className="text-sm font-raleway max-w-xs leading-relaxed">
                    Join us at the <br />
                    intersection of form <br />
                    and function.
                  </p>
                </div>

                <div className="-ml-12 grid grid-cols-3 gap-y-7 gap-x-2 text-xs font-medium">
  {/* Row 1 */}
  <a
    href="#"
    className="group flex items-center space-x-3 relative pb-1"
  >
    <span>Instagram</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0 -left-3 w-[90%] h-px bg-gray-300 overflow-hidden">
      <span className="sweep-line absolute bottom-0 left-0 h-full bg-black"></span>
    </span>
  </a>

  <a
    href="#"
    className="group flex items-center space-x-3 relative pb-1"
  >
    <span>LinkedIn</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0 -left-3 w-[90%] h-px bg-gray-300 overflow-hidden">
      <span className="sweep-line absolute bottom-0 left-0 h-full bg-black"></span>
    </span>
  </a>

  {/* Empty third cell */}
  <div></div>

  {/* Row 2 */}
  <a
    href="#"
    className="group flex items-center space-x-3 relative pb-1"
  >
    <span>YouTube</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0 -left-3 w-[90%] h-px bg-gray-300 overflow-hidden">
      <span className="sweep-line absolute bottom-0 left-0 h-full bg-black"></span>
    </span>
  </a>

  <a
    href="#"
    className="group flex items-center space-x-3 relative pb-1"
  >
    <span>Behance</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0 -left-3 w-[90%] h-px bg-gray-300 overflow-hidden">
      <span className="sweep-line absolute bottom-0 left-0 h-full bg-black"></span>
    </span>
  </a>

  <style jsx>{`
    @keyframes sweep {
      0% {
        transform: translateX(0%);
        opacity: 1;
      }
      90% {
        transform: translateX(900%); /* moves across */
        opacity: 1;
      }
      100% {
        transform: translateX(900%);
        opacity: 0; /* disappears at end */
      }
    }

   .group:hover .sweep-line {
      display: block;
      width: 10%;
      animation: sweep 0.8s ease-out forwards;
    }
  `}</style>
</div>


              </div>
            </div>

            {/* Footer Section */}
            <div className="flex justify-between text-xs pt-12 text-gray-500 dark:text-gray-400 max-w-xs">
              <span>2021</span>
              <span>Dot the i's and Cross the t's</span>
            </div>

            {/* Big Tagline */}
            <div className="">
              <h1 className="text-4xl sm:text-[2.5rem] -mt-8 font-bold tracking-tight">
                Trait Distinguished
              </h1>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 mt-6 pl-6 sm:ml-0 sm:absolute sm:top-0 sm:right-0 w-full sm:w-[42%]">

            {/* Featured Services Section */}
            <div>
              <h2 className="text-sm font-bold mb-4 font-poppins">Featured Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 max-w-4xl text-xs">
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">01</span>
                  <img src={td} alt="3D Design" className="h-[50%] w-auto object-contain transition-all duration-[1s] ease-in-out filter grayscale hover:filter-none" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">3D Design</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">02</span>
                  <img src={uiux} alt="UI/UX Design" className="h-[50%] w-auto object-contain transition-all duration-[1s] ease-in-out filter grayscale hover:filter-none" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">UI/UX Design</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-4 text-gray-500 dark:text-gray-400">03</span>
                  <img src={graphic} alt="Graphic Design" className="h-[50%] w-auto object-contain transition-all duration-[1s] ease-in-out filter grayscale hover:filter-none" />
                  <p className="mt-2 text-left text-gray-500 dark:text-gray-400">Graphic Design</p>
                </div>
              </div>
            </div>

            {/* Agency Description Section */}
            <div className="space-y-6">
              <p className="text-base max-w-sm font-raleway">
                We're a design agency built on  <br />
                timeless creative ratios. Always open  <br />
                to new forms, new ideas, and <br />
                the unexpected.
              </p>

              {/* Footer Numbers + Just Kidding */}
              <div className="max-w-full text-xs text-gray-500 dark:text-gray-400">
              <div className="grid grid-cols-4 mb-6 pt-11 text-xl font-bold">
  {/* 28 → MA */}
  <div className="relative overflow-hidden text-xs font-normal group h-4 text-left">
    {/* Number */}
    <span className="block transition-transform duration-500 group-hover:-translate-y-full">
      28
    </span>
    {/* Replacement letters */}
    <div className="absolute inset-0 flex items-center">
      <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">
        M
      </span>
      <span className="transition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">
        A
      </span>
    </div>
  </div>

  {/* 31 → NA */}
  <div className="relative overflow-hidden text-xs font-normal group h-4  text-left">
    <span className="block transition-transform duration-500 group-hover:-translate-y-full">
      31
    </span>
    <div className="absolute inset-0 flex items-center">
      <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">
        N
      </span>
      <span className="transition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">
        A
      </span>
    </div>
  </div>

  {/* Empty cell */}
  <div></div>

  {/* 15 → SU */}
  <div className="relative overflow-hidden text-xs font-normal group h-4  text-left">
    <span className="block transition-transform duration-500 group-hover:-translate-y-full">
      15
    </span>
    <div className="absolute inset-0 flex items-center">
      <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">
        S
      </span>
      <span className="mltransition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">
        U
      </span>
    </div>
  </div>
</div>
                {/* Clickable Text Row */}
                <div className="text-sm mt-1">
                  <button
                    onClick={() => setTheme('light')}
                    className="font-bold text-black dark:text-white"
                  >
                    Just Kidding
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className="text-gray-700 dark:text-white  ml-1"
                  >
                    / Seriously, though
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}