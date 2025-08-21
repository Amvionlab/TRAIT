export default function Home() {
  return (
    <div className="text-black dark:text-white flex flex-col items-start justify-start">
      <div className="container -mt-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-[60%_40%]  relative">
          {/* Left Column: All Services and Join Us (starts at 0%) */}
          <div className="space-y-12">
            {/* All Services Section */}
            <div className="-ml-2">
              <h2 className="text-sm font-bold mb-4 font-poppins">All Services</h2>
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
            <div className="-ml-2 pt-6">
              <p className="text-sm mb-4 font-raleway">
                Join us at the intersection of form and function.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs underline">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">YouTube</a>
                <a href="#">Behance</a>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Services and Agency Description (starts at 60%) */}
          <div className="space-y-6 ml-[60%] pl-6 sm:ml-0 sm:absolute sm:top-0 sm:right-0 w-full sm:w-[40%]">
            {/* Featured Services Section */}
            <div>
              <h2 className="text-sm font-bold mb-4 font-poppins">Featured Services</h2>
              <p className="text-xs mb-4 text-gray-500 dark:text-gray-400">(06)</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl text-xs">
  <div className="flex flex-col items-center">
    <div className="bg-gray-200 dark:bg-gray-700 h-24 w-full flex items-center justify-center"></div>
    <p className="mt-2">3D Design</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="bg-gray-200 dark:bg-gray-700 h-24 w-full flex items-center justify-center"></div>
    <p className="mt-2">UI/UX Design</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="bg-gray-200 dark:bg-gray-700 h-24 w-full flex items-center justify-center"></div>
    <p className="mt-2">Graphic Design</p>
  </div>
</div>

            </div>

            {/* Agency Description Section */}
            <div className="pt-9">
              <p className="text-base max-w-sm font-raleway">
                We're a design agency built on timeless creative ratios. Always open to new forms, new ideas, and the unexpected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}