import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
      
      {/* Main Hero Section */}
      <div className="container mx-auto px-6 md:px-12 py-0 md:py-3 sm:py-6">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 min-h-[400px] md:min-h-[450px]">
          
          {/* Left Content - Text */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left flex flex-col justify-center">
            <p className="text-sm md:text-base uppercase tracking-wider font-semibold">
              Trusted Cleaning Experts in Finland
            </p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Cleanliness, Our Priority
            </h1>
            
            <p className="text-base md:text-lg text-white/90 max-w-lg">
              Professional, reliable, and passionate about making every place shine — 
              from offices to homes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <Link
                to="/contact"
                className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition"
              >
                Work For Us
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-stretch">
            <div className="h-full flex items-center justify-end">
              <img
                src="/src/assets/icons/hero-banner-5.png"
                alt="Professional Cleaning Team"
                className="h-[140%] w-auto md:h-[130%] object-contain object-right"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-red-600 py-6 md:py-8 border-t border-red-700">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 gap-6 md:gap-0">
            
            {/* Stat 1 */}
            <div className="text-center py-4 md:py-0 md:px-6">
              <div className="text-4xl mb-2">🏠</div>
              <h3 className="text-base md:text-lg font-semibold">
                Finnish Family Business
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Locally owned and operated
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center py-4 md:py-0 md:px-6">
              <div className="text-4xl mb-2">👷‍♂️</div>
              <h3 className="text-base md:text-lg font-semibold">
                50+ Skilled Workers
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Experienced professionals at work
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center py-4 md:py-0 md:px-6">
              <div className="text-4xl mb-2">🌍</div>
              <h3 className="text-base md:text-lg font-semibold">
                A Trailblazer in Responsibility
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Eco-friendly and sustainable practices
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
