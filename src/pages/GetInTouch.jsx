import { useState } from 'react';
import Contact from '../components/contact/Contact.png';
import Cook from '../components/contact/Cook.png';
import Highfive from '../components/contact/highfive-hyped.gif';
import Name from '../components/contact/Name.png';
import { ArrowUpRight } from "lucide-react";

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
    <div className="min-h-screen bg-white text-black">
      {/* Main Content */}
      <div className="px-8 pt-8">
        <div className="grid grid-cols-2 gap-32">
          {/* Left Column - Form */}
          <div className="space-y-16">
            <h1 className="text-6xl font-normal">
              Get in touch <span className="text-4xl">↓</span>
            </h1>
            <div className="space-y-12">
              {/* Name Field */}
              <div className="flex items-center space-x-4">
                <div className="text-lg mb-2">Say your name</div>
                <div className="w-14 h-14">
                  <img src={Name} alt="Name" className="w-full h-full rounded-lg object-cover" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Heisenberg"
                  className="flex-1 text-lg border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black"
                />
              </div>

              {/* Service Field */}
              <div className="flex items-center space-x-4">
                <div className="text-lg mb-2">What you wanna cook</div>
                <div className="w-14 h-14">
                  <img src={Cook} alt="Service" className="w-full h-full rounded-lg object-cover" />
                </div>
                <div className="flex-1 relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-lg border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black text-left flex items-center justify-between"
                  >
                    <span>{formData.services.length > 0 ? formData.services.join(', ') : 'Select'}</span>
                    <ArrowUpRight size={16} className={`transform transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`} />
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
                <div className="text-lg mb-2">Write your E-mail or contact</div>
                <div className="w-14 h-14">
                  <img src={Contact} alt="Contact" className="w-full h-full rounded-lg object-cover" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Heisenberg@gmail.com"
                  className="flex-1 text-lg border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center space-x-4 pt-8">
                <div className="w-14 h-14">
                  <img src={Highfive} alt="Submit" className="w-full h-full rounded-lg object-cover" />
                </div>
                <button
                  onClick={handleSubmit}
                  className="px-12 py-3 border border-black rounded-lg text-lg hover:bg-black hover:text-white transition-colors"
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
                <h3 className="text-lg font-medium mb-4">Address</h3>
              </div>
              <div className="w-1/2 text-right">
                <div className="text-base leading-relaxed">
                  2031, 2nd floor,<br />
                  18th A Main Rd, Marenahalli,<br />
                  2nd Phase, J. P. Nagar<br />
                  Bangalore, KA
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="w-1/2 text-left">
                <h3 className="text-lg font-medium mb-4">Email us</h3>
              </div>
              <div className="w-1/2 text-right">
                <a href="mailto:info@thetrait.in" className="text-base underline flex items-center justify-end space-x-2">
                  <span>info@thetrait.in</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-start">
              <div className="w-1/2 text-left">
                <p className="text-base mb-6">Join us at the intersection of form and function.</p>
              </div>
              <div className="w-1/2 text-right">
                <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-base">
                  <a href="#" className="flex items-center justify-end space-x-2 underline">
                    <span>Instagram</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-end space-x-2 underline">
                    <span>LinkedIn</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-end space-x-2 underline">
                    <span>You tube</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-end space-x-2 underline">
                    <span>Behance</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 mb-8 flex justify-between items-center text-sm text-gray-500">
          <span>© 2025, Trait - Distinguished. Made with passion by Trait</span>
          <div className="flex space-x-8">
            <a href="#" className="underline">Privacy & Cookie Policy</a>
            <a href="#" className="underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}