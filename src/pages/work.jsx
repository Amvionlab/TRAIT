// src/pages/Portfolio.jsx
import { useState } from 'react'; 
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowUpLeft } from "lucide-react"; 
import ProjectDetail from '../components/ProjectDetail'; // Import the new component

// Import local images for each category
// ... (Your image imports remain the same)
import one3d from '../components/work/Cover Images/3D Designs/1.png';
import two3d from '../components/work/Cover Images/3D Designs/2.png';
import three3d from '../components/work/Cover Images/3D Designs/3.png';
import four3d from '../components/work/Cover Images/3D Designs/4.png';
import five3d from '../components/work/Cover Images/3D Designs/5.png';
import six3d from '../components/work/Cover Images/3D Designs/6.png';
import seven3d from '../components/work/Cover Images/3D Designs/7.png';
import eight3d from '../components/work/Cover Images/3D Designs/8.png';
import nine3d from '../components/work/Cover Images/3D Designs/9.png';
import ten3d from '../components/work/Cover Images/3D Designs/10.png';
import eleven3d from '../components/work/Cover Images/3D Designs/11.png';
import twelve3d from '../components/work/Cover Images/3D Designs/12.png';

// UI/UX Design Images (8 total)
import oneuiux from '../components/work/Cover Images/UIUX Designs/1.png';
import twouiux from '../components/work/Cover Images/UIUX Designs/2.png';
import threeuiux from '../components/work/Cover Images/UIUX Designs/3.png';
import fouruiux from '../components/work/Cover Images/UIUX Designs/4.png';
import fiveuiux from '../components/work/Cover Images/UIUX Designs/5.png';
import sixuiux from '../components/work/Cover Images/UIUX Designs/6.png';
import sevenuiux from '../components/work/Cover Images/UIUX Designs/7.png';
import eightuiux from '../components/work/Cover Images/UIUX Designs/8.png';

// Graphic Design Images (4 total)
import onegd from '../components/work/Cover Images/Graphic Designs/1.png';
import twogd from '../components/work/Cover Images/Graphic Designs/2.png';
import threegd from '../components/work/Cover Images/Graphic Designs/3.png';
import fourgd from '../components/work/Cover Images/Graphic Designs/4.png';

const projectsData = [
  // UI/UX Design Projects (8 total)
  { id: 1, category: 'UI/UX Design', title: 'Zyre - Ecommerce Responsive Website Design', image: oneuiux },
  { id: 2, category: 'UI/UX Design', title: 'Expert Auto Checks - Web Dashboard Design', image: twouiux },
  { id: 3, category: 'UI/UX Design', title: 'Sura NFT - Responsive Website Design', image: threeuiux },
  { id: 4, category: 'UI/UX Design', title: 'EAC - Mobile Application Design', image: fouruiux },
  { id: 5, category: 'UI/UX Design', title: 'Another UI/UX Project', image: fiveuiux },
  { id: 6, category: 'UI/UX Design', title: 'Another UI/UX Project 2', image: sixuiux },
  { id: 7, category: 'UI/UX Design', title: 'Another UI/UX Project 3', image: sevenuiux },
  { id: 8, category: 'UI/UX Design', title: 'Another UI/UX Project 4', image: eightuiux },

  // 3D Design Projects (12 total)
  { id: 9, category: '3D Design', title: '3D Project One', image: one3d },
  { id: 10, category: '3D Design', title: '3D Project Two', image: two3d },
  { id: 11, category: '3D Design', title: '3D Project Three', image: three3d },
  { id: 12, category: '3D Design', title: '3D Project Four', image: four3d },
  { id: 13, category: '3D Design', title: '3D Project Five', image: five3d },
  { id: 14, category: '3D Design', title: '3D Project Six', image: six3d },
  { id: 15, category: '3D Design', title: '3D Project Seven', image: seven3d },
  { id: 16, category: '3D Design', title: '3D Project Eight', image: eight3d },
  { id: 17, category: '3D Design', title: '3D Project Nine', image: nine3d },
  { id: 18, category: '3D Design', title: '3D Project Ten', image: ten3d },
  { id: 19, category: '3D Design', title: '3D Project Eleven', image: eleven3d },
  { id: 20, category: '3D Design', title: '3D Project Twelve', image: twelve3d },

  // Graphic Design Projects (4 total)
  { id: 21, category: 'Graphic Design', title: 'Graphic Project One', image: onegd },
  { id: 22, category: 'Graphic Design', title: 'Graphic Project Two', image: twogd },
  { id: 23, category: 'Graphic Design', title: 'Graphic Project Three', image: threegd },
  { id: 24, category: 'Graphic Design', title: 'Graphic Project Four', image: fourgd },
];

const categories = [
  { name: '3D Design', count: 12 },
  { name: 'UI/UX Design', count: 8 },
  { name: 'Graphic Design', count: 4 },
];

const ITEMS_PER_PAGE = 4;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('UI/UX Design');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeCategory
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setCurrentPage(1); 
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-white text-black min-h-screen p-4 font-poppins">
      {/* Conditionally render the ProjectDetail component or the main portfolio */}
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
      ) : (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column (Projects) */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 pr-4 pl-2 md:h-[80vh]">
            {displayedProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="grid grid-cols-[1%_95%] items-start gap-x-4 cursor-pointer"
                onClick={() => handleProjectClick(project)} 
              >
                {/* Number */}
                <div className="text-xs self-start">
                  {String((currentPage - 1) * ITEMS_PER_PAGE + index + 1).padStart(2, '0')}
                </div>
                {/* Image + Title Overlay */}
                <div className="relative overflow-hidden w-full group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[55%] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                  />
                  {/* Text Block */}
                  <div className="absolute w-[45%] bottom-0 right-0 text-xs px-2 py-1">
                    <p>{project.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Column (Categories and Text) */}
          <div className="md:col-span-5 flex flex-col items-start md:sticky pt-1 md:self-start">
            <div className="w-full flex justify-between items-start">
              {/* Categories (First Column) */}
              <div className="flex flex-col space-y-2 w-1/2 pr-4 ">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryClick(category.name)}
                    className={`w-[80%] flex justify-between items-center text-sm transition-colors duration-300 ${
                      activeCategory === category.name
                        ? 'bg-black text-white'
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    <span className='flex border py-2 px-4 border-black'>
                      {activeCategory === category.name && (
                        <ArrowUpLeft size={20} className="transform -rotate-45" />
                      )}
                      <span>{category.name} ({category.count})</span>
                    </span>
                  </button>
                ))}
              </div>
              {/* Page Navigation (Second Column) */}
              <div className="flex justify-end items-center gap-2 w-1/2 pt-[10%]">
                <div className="text-gray-500">Page</div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1}
                    className={`p-2 ${currentPage === 1 ? 'border-gray-200 text-gray-200' : ' text-black'}`}
                  >
                    <ArrowUpLeft size={20} className="transform -rotate-45" />
                  </button>
                  <span className="font-bold text-lg">{currentPage}</span>
                  <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages}
                    className={`p-2 ${currentPage === totalPages ? 'border-gray-200 text-gray-200' : ' text-black'}`}
                  >
                    <ArrowUpRight size={20} className="transform rotate-45" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full pt-[25%]">
              <p className="leading-relaxed text-base font-light">
                We've grouped our work by category so you can find exactly what you're into.
              </p>
            </div>
            <div className="w-full ">
              <div className="grid grid-cols-3 pt-14 text-xl font-bold">
                <div className="relative overflow-hidden text-xs font-normal group h-4 text-left">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">28</span>
                  <div className="absolute inset-0 flex items-center">
                    <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">M</span>
                    <span className="transition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">A</span>
                  </div>
                </div>
                <div className="relative overflow-hidden text-xs font-normal group h-4 text-left">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">31</span>
                  <div className="absolute inset-0 flex items-center">
                    <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">N</span>
                    <span className="transition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">A</span>
                  </div>
                </div>
                <div className="relative overflow-hidden text-xs font-normal group h-4 text-left justify-self-end">
                  <span className="block transition-transform duration-500 pr-2 group-hover:-translate-y-full">15</span>
                  <div className="absolute inset-0 flex items-center">
                    <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">S</span>
                    <span className="transition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">U</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end w-full pt-14">
              <p className="text-sm font-light leading-relaxed">
                Wanna explore more?<br />
                Here's our portfolio link, check out!
              </p>
              <button className="px-2 py-1.5 border border-black font-medium text-base hover:bg-gray-100 transition-colors">
                More works
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}