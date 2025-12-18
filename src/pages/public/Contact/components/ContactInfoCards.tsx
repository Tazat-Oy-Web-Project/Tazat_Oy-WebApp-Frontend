// ---- Contact Info Cards Component ---- //

function ContactInfoCards() {
  return (
    <div className="flex flex-col gap-4">
      
      {/* Call Card */}
      <a 
        href="tel:+358411234567" 
        className="flex flex-row gap-4 p-5 bg-white rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.2)] border-2 border-gray-300 hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 group"
      >

        <div className="flex items-center justify-center w-12 h-12 bg-amber-100 group-hover:bg-amber-500 rounded-lg transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-700 group-hover:text-amber-600 transition-colors duration-300">Call Us</p>
          <p className="text-base font-bold text-gray-900">+358 41 123 4567</p>
        </div>

      </a>

      {/* Email Card */}
      <a 
        href="mailto:support@tazat.com" 
        className="flex flex-row gap-4 p-5 bg-white rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.2)] border-2 border-gray-300 hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 group"
      >

        <div className="flex items-center justify-center w-12 h-12 bg-amber-100 group-hover:bg-amber-500 rounded-lg transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-700 group-hover:text-amber-600 transition-colors duration-300">Email Us</p>
          <p className="text-base font-bold text-gray-900">support@tazat.com</p>
        </div>

      </a>

      {/* Location Card */}
      <a 
        href="https://www.google.com/maps/place/Ylioppilaantie+8,+90130+Oulu/@65.009504,25.5001242,17z/data=!3m1!4b1!4m6!3m5!1s0x4681cdbae5178bbb:0x47e18d5d98103083!8m2!3d65.009504!4d25.5026991!16s%2Fg%2F11vzfc5mt8?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" 
        target="_blank" rel="noopener noreferrer" 
        className="flex flex-row gap-4 p-5 bg-white rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.2)] border-2 border-gray-300 hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 group"
      >
              
        <div className="flex items-center justify-center w-12 h-12 bg-amber-100 group-hover:bg-amber-500 rounded-lg transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-700 group-hover:text-amber-600 transition-colors duration-300">Visit Us</p>
          <p className="text-base font-bold text-gray-900">Ylioppilaantie 8 A 15</p>
        </div>

      </a>

    </div>
  );
}

export default ContactInfoCards;
