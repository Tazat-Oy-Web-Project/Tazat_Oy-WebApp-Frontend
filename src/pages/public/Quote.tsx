import NavbarComponent from "./components/Navbar";

function Quote(){
    return(
        <div>
            {/* Navbar component */}
            <NavbarComponent />
            
            
            
            <div className="flex flex-col justify-start items-center min-h-screen bg-blue-400 w-full">

                {/** --------------------------------------------------------------------------------------- 
                    1.0 Header Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="flex flex-col justify-center items-center mt-8 h-[100px] w-full bg-amber-700 ">
                    <div>
                        <h1 className="text-4xl font-bold">Get a Quote</h1>
                    </div>
                    <div>
                        <p className="text-lg mt-2">Fast, easy, and processed within 24 hours.</p>
                    </div>
                </div>

                {/** --------------------------------------------------------------------------------------- 
                    2.0 Progress Bar Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="flex flex-row justify-center items-center gap-2 bg-amber-500 py-6 px-4 w-full max-w-6xl mt-8">
                    
                    {/* Step 1 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-10 h-10 bg-amber-50 rounded-full font-semibold mb-2">
                            <p>1</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-medium text-white">Contact</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-0.5 bg-amber-50 -mt-6"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-10 h-10 bg-amber-50 rounded-full font-semibold mb-2">
                            <p>2</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-medium text-white">Service</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-0.5 bg-amber-50 -mt-6"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-10 h-10 bg-amber-50 rounded-full font-semibold mb-2">
                            <p>3</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-medium text-white">Property</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-0.5 bg-amber-50 -mt-6"></div>

                    {/* Step 4 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-10 h-10 bg-amber-50 rounded-full font-semibold mb-2">
                            <p>4</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-medium text-white">Requirements</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-0.5 bg-amber-50 -mt-6"></div>

                    {/* Step 5 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-10 h-10 bg-amber-50 rounded-full font-semibold mb-2">
                            <p>5</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-medium text-white">Schedule</p>
                        </div>
                    </div>
                </div>

                {/** --------------------------------------------------------------------------------------- 
                    3.0 Data Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="flex flex-col justify-center items-start mt-8 mb-8 w-full max-w-6xl bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200">
                    

                    {/* 3.1 ----------------------- Basic Information Part -----------------------*/}

                    <div className="mb-6 border-l-4 border-amber-600 pl-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Contact Information</h2>
                        <p className="text-sm text-gray-600">Please provide your contact details so we can get back to you</p>
                    </div>
                    
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-6">

                        {/* Name Input Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="text"
                                name="fullName"
                                placeholder="Ryan Wick"
                                required
                            />
                            <span className="text-xs text-gray-500 mt-1">Enter your first and last name</span>
                        </div>

                        {/* Company Name Input Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Company Name <span className="text-gray-400 text-sm font-normal">(Optional)</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="text"
                                name="companyName"
                                placeholder="ABC Corporation"
                            />
                            <span className="text-xs text-gray-500 mt-1">Leave blank if individual request</span>
                        </div>                    
                        
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">

                        {/* Email Input Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="email"
                                name="email"
                                placeholder="ryan.wick@example.com"
                                required
                            />
                            <span className="text-xs text-gray-500 mt-1">We'll send the quote to this email</span>
                        </div>

                        {/* Phone Input Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="tel"
                                name="phone"
                                placeholder="+358 40 123 4567"
                                required
                            />
                            <span className="text-xs text-gray-500 mt-1">Include country code if outside Finland</span>
                        </div>                    
                        
                    </div>


                    {/* 3.2 ----------------------- Service Type Part -----------------------*/}

                </div>

                {/** --------------------------------------------------------------------------------------- 
                    4.0 Button Part 
                --------------------------------------------------------------------------------------- **/}



            </div>
        </div>
    )
}

export default Quote;
