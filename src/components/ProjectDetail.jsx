// src/components/ProjectDetail.jsx
import { X } from "lucide-react";
import one3d from '../components/work/Cover Images/3D Designs/1.png';
import two3d from '../components/work/Cover Images/3D Designs/2.png';
import three3d from '../components/work/Cover Images/3D Designs/3.png';

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  const otherWorks = {
    '3D Design': [one3d, two3d, three3d],
    'UI/UX Design': [one3d, two3d, three3d],
    'Graphic Design': [one3d, two3d, three3d],
  };

  const scrollbarHideStyle = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  };

  return (
    <div className="bg-white text-black font-poppins ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[80vh]">

        {/* Left Column (Images) - Scrollable content */}
        <div 
          className="md:col-span-7 md:h-[80vh] flex flex-col pl-2 pr-8 overflow-y-auto"
          style={scrollbarHideStyle}
        >
          {/* Main image */}
          <div className="w-full h-auto mb-4">
            <img src={project.image} alt={project.title} className="w-full object-cover" />
          </div>

          {/* Grid of other project images */}
          <div className="grid grid-cols-2 gap-4">
            {/* You would need to load 8 other images here */}
            <div className="h-64 bg-gray-200"></div>
            <div className="h-64 bg-gray-200"></div>
            <div className="h-64 bg-gray-200"></div>
            <div className="h-64 bg-gray-200"></div>
            <div className="h-64 bg-gray-200"></div>
            <div className="h-64 bg-gray-200"></div>
            <div className="h-64 bg-gray-200"></div>
            <div className="h-64 bg-gray-200"></div>
          </div>
        </div>
        
        {/* Right Column (Content) - Sticky and within 80vh */}
        <div className="md:col-span-5 flex flex-col space-y-8 md:h-[80vh] md:sticky md:top-0">
          
          {/* Title and Close Button */}
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <button onClick={onClose} className="p-2 -mt-2 -mr-2">
              <X size={24} />
            </button>
          </div>
          
          <p className="text-gray-600">
            Designing an immersive 3D experience for the Accel Seed to Scale Awards & Summit 2025, our project delivered a complete event environment.
            This included a striking welcome arch, interactive photo opportunities, and a dynamic main stage. The cohesive design enhanced the event’s core message of growth and impact, providing a memorable experience for attendees.
          </p>

          <div className="flex-grow flex flex-col justify-end">
            <h3 className="text-base font-bold mb-4">Other {project.category} Works</h3>
            <div className="grid grid-cols-3 gap-2">
              {otherWorks[project.category].map((img, index) => (
                <img key={index} src={img} alt="Other work" className="w-full h-auto object-cover" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}