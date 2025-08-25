import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowUpLeft } from "lucide-react";
import ProjectDetail from '../components/ProjectDetail';

// Static imports for cover images
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

import oneuiux from '../components/work/Cover Images/UIUX Designs/1.png';
import twouiux from '../components/work/Cover Images/UIUX Designs/2.png';
import threeuiux from '../components/work/Cover Images/UIUX Designs/3.png';
import fouruiux from '../components/work/Cover Images/UIUX Designs/4.png';
import fiveuiux from '../components/work/Cover Images/UIUX Designs/5.png';
import sixuiux from '../components/work/Cover Images/UIUX Designs/6.png';
import sevenuiux from '../components/work/Cover Images/UIUX Designs/7.png';
import eightuiux from '../components/work/Cover Images/UIUX Designs/8.png';

import onegd from '../components/work/Cover Images/Graphic Designs/1.png';
import twogd from '../components/work/Cover Images/Graphic Designs/2.png';
import threegd from '../components/work/Cover Images/Graphic Designs/3.png';
import fourgd from '../components/work/Cover Images/Graphic Designs/4.png';
import fivegd from '../components/work/Cover Images/Graphic Designs/5.png';
import sixgd from '../components/work/Cover Images/Graphic Designs/6.png';
import sevengd from '../components/work/Cover Images/Graphic Designs/7.png';
import eightgd from '../components/work/Cover Images/Graphic Designs/8.png';

// Vite-specific dynamic imports using import.meta.glob
const all3DImages = import.meta.glob('../components/work/3D Designs/**/**.{png,jpg,jpeg,svg}');
const allUIUXImages = import.meta.glob('../components/work/UIUX Designs/**/**.{png,jpg,jpeg,svg}');
const allGDImages = import.meta.glob('../components/work/Graphic Designs/**/**.{png,jpg,jpeg,svg}');

// Function to get images for a specific folder
const getDetailImages = async (category, folderName) => {
  let imageContext;
  if (category === '3D Design') {
    imageContext = all3DImages;
  } else if (category === 'UI/UX Design') {
    imageContext = allUIUXImages;
  } else {
    imageContext = allGDImages;
  }

  const paths = Object.keys(imageContext)
    .filter(path => path.includes(`/${folderName}/`))
    .sort();

  const images = await Promise.all(paths.map(path => imageContext[path]()));
  return images.map(module => module.default);
};

const projectsData = [
  // UI/UX Design Projects (8 total)
  { 
    id: 1, 
    category: 'UI/UX Design', 
    title: 'Zyre - Ecommerce Responsive Website Design', 
    image: oneuiux,
    folderName: 'Zyre',
    description: "Zyre is a premium fashion e-commerce app designed for Gen Z users who value bold style and limited drops. The concept blends high-energy streetwear culture with a sleek, modern shopping experience. The design focuses on clean layouts, strong visual hierarchy, and mobile first usability. Creating a platform that feels exclusive, expressive, and easy to navigate."
  },
  { id: 2, category: 'UI/UX Design', title: 'Expert Auto Checks - Web Dashboard Design', image: twouiux, folderName: 'Expert Auto Checks Dashboard', description: "A web-based admin dashboard designed to manage and monitor the operations of Expert Auto Checks. It displays key metrics like total revenue, order counts, and mechanic performance. Admins can view and manage bookings, assign jobs, and track service status in real-time. The interface follows a simple, no-frills layout prioritizing usability over aesthetics. Every element is placed with function in mind, making it easy for staff to navigate and operate even with minimal training." },
  { id: 3, category: 'UI/UX Design', title: 'Sura NFT - Responsive Website design', image: threeuiux, folderName: 'Sura NFT', description: "Sura NFT is a platform built for discovering and collecting anime-inspired digital art. We started with user research and market analysis to guide both structure and strategy. The design blends a vibrant visual language with a clean, scalable UI system. From wireframes to final interface, every step focused on clarity, flow, and user engagement." },
  { id: 4, category: 'UI/UX Design', title: 'EAC - Mobile Application Design', image: fouruiux, folderName: 'EAC Mobile app design', description: "A mobile application developed for customers to conveniently book car services from their location. The app offers a simple and intuitive interface for selecting services, scheduling appointments, tracking technicians, and making secure payments. It’s designed to make car care easy, accessible, and hassle-free." },
  { id: 5, category: 'UI/UX Design', title: 'LeoPrime - Responsive Website Design', image: fiveuiux, folderName: 'LeoPrime', description: "Leo Prime is a global trading platform built to empower both beginner and pro traders with fast, secure, and intuitive access to the financial markets. The concept combines trust, clarity, and performance through a clean, modern interface. The design emphasizes ease of use, real-time insights, and a professional visual identity building confidence at every interaction." },
  { id: 6, category: 'UI/UX Design', title: 'Star Hospital - Seamless Web Experience', image: sixuiux, folderName: 'Star Hospital', description: "Star Hospital is a modern multi-specialty healthcare provider offering expert care across all major departments. The website design is clean, user-friendly, and focused on quick access to information and easy appointment booking, reflecting the hospital’s commitment to accessible and efficient care." },
  { id: 7, category: 'UI/UX Design', title: 'Graafeio - Event Management Website Design', image: sevenuiux, folderName: 'Graafeio', description: "The Graafeio website design reflects the brand’s vibrant and joyful approach to event and team-building experiences. Built around a colorful, energetic theme, the site combines bold visuals, curved layouts, and dynamic sections to capture the excitement of corporate engagement. Each section from activities and client stats to the gallery and testimonials is crafted to showcase fun, collaboration, and impact." },
  { id: 8, category: 'UI/UX Design', title: 'Nova Springs - School Website for Rural Audience', image: eightuiux, folderName: 'Nova Springs', description: "A simple and informative website created to serve the needs of a rural community. The design emphasizes easy navigation, clear language, and essential information such as admissions, announcements, and contact details. With a clean layout and minimal distractions, the website ensures that parents, students, and local visitors can quickly find what they need even with limited internet access or technical experience." },

  // 3D Design Projects (12 total)
  { 
    id: 9, 
    category: '3D Design', 
    title: 'Accel Seed to Scale: 3D Event Design', 
    image: one3d, 
    folderName: 'Accel Seed', 
    description: "Designing an immersive 3D experience for the Accel Seed to Scale Awards & Summit 2025, our project delivered a complete event environment. This included a striking welcome arch, interactive photo opportunities, and a dynamic main stage. The cohesive design enhanced the event's core message of growth and impact, providing a memorable experience for attendees." 
  },
  { id: 10, category: '3D Design', title: 'CSK 2025 Campaign: "YELLOVE" Stage Design', image: two3d, folderName: 'CSK Stage Design', description: "This dynamic stage design was created for the Chennai Super Kings (CSK) 2025 campaign, 'Enga CSK Getta.' The project features a vibrant, gaming-inspired theme, celebrating the spirit of the team and its fans. Key elements include a custom DJ console, a massive LED screen displaying the 'YELLOVE' slogan, and intricate light trusses that embody the team's iconic colors and energy. This design was successfully approved and executed to create a memorable fan experience." },
  { id: 11, category: '3D Design', title: 'French Avenue: 3D Luxury Perfume POS Display Design', image: three3d, folderName: 'French Avenue', description: "This project features a sophisticated Point of Sale (POS) display design for French Avenue Perfumes. We developed two unique concepts to enhance the retail experience: an elegant, curved counter with dedicated product display shelves, and a modern, cubic unit featuring a dynamic, 360-degree LED screen. Both designs were created to amplify the brand's identity, providing an immersive fragrance shopping experience and driving customer engagement at the point of sale." },
  { id: 12, category: '3D Design', title: 'M3M Resort Style Living: 3D Luxury Exhibition Stall Design', image: four3d, folderName: 'M3M Resort Style Living', description: "Our team designed and produced a premier exhibition stall for M3M Resort Style Living, showcasing luxury projects like M3M Golf Hills and M3M Solitude. The custom booth design featured dedicated meeting areas, digital displays, and architectural models to provide an immersive experience. This project highlights our expertise in creating impactful 3D exhibition stall designs for the real estate sector. The elegant aesthetic and functional layout successfully attracted and engaged potential homebuyers." },
  { id: 13, category: '3D Design', title: 'Amadeus Malhaar 2023: 3D Event & Stage Design', image: five3d, folderName: 'Amadeus Malhaar', description: "We provided a complete 3D design for Amadeus Malhaar 2023, crafting a vibrant and immersive event experience. Our designs included a dynamic entrance arch, a playful interactive photo booth, and a high-energy, custom-built main stage. The bold, colorful, and geometric aesthetic was tailored to capture the innovative spirit of the brand. This successful event design project helped create a memorable and engaging environment for all attendees." },
  { id: 14, category: '3D Design', title: 'Myntra Tech Threads 2024: Event Design', image: six3d, folderName: 'Myntra Tech Threads', description: "For Myntra Tech Threads 2024, our team created an immersive and futuristic event environment. The project included a captivating entrance arch, a vibrant registration counter, and a dynamic main stage. The design utilized a blend of bold colors, modern geometric shapes, and integrated digital displays to reflect Myntra's position at the intersection of fashion, technology, and innovation. This successful 3D event design concept was engineered to provide a memorable brand experience for all attendees." },
  { id: 15, category: '3D Design', title: 'Kingfisher Octobeerfest 2024: 3D Event Design', image: seven3d, folderName: 'Kingfisher Octobeer', description: "We delivered a comprehensive event design for Kingfisher's Octobeerfest 2024, capturing a festive, beer garden atmosphere. The project included a grand entrance arch, a large-scale bar and serving station, a dedicated merchandise counter, and a spacious dining area with communal tables. The design incorporated rustic wood textures, vibrant brand colors, and playful lighting to create an authentic and engaging experience for attendees. This successful experiential design project enhanced the event's festive spirit and brand presence." },
  { id: 16, category: '3D Design', title: 'Smart World One DXP: 3D Luxury Exhibition Booth Design', image: eight3d, folderName: 'Smart world One DXP', description: "We created a premium and sophisticated exhibition booth design for Smart World One DXP 2025 to promote its luxurious real estate project. The multi-level booth features a sleek, modern aesthetic with a striking color palette of white, gold, and vibrant turquoise accents. The design incorporates a welcoming reception area, comfortable seating zones, and a prominent architectural model display, all crafted to highlight the brand's commitment to exclusive, future-forward living in Bengaluru. This real estate exhibition design effectively communicates luxury and innovation in the Karnataka market." },
  { id: 17, category: '3D Design', title: 'Fragrance World Petra Incense: 3D Exhibition Stall Design', image: nine3d, folderName: 'Frangrance World Petra Incense', description: "We created a captivating exhibition stall design for Fragrance World Petra Incense at a Dubai event in 2025. The design features an opulent and intricate structure, inspired by the brand's luxurious and exotic fragrances. With a bold, dark aesthetic accented by rich gold detailing, the booth provides a high-end platform for product display and engagement. This immersive fragrance exhibition design was developed to attract a premium audience and showcase the brand's unique identity." },
  { id: 18, category: '3D Design', title: 'POCO X7 & X7 Pro Launch 3D Event Design', image: ten3d, folderName: 'POCO X7 & X7 Pro Launch', description: "For the POCO X7 and X7 Pro launch in 2024, we created an approved and executed event design that was as bold as the brand itself. The project featured a dynamic entrance arch, an engaging photo booth, and a high-tech main stage that incorporated the product's sleek design language. The overall aesthetic was a fusion of futuristic elements, vibrant branding, and interactive installations, successfully communicating the innovative spirit of the new smartphones. This successful product launch event design was crafted to create a memorable and impactful experience for a tech-savvy audience." },
  { id: 19, category: '3D Design', title: 'Tribeca | Tejukaya "Masterpiece": 3D Event & Stage Design', image: eleven3d, folderName: 'Tribeca', description: "For the Tribeca Tejukaya 'Masterpiece' event in 2025, our team delivered a sophisticated and elegant event design. The project included a grand stage design featuring a sleek, minimalist aesthetic with a prominent architectural backdrop and integrated lighting. The design was crafted to reflect the high-end, artistic nature of the Tejukaya residential project. This successful real estate event design created a premium and memorable experience, perfectly aligning the event with the brand's luxury identity." },
  { id: 20, category: '3D Design', title: 'Yezdi Product Launch 2025: 3D Event Design', image: twelve3d, folderName: 'Yezdi Product Launch', description: "For the 2025 Yezdi product launch, our team crafted an immersive event design that captured the brand's raw, rebellious spirit. The design featured an industrial-themed entrance arch with rugged metal textures and bold graphics, leading into a dynamic event space. This project was centered around creating an authentic, high-impact backdrop for the new motorcycle's debut, with an environment that resonated with the brand's heritage and adventurous identity. This successful motorcycle launch event design was crafted to engage both media and enthusiasts." },

  // Graphic Design Projects (8 total)
  { id: 21, category: 'Graphic Design', title: 'KaasPay: Fintech Logo & Visual Brand Mockups', image: onegd, folderName: 'KaasPay', description: "We created a modern and compelling logo design and visual identity for KaasPay, a fintech company. Our work includes comprehensive brand mockups, showcasing the logo's application across business cards, merchandise, and digital platforms. This project highlights our expertise in developing scalable and impactful visual brands." },
  { id: 22, category: 'Graphic Design', title: 'Tee Shirt Design - Pop Culture & Anime-Inspired', image: twogd, folderName: 'TeeShirt Designs', description: "We craft vibrant and expressive T-shirt designs that resonate with youngsters and teenagers, blending the energy of pop culture with the creativity of anime art. Our work includes high-quality mockups, showcasing each design’s appeal across casual wear, streetwear, and online store visuals. This project reflects our expertise in creating wearable art that captures attention and connects with today’s youth culture." },
  { id: 23, category: 'Graphic Design', title: 'Zyre - Social Media Campaign Design', image: threegd, folderName: 'Zyre Social Media', description: "For Zyre, a versatile clothing brand, we created a series of social media posters covering every category—from traditional ethnic wear to modern fashion. These designs showcased the brand’s website, upcoming drops, and product launches, paired with visually striking creatives to capture audience attention. Our work aimed to position Zyre as both stylish and diverse, using engaging visuals to drive promotion and brand awareness across digital platforms." },
  { id: 24, category: 'Graphic Design', title: 'Agni: Amazon Product Creative Design', image: fourgd, folderName: 'Agni Amazon Product', description: "We developed clear and impactful Amazon product creatives for Agni, a trusted pesticide product. Each slide was designed to enhance customer understanding highlighting the product’s purpose, showcasing its benefits, and displaying certification proof to build trust. Our visuals also presented the product’s appearance in a clean and appealing manner, ensuring it stands out in Amazon’s competitive marketplace. This project demonstrates our ability to combine informative design with persuasive visual storytelling." },
  { id: 25, category: 'Graphic Design', title: 'Sura NFT - Social Media Campaign Design', image: fivegd, folderName: 'Sura Social Media', description: "For Sura, a digital art and NFT brand, we designed a collection of social media posters tailored to highlight upcoming drops, exclusive launches, and featured artworks. Each design was crafted to reflect the unique aesthetics of the NFT space—blending bold visuals with a modern, tech-inspired style. Our creatives aimed to attract collectors and enthusiasts alike, building excitement and awareness for Sura’s offerings across digital platforms." },
  { id: 26, category: 'Graphic Design', title: 'Pinnacle Biosciences: Algae Research Logo and Branding', image: sixgd, folderName: 'Pinnacle Logo Design', description: "We designed a distinctive logo and visual brand identity for Pinnacle Biosciences, a research and product development center specializing in algae. The branding, which includes stationery and digital mockups, captures the company's scientific precision and commitment to sustainability. This project demonstrates our ability to create meaningful and memorable logos for the bioscience sector." },
  { id: 27, category: 'Graphic Design', title: 'Seasap Gold: Amazon Product Creative Design', image: sevengd, folderName: 'SeeSap Gold Amazon Product', description: "For Seasap Gold, a premium agricultural supplement, we designed engaging Amazon creatives aimed at both clarity and appeal. The slides detailed the product’s uses, highlighted its key advantages, and featured certification visuals to reinforce credibility. We also showcased the product in realistic, high-quality imagery to help customers visualize it before purchase. This project reflects our skill in blending informative content with eye-catching design for effective e-commerce presentation." },
  { id: 28, category: 'Graphic Design', title: 'Harley\'s Corner: Dog Food Packaging Design', image: eightgd, folderName: 'Harleys corner dog food packeging design', description: "We crafted an eye-catching and wholesome packaging design for Harley's Corner, a premium dog food brand. Our design features a dynamic mascot and a clear layout that highlights key nutritional benefits. The vibrant and playful aesthetic is designed to stand out on the shelf and appeal to pet owners. This packaging was specifically created to build brand trust and increase sales in a competitive market.." },
];

const categories = [
  { name: '3D Design', count: 12 },
  { name: 'UI/UX Design', count: 8 },
  { name: 'Graphic Design', count: 8 },
];

const ITEMS_PER_PAGE = 4;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('UI/UX Design');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetailView, setShowDetailView] = useState(false);
  const [detailImages, setDetailImages] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);


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

  const handleProjectClick = async (project, index) => {
    const images = await getDetailImages(project.category, project.folderName);
    const absoluteIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
    setDetailImages(images);
    setSelectedProject(project);
    setShowDetailView(true);
    setProjectIndex(absoluteIndex);
  };

  const handleCloseDetail = () => {
    setShowDetailView(false);
    setSelectedProject(null);
    setDetailImages([]); 
  };

  const getOtherProjects = (currentProjectId, currentCategory) => {
    const allInCategory = projectsData.filter(p => p.category === currentCategory && p.id !== currentProjectId);
    const shuffled = allInCategory.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  return (
    <div className="dark:text-white text-black min-h-screen p-4 font-poppins relative">
      {showDetailView && selectedProject ? (
        <ProjectDetail
          project={{ ...selectedProject, detailImages }}
          onClose={handleCloseDetail}
          otherProjects={getOtherProjects(selectedProject.id, selectedProject.category)}
          projectIndex={projectIndex}
        />
      ) : (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column (Projects) */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 pr-4 pl-2 md:h-[80vh]">
            {displayedProjects.map((project, index) => (
              <div key={project.id} className="grid grid-cols-[1%_95%] items-start gap-x-4">
                {/* Number */}
                <div className="text-xs self-start text-gray-600 dark:text-gray-400">
                  {String((currentPage - 1) * ITEMS_PER_PAGE + index + 1).padStart(2, '0')}
                </div>

                {/* Image + Title Overlay (Now a link) */}
                <button
                  onClick={() => handleProjectClick(project, index)}
                  className="relative overflow-hidden w-full group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[55%] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                  />
                  {/* Text Block */}
                  <div className="absolute w-[45%] text-left bottom-0 right-0 text-xs px-2 py-1">
                    <p>{project.title}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Right Column (Categories and Text) */}
          <div className="md:col-span-5 flex flex-col items-start md:sticky pt-1 md:self-start">
            
            {/* Row 1: Categories and Pagination */}
            <div className="w-full flex justify-between items-start">
              {/* Categories (First Column) */}
              <div className="flex flex-col space-y-2 w-1/2 pr-4">
  {categories.map((category) => (
    <button
      key={category.name}
      onClick={() => handleCategoryClick(category.name)}
      className="w-[80%] flex justify-between items-center text-sm transition-colors duration-300"
    >
      <span
        className={`flex border py-2 px-2 border-black dark:border-white dark:text-white min-w-[80%] transition-colors duration-300 ${
          activeCategory === category.name
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "text-black dark:hover:bg-gray-600 hover:bg-gray-100 "
        }`}
      >
        {activeCategory === category.name && (
          <ArrowUpLeft size={20} className="transform -rotate-45 mr-2" />
        )}
        <span>{category.name} ({category.count})</span>
      </span>
    </button>
  ))}
</div>


              {/* Page Navigation (Second Column) */}
              <div className="flex justify-end items-center gap-2 w-1/2">
                <div className="text-xs">Page</div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1}
                    className={`p-2 ${currentPage === 1 ? 'border-gray-200 text-gray-200 dark:text-gray-800' : ' text-black dark:text-white'}`}
                  >
                    <ArrowUpLeft size={16} className="transform -rotate-45" />
                  </button>
                  <span className="flex items-center justify-center font-bold text-xs border border-black dark:border-white rounded-full h-6 w-6">
  {currentPage}
</span>

                  <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages}
                    className={`p-2 ${currentPage === totalPages ? 'border-gray-200 text-gray-200 dark:text-gray-800' : ' text-black dark:text-white'}`}
                  >
                    <ArrowUpRight size={16} className="transform rotate-45" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-full pt-[25%]">
              {/* Row 2: Description */}
              <p className=" text-base font-light">
                We've grouped our work by category so you can find exactly <br/>what you're into.
              </p>
            </div>
            <div className="w-full ">
              {/* Row 3: Philosophical text */}
              <div className="grid grid-cols-3 pt-14 text-xl font-bold text-gray-600 dark:text-gray-400">
                {/* 1st */}
                <div className="relative overflow-hidden text-xs font-normal group h-4 text-left">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">28</span>
                  <div className="absolute inset-0 flex items-center">
                    <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">M</span>
                    <span className="transition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">A</span>
                  </div>
                </div>

                {/* 2nd */}
                <div className="relative overflow-hidden text-xs font-normal group h-4 text-left">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">31</span>
                  <div className="absolute inset-0 flex items-center">
                    <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">N</span>
                    <span className="transition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">A</span>
                  </div>
                </div>

                {/* 3rd → right aligned */}
                <div className="relative overflow-hidden text-xs font-normal group h-4 text-left justify-self-end">
                  <span className="block transition-transform duration-500 pr-2 group-hover:-translate-y-full">15</span>
                  <div className="absolute inset-0 flex items-center">
                    <span className="transition-transform duration-500 delay-100 translate-y-full group-hover:translate-y-0">S</span>
                    <span className="transition-transform duration-500 delay-200 translate-y-full group-hover:translate-y-0">U</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Row 4: "More works" section */}
            <div className="flex justify-between items-end w-full pt-14">
              <p className="text-[0.7rem] font-light leading-relaxed">
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