import NavbarComponent from "../components/Navbar";

function Contact(){
    return(
        <div>
            {/* Navbar component */}
            <NavbarComponent />

            <div className="flex flex-col justify-start items-center min-h-screen bg-linear-to-b from-gray-50 via-amber-50 to-orange-50 w-full">

                {/** --------------------------------------------------------------------------------------- 
                    1.0 Header Part 
                --------------------------------------------------------------------------------------- **/} 
                <div className="w-full bg-linear-to-r from-white via-orange-300/40 to-yellow-50/40 py-12 md:py-16 shadow-md border-b-2 border-orange-200/30 mb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto px-4">
                        We're here to help! Whether you have questions about our services, need a quote, or want to provide feedback, feel free to reach out. 
                        Our team is ready to assist you with any inquiries you may have.
                    </p>
                </div>



                {/** --------------------------------------------------------------------------------------- 
                    2.0 Data Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="grid grid-cols-1 xl:grid-cols-10 gap-5 w-full px-4 md:px-8">
                    
                    {/* 2.1 ----------------------- Left Column - Form Part (70%) -----------------------*/}
                    <div className="flex flex-col xl:col-span-7 gap-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-10 border-2 border-orange-200 hover:shadow-[0_20px_60px_rgb(0,0,0,0.25)] transition-all duration-300">
                        <div className="border-b border-gray-200 pb-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                            <p className="text-sm text-gray-500">Fill out the form below and we'll get back to you shortly</p>
                        </div>

                        {/* Form Fields - Double */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Row 1*/}
                            <div className="flex flex-col group">
                                <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text"
                                    name="fullName"
                                    required
                                    placeholder="Ryan Wick"
                                    className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
                                />
                            </div>

                            <div className="flex flex-col group">
                                <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
                                    Company Name <span className="text-gray-500 text-sm font-normal">(optional)</span>
                                </label>
                                <input 
                                    type="text"
                                    name="companyName"
                                    placeholder="Your Company Ltd."
                                    className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
                                />
                            </div>


                            {/* Row 2*/}
                            <div className="flex flex-col group">
                                <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="ryan@example.com"
                                    className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
                                />
                            </div>

                            <div className="flex flex-col group">
                                <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="tel"
                                    name="phoneNumber"
                                    required
                                    placeholder="0411234567"
                                    className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
                                />
                            </div>                           

                        </div>


                        {/* Form Fields - Single */}
                        <div className="flex flex-col group">
                            <label className="text-base font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-amber-600">
                                Your Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                required
                                placeholder="Tell us about your inquiry, questions, or how we can help you..."
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:border-gray-400 bg-gray-50/50 focus:bg-white resize-y min-h-[150px]"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                <span className="text-red-500">*</span> Required fields
                            </p>
                            <button
                                type="submit"
                                className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-2 hover:cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                Send Message
                            </button>
                        </div>

                    </div>

                    {/* 2.2 ----------------------- Right Column - Info Part (30%) -----------------------*/}
                    <div className="flex flex-col xl:col-span-3 gap-6">
                        
                         {/* 2.2.1 ----------------------- Info Display - 3 Cards */}
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

                        {/* 2.2.2 ----------------------- Map Display */}
                        <div className="w-full bg-white rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.2)] overflow-hidden border-2 border-gray-300 transition-all duration-300">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.2589562826354!2d25.500124217763967!3d65.00950399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cdbae5178bbb%3A0x47e18d5d98103083!2sYlioppilaantie%208%2C%2090130%20Oulu!5e0!3m2!1sen!2sfi!4v1732442400000!5m2!1sen!2sfi"
                                width="100%" 
                                height="300" 
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Tazat Oy Location"
                            ></iframe>
                        </div>
                        
                        {/* 2.2.3 ----------------------- Social Media Links Display */}
                        <div className="flex flex-col gap-4 bg-white rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.2)] p-6 border-2 border-gray-300 justify-center items-center transition-all duration-300">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Follow Us</h3>
                            
                            <div className="flex flex-row gap-3">
                                
                                {/* Facebook */}
                                <a 
                                    href="https://facebook.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110 group"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-pink-100 hover:bg-pink-600 rounded-lg transition-all duration-300 hover:scale-110 group"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-110 group"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>

                                {/* Twitter/X */}
                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-110 group"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>

                    </div>    
                    
                </div>


                
                
            </div>

        </div>
    )
}

export default Contact;
