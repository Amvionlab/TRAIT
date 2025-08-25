import { useState } from 'react';
import Contact from '../components/contact/Contact.png';
import Cook from '../components/contact/Cook.png';
import Highfive from '../components/contact/highfive-hyped.gif';
import Name from '../components/contact/Name.png';
import { ChevronDown, ArrowUpRight, ArrowUpLeft } from "lucide-react"; 

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    services: [], // Changed to array for multi-select
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData(prevState => {
      const services = prevState.services.includes(service)
        ? prevState.services.filter(s => s !== service)
        : [...prevState.services, service];
      return {
        ...prevState,
        services: services
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', services: [], email: '' });
  };

  const services = [
    "3D Design",
    "UI/UX Design",
    "Graphic Design",
    "Full Stack Development",
    "Front end Development",
    "Back end Development",
    "Content Creation"
  ];

  return (
    <div className="h-[80vh] dark:text-white pl-1">
      {/* Main Content */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-32">
          {/* Left Column - Form */}
          <div className="space-y-8">
            <h1 className="text-4xl font-normal">
             <span className='flex gap-x-2'> Get in touch <svg width="48" height="48" viewBox="0 0 64 64" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M29.5998 12.7998V41.9998L16.1998 28.5998L12.7998 31.9998L31.9998 51.1998L51.1998 31.9998L47.7998 28.5998L34.3998 41.9998V12.7998H29.5998Z" fill="white"/>
</svg></span>

            </h1>
            <div className="space-y-8">
              {/* Name Field */}
              <div className="flex items-center space-x-4">
                <div className="text-base font-semibold mb-2">Say your name</div>
                <div className="w-20 h-10">
                  <img src={Name} alt="Name" className="w-full h-full object-cover" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Heisenberg"
                  className="flex-1 text-base border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black"
                />
              </div>

              {/* Service Field */}
              <div className="flex items-center space-x-4">
                <div className="text-base mb-2">What you wanna cook</div>
                <div className="w-20 h-10">
                  <img src={Cook} alt="Service" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-base border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black text-left flex items-center justify-between"
                  >
                    <span className='dark:text-gray-400'>{formData.services.length > 0 ? formData.services.join(', ') : 'Select'}</span>
                    <ChevronDown size={16} className={`transform transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-2">
                      <div className="py-2 max-h-64 overflow-y-auto">
                        {services.map((service, index) => (
                          <label key={index} className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceSelect(service)}
                              className="mr-3 w-4 h-4"
                            />
                            <span className="text-base">{service}</span>
                          </label>
                        ))}
                      </div>
                      <div className="border-t border-gray-200 p-3">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(false)}
                          className="w-full py-2 text-center border border-gray-300 rounded hover:bg-gray-50"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="flex items-center space-x-4">
                <div className="text-base mb-2">Write your E-mail or contact</div>
                <div className="w-20 h-10">
                  <img src={Contact} alt="Contact" className="w-full h-full object-cover" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Heisenberg@gmail.com"
                  className="flex-1 text-base border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black"
                />
              </div>

              {/* Submit Button */}
<div className="flex items-center justify-end space-x-4">
  <div className="w-20 h-10">
    <img
      src={Highfive}
      alt="Submit"
      className="w-full h-full object-cover"
    />
  </div>
  <button
    onClick={handleSubmit}
    className="px-12 py-2 border border-black dark:border-white text-base hover:bg-black hover:text-white transition-colors"
  >
    Send
  </button>
</div>

{submitted && (
  <p className="text-gray-600 mt-4">
    Consider it done – Heisenberg style. Will reach you shortly.
  </p>
)}



            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col justify-start space-y-16 pl-24">
            {/* Address */}
            <div className="flex items-start">
              <div className="w-1/2 text-left">
                <h3 className="text-sm font-medium mb-4">Address</h3>
              </div>
              <div className="w-1/2 text-right">
                <div className="text-sm ">
                  2031, 2nd floor,<br />
                  18th A Main Rd, Marenahalli,<br />
                  2nd Phase, J. P. Nagar<br />
                  Bangalore, KA
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start pt-10">
              <div className="w-1/2 text-left">
                <h3 className="text-sm font-medium mb-6">Email us</h3>
              </div>
              <div className="ml-[20%] text-sm">
              <a
    href="mailto:info@thetrait.in"
    className="group flex items-center space-x-3 relative pb-1"
  >
    <span>info@thetrait.in</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0 -left-3 w-full h-px bg-gray-300 overflow-hidden">
      <span className="sweep-line absolute bottom-0 left-0 h-full bg-black"></span>
    </span>
  </a>
               
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-5">
              <div className="grid grid-cols-2 items-start">
                <div>
                  <p className="text-sm font-raleway max-w-xs leading-relaxed">
                    Join us at the <br />
                    intersection of form <br />
                    and function.
                  </p>
                </div>

                <div className=" grid grid-cols-2 gap-y-7 text-xs font-medium">
  {/* Row 1 */}
  <a
    href="#"
    className="group flex items-center justify-end space-x-3 relative pb-1"
  >
    <span>Instagram</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0  w-[75%] h-px bg-gray-300 overflow-hidden">
      <span className="sweep-line absolute bottom-0 left-0 h-full bg-black"></span>
    </span>
  </a>

  <a
    href="#"
    className="group flex items-center justify-end space-x-3 relative pb-1"
  >
    <span>LinkedIn</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0  w-[75%] h-px bg-gray-300 overflow-hidden">
      <span className="sweep-line absolute bottom-0 left-0 h-full bg-black"></span>
    </span>
  </a>


  <a
    href="#"
    className="group flex items-center justify-end space-x-3 relative pb-1"
  >
    <span>YouTube</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0 w-[75%] h-px bg-gray-300 overflow-hidden">
      <span className="sweep-line absolute bottom-0 left-0 h-full bg-black"></span>
    </span>
  </a>

  <a
    href="#"
    className="group flex items-center justify-end space-x-3 relative pb-1"
  >
    <span>Behance</span>
    <ArrowUpRight size={12} />
    <span className="absolute bottom-0 w-[75%] h-px bg-gray-300 overflow-hidden">
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
          </div>
        </div>

        {/* Footer */}
        <div className="mt-[9%] grid grid-cols-12 items-center text-xs dark:text-gray-400">
  {/* Left Section (7 cols) */}
  <div className="col-span-7">
    <span>© 2025, Trait - Distinguished. Made with passion by Trait</span>
  </div>

  {/* Right Section (5 cols → split into 3 sub-cols) */}
  <div className="col-span-4 grid grid-cols-2 gap-4 ml-[16%]">
    <div>
      <a href="#" className="">Privacy & Cookie Policy</a>
    </div>
    <div>
      <a href="#" className="">Terms of Service</a>
    </div>
    <div>{/* Empty third column */}</div>
  </div>
</div>

      </div>
    </div>
  );
}