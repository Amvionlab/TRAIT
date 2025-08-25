import React from 'react';
import { ArrowUpRight } from "lucide-react";

const ProjectDetail = ({ project, onClose, otherProjects, projectIndex }) => {
  if (!project) {
    return null;
  }

  const images = project.detailImages;
  const scrollbarHideStyle = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  };

  const renderImages = () => {
    const renderedElements = [];
    let imageIndex = 0;

    while (imageIndex < images.length) {
      // Row 1: Two images
      if (imageIndex + 1 < images.length) {
        renderedElements.push(
          <div key={`pair-${imageIndex}`} className="grid grid-cols-2">
            <img src={images[imageIndex]} alt={`${project.title} image ${imageIndex + 1}`} className="w-full h-[50vh] object-cover" />
            <img src={images[imageIndex + 1]} alt={`${project.title} image ${imageIndex + 2}`} className="w-full h-[50vh] object-cover" />
          </div>
        );
        imageIndex += 2;
      }

      // Row 2: Single image (if available)
      if (imageIndex < images.length) {
        renderedElements.push(
          <div key={`single-${imageIndex}`} className="w-full">
            <img src={images[imageIndex]} alt={`${project.title} image ${imageIndex + 1}`} className="w-full h-[70vh] object-cover" />
          </div>
        );
        imageIndex += 1;
      }
    }

    return renderedElements;
  };

  return (
    <div className="dark:text-white text-black min-h-screen px-2 py-1 font-poppins absolute inset-0">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column (Project Images) */}
        <div className="md:col-span-7 pr-4 pl-2 mt-2 md:h-[80vh] overflow-y-auto" style={scrollbarHideStyle}>
          {renderImages()}
        </div>

        {/* Right Column (Project Text and Other Works) */}
        <div className="md:col-span-5 flex flex-col -mt-2 items-start md:sticky md:self-start">
          
          {/* Top Row: Title and Close Button */}
          <span className="text-[0.65rem] text-gray-600 dark:text-gray-400">{String(projectIndex + 1).padStart(2, '0')}</span>
          <div className="w-full flex justify-between items-start mb-2">
            <div className="flex flex-col w-2/3">
              
              <h1 className="text-xl font-bold ">
                {project.title}
              </h1>
            </div>
            <button 
              onClick={onClose} 
              className="p-3.5 border border-black dark:border-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close project detail"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* Description */}
          <p className=" text-xs leading-relaxed h-[18vh] font-light mb-14 text-gray-600 dark:text-gray-400 text-justify">
            {project.description}
          </p>

          {/* Other 3D Design Works Section */}
          <div className="w-full">
            <h2 className="text-sm font-normal mb-12 dark:text-white">
              Other {project.category} Works
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {otherProjects.map((other, index) => (
                <div key={index} className="w-[90%] h-auto ">
                  <span className='text-[0.65rem] text-gray-600 dark:text-gray-400'>0{index+1}</span>
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;