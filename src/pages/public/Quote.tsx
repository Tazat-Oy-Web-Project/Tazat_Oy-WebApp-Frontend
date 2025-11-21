import { useState } from "react";
import NavbarComponent from "./components/Navbar";


function Quote(){


    // ---- Cleaning Frequency (Radio Button) State Management ---- //

    const [selectedFrequency, setSelectedFrequency] = useState('')

    const handleFrequencyChange = (event:any)=>{
        setSelectedFrequency(event.target.value);
        console.log(selectedFrequency);
    }


    // ---- Additional Requirements (Checkboxes) State Management ---- //
    const [inputs, setInputs] = useState({
        floorCleaning: false,
        windowCleaning: false,
        sanitization: false,
        wasteRemoval: false,
        carpetCleaning: false,
        kitchenCleaning: false,
        toiletCleaning: false,
    });

    const handleCheckboxChange = (event:any) => {
        const { name, checked } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: checked,
        }));
    };

    // -------- Printing the Radio Button and Checkbox States to Console for Testing -------- //
    console.log(inputs);
    console.log(selectedFrequency);


    return(
        <div>
            {/* Navbar component */}
            <NavbarComponent />
            
            
            
            <div className="flex flex-col justify-start items-center min-h-screen bg-linear-to-b from-gray-50 via-amber-50 to-orange-50 w-full">

                {/** --------------------------------------------------------------------------------------- 
                    1.0 Header Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="flex flex-col justify-center items-center mt-8 h-[120px] w-full bg-linear-to-r from-amber-300 via-orange-500 to-amber-200 shadow-lg relative overflow-hidden">
                    {/* Animated overlay for slide effect */}
                    <div className="absolute inset-0 bg-white animate-[slideOut_0.8s_ease-out_forwards]"></div>
                    
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold text-white drop-shadow-md">Get a Quote</h1>
                    </div>
                    <div className="relative z-10">
                        <p className="text-lg md:text-xl mt-3 text-white/95 font-medium drop-shadow-lg">
                            Fast, easy, and processed within 24 hours.
                        </p>
                    </div>
                    
                    <style>{`
                        @keyframes slideOut {
                            from {
                                transform: translateX(0);
                            }
                            to {
                                transform: translateX(100%);
                            }
                        }
                    `}</style>
                </div>

                {/** --------------------------------------------------------------------------------------- 
                    2.0 Progress Bar Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="flex flex-row justify-center items-center gap-2 bg-white py-8 px-4 w-full max-w-6xl mt-8 rounded-xl shadow-md border border-gray-100">
                    
                    {/* Step 1 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full font-bold mb-2 shadow-md">
                            <p className="text-white">1</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-semibold text-gray-700">Contact</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-1 bg-linear-to-r from-amber-400 to-orange-400 rounded-full -mt-6"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full font-bold mb-2 shadow-md">
                            <p className="text-white">2</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-semibold text-gray-700">Service</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-1 bg-linear-to-r from-amber-400 to-orange-400 rounded-full -mt-6"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full font-bold mb-2 shadow-md">
                            <p className="text-white">3</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-semibold text-gray-700">Property</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-1 bg-linear-to-r from-amber-400 to-orange-400 rounded-full -mt-6"></div>

                    {/* Step 4 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full font-bold mb-2 shadow-md">
                            <p className="text-white">4</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-semibold text-gray-700">Frequency</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-1 bg-linear-to-r from-amber-400 to-orange-400 rounded-full -mt-6"></div>

                    {/* Step 5 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full font-bold mb-2 shadow-md">
                            <p className="text-white">5</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-semibold text-gray-700">Requirements</p>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="flex-1 h-1 bg-linear-to-r from-amber-400 to-orange-400 rounded-full -mt-6"></div>

                    {/* Step 6 */}
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full font-bold mb-2 shadow-md">
                            <p className="text-white">6</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-semibold text-gray-700">Schedule</p>
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

                    <div className="mb-6 border-l-4 border-amber-600 pl-4 mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Service Selection</h2>
                        <p className="text-sm text-gray-600">Choose the type of cleaning service you need</p>
                    </div>
                    
                    {/* Service Type Selection */}
                    <div className="w-full mb-6">
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Service Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="serviceType"
                                required
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 bg-white focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200 cursor-pointer"
                            >
                                <option value="" disabled selected>Select a service type</option>
                                <option value="office">Office Cleaning</option>
                                <option value="commercial">Commercial Building Cleaning</option>
                                <option value="industrial">Industrial Cleaning</option>
                                <option value="hospital">Hospital/Medical Facility Cleaning</option>
                                <option value="retail">Retail/Supermarket Cleaning</option>
                                <option value="residential">Residential Cleaning</option>
                                <option value="deep">Deep Cleaning/Sanitation</option>
                                <option value="construction">Post-Construction Cleaning</option>
                                <option value="other">Other (Please specify below)</option>
                            </select>
                            <span className="text-xs text-gray-500 mt-1">Select the service that best matches your needs</span>
                        </div>
                    </div>

                    {/* Other Service Specification - Show only when "Other" is selected */}
                    <div className="w-full mb-6">
                        {/* TODO: Add state management to show/hide this field based on dropdown selection */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Specify Other Service <span className="text-gray-400 text-sm font-normal">(If applicable)</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="text"
                                name="otherService"
                                placeholder="Please describe the service you need"
                            />
                            <span className="text-xs text-gray-500 mt-1">Only fill this if you selected "Other" above</span>
                        </div>
                    </div>



                    {/* 3.3 ----------------------- Property Details Part -----------------------*/}

                    <div className="mb-6 border-l-4 border-amber-600 pl-4 mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Property Details</h2>
                        <p className="text-sm text-gray-600">Tell us about the space that needs cleaning</p>
                    </div>

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-6">

                        {/* Type of Space Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Type of Space <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="spaceType"
                                required
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 bg-white focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200 cursor-pointer"
                            >
                                <option value="" disabled selected>Select type of space</option>
                                <option value="office">Office</option>
                                <option value="warehouse">Warehouse</option>
                                <option value="retail">Shop/Retail Store</option>
                                <option value="medical">Medical Center/Clinic</option>
                                <option value="educational">Educational Building</option>
                                <option value="restaurant">Restaurant/Café</option>
                                <option value="residential">Apartment/House</option>
                                <option value="industrial">Industrial Facility</option>
                            </select>
                            <span className="text-xs text-gray-500 mt-1">Choose the type that best describes your property</span>
                        </div>

                        {/* Approximate Size Input Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Approximate Size <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                    type="number"
                                    name="approximateSize"
                                    placeholder="e.g., 150"
                                    required
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">m²</span>
                            </div>
                            <span className="text-xs text-gray-500 mt-1">Enter the total area in square meters</span>
                        </div>                    
                        
                    </div>


                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-6">

                        {/* Number of Rooms/Areas Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Number of Rooms/Areas <span className="text-gray-400 text-sm font-normal">(Optional)</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="number"
                                name="numberOfRooms"
                                placeholder="e.g., 8"
                            />
                            <span className="text-xs text-gray-500 mt-1">How many rooms or separate areas need cleaning</span>
                        </div>

                        {/* Number of Floors Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Number of Floors <span className="text-gray-400 text-sm font-normal">(Optional)</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="number"
                                name="numberOfFloors"
                                placeholder="e.g., 2"
                            />
                            <span className="text-xs text-gray-500 mt-1">How many floors in the building</span>
                        </div>
                        
                    </div>

                    {/* Row 3 */}
                    <div className="w-full mb-6">

                        {/* Address or City Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Property Address/Location <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="text"
                                name="propertyAddress"
                                placeholder="Enter full address or city (e.g., Tekniikantie 12, 02150 Espoo)"
                                required
                            />
                            <span className="text-xs text-gray-500 mt-1">Provide the complete address or at least the city</span>
                        </div>
                        
                    </div>



                    {/* 3.4 ----------------------- Cleaning Frequency Part -----------------------*/}

                    <div className="mb-6 border-l-4 border-amber-600 pl-4 mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Cleaning Frequency</h2>
                        <p className="text-sm text-gray-600">How often do you need cleaning services?</p>
                    </div>

                    <div className="w-full mb-6">
                        <label className="text-base font-semibold text-gray-700 mb-3 block">
                            Select Frequency <span className="text-red-500">*</span>
                        </label>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            
                            {/* One-time Option */}
                            <label className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                selectedFrequency === 'one-time' 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="radio" 
                                    name="frequency" 
                                    value="one-time" 
                                    checked={selectedFrequency === 'one-time'}
                                    onChange={handleFrequencyChange}
                                    className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                                    required
                                /> 
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">One-time</span>
                                    <span className="text-xs text-gray-600">Single cleaning service</span>
                                </div>
                            </label>

                            {/* Daily Option */}
                            <label className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                selectedFrequency === 'daily' 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="radio" 
                                    name="frequency" 
                                    value="daily" 
                                    checked={selectedFrequency === 'daily'}
                                    onChange={handleFrequencyChange}
                                    className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                                /> 
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Daily</span>
                                    <span className="text-xs text-gray-600">Every business day</span>
                                </div>
                            </label>

                            {/* Weekly Option */}
                            <label className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                selectedFrequency === 'weekly' 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="radio" 
                                    name="frequency" 
                                    value="weekly" 
                                    checked={selectedFrequency === 'weekly'}
                                    onChange={handleFrequencyChange}
                                    className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                                /> 
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Weekly</span>
                                    <span className="text-xs text-gray-600">Once per week</span>
                                </div>
                            </label>

                            {/* Bi-Weekly Option */}
                            <label className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                selectedFrequency === 'bi-weekly' 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="radio" 
                                    name="frequency" 
                                    value="bi-weekly" 
                                    checked={selectedFrequency === 'bi-weekly'}
                                    onChange={handleFrequencyChange}
                                    className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                                /> 
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Bi-Weekly</span>
                                    <span className="text-xs text-gray-600">Every two weeks</span>
                                </div>
                            </label>

                            {/* Monthly Option */}
                            <label className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                selectedFrequency === 'monthly' 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="radio" 
                                    name="frequency" 
                                    value="monthly" 
                                    checked={selectedFrequency === 'monthly'}
                                    onChange={handleFrequencyChange}
                                    className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                                /> 
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Monthly</span>
                                    <span className="text-xs text-gray-600">Once per month</span>
                                </div>
                            </label>

                            {/* Custom Option */}
                            <label className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                selectedFrequency === 'custom' 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="radio" 
                                    name="frequency" 
                                    value="custom" 
                                    checked={selectedFrequency === 'custom'}
                                    onChange={handleFrequencyChange}
                                    className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                                /> 
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Custom</span>
                                    <span className="text-xs text-gray-600">Specify below</span>
                                </div>
                            </label>

                        </div>

                        {/* Custom Frequency Input - Show only when "Custom" is selected */}
                        {selectedFrequency === 'custom' && (
                            <div className="mt-4">
                                <label className="text-base font-semibold text-gray-700 mb-2 block">
                                    Specify Custom Frequency
                                </label>
                                <input
                                    className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                    type="text"
                                    name="customFrequency"
                                    placeholder="e.g., Twice a week, Every 3 days, etc."
                                />
                                <span className="text-xs text-gray-500 mt-1 block">Describe your preferred cleaning schedule</span>
                            </div>
                        )}
                    </div>



                    {/* 3.5 ----------------------- Additional Requirements Part -----------------------*/}

                    <div className="mb-6 border-l-4 border-amber-600 pl-4 mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Additional Requirements</h2>
                        <p className="text-sm text-gray-600">Select any additional services you need</p>
                    </div>

                    <div className="w-full mb-6">
                        <label className="text-base font-semibold text-gray-700 mb-3 block">
                            Select Services <span className="text-red-500">*</span>
                        </label>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            
                            {/* Floor Cleaning */}
                            <label className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                inputs.floorCleaning 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="checkbox" 
                                    name="floorCleaning" 
                                    checked={inputs.floorCleaning} 
                                    onChange={handleCheckboxChange}
                                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 focus:ring-2 mt-0.5"
                                />
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Floor Cleaning & Mopping</span>
                                    <span className="text-xs text-gray-600">Deep floor cleaning service</span>
                                </div>
                            </label>

                            {/* Window Cleaning */}
                            <label className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                inputs.windowCleaning 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="checkbox" 
                                    name="windowCleaning" 
                                    checked={inputs.windowCleaning} 
                                    onChange={handleCheckboxChange}
                                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 focus:ring-2 mt-0.5"
                                />
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Window Cleaning</span>
                                    <span className="text-xs text-gray-600">Interior and exterior windows</span>
                                </div>
                            </label>

                            {/* Sanitization */}
                            <label className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                inputs.sanitization 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="checkbox" 
                                    name="sanitization" 
                                    checked={inputs.sanitization} 
                                    onChange={handleCheckboxChange}
                                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 focus:ring-2 mt-0.5"
                                />
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Sanitization</span>
                                    <span className="text-xs text-gray-600">High-touch surface disinfection</span>
                                </div>
                            </label>

                            {/* Waste Removal */}
                            <label className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                inputs.wasteRemoval 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="checkbox" 
                                    name="wasteRemoval" 
                                    checked={inputs.wasteRemoval} 
                                    onChange={handleCheckboxChange}
                                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 focus:ring-2 mt-0.5"
                                />
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Waste Removal</span>
                                    <span className="text-xs text-gray-600">Trash collection and disposal</span>
                                </div>
                            </label>

                            {/* Carpet Cleaning */}
                            <label className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                inputs.carpetCleaning 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="checkbox" 
                                    name="carpetCleaning" 
                                    checked={inputs.carpetCleaning} 
                                    onChange={handleCheckboxChange}
                                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 focus:ring-2 mt-0.5"
                                />
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Carpet Cleaning</span>
                                    <span className="text-xs text-gray-600">Deep carpet and upholstery</span>
                                </div>
                            </label>

                            {/* Kitchen Cleaning */}
                            <label className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                inputs.kitchenCleaning 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="checkbox" 
                                    name="kitchenCleaning" 
                                    checked={inputs.kitchenCleaning} 
                                    onChange={handleCheckboxChange}
                                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 focus:ring-2 mt-0.5"
                                />
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Kitchen/Cafeteria Cleaning</span>
                                    <span className="text-xs text-gray-600">Food prep areas and appliances</span>
                                </div>
                            </label>

                            {/* Toilet Cleaning */}
                            <label className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                                inputs.toiletCleaning 
                                ? 'border-amber-600 bg-amber-50' 
                                : 'border-gray-300 hover:border-amber-400 bg-white'
                            }`}>
                                <input 
                                    type="checkbox" 
                                    name="toiletCleaning" 
                                    checked={inputs.toiletCleaning} 
                                    onChange={handleCheckboxChange}
                                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 focus:ring-2 mt-0.5"
                                />
                                <div className="ml-3">
                                    <span className="text-base font-semibold text-gray-800 block">Toilet/Bathroom Cleaning</span>
                                    <span className="text-xs text-gray-600">Restroom sanitization</span>
                                </div>
                            </label>
                                
                        </div>

                        <p className="text-xs text-gray-500 mt-4">You can select multiple services as needed</p>

                    </div>


                    {/* 3.6 ----------------------- Preferred Schedule Part -----------------------*/}

                    <div className="mb-6 border-l-4 border-amber-600 pl-4 mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Preferred Schedule</h2>
                        <p className="text-sm text-gray-600">When would you like the cleaning service to take place?</p>
                    </div>

                    {/* Row 1 - Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-6">

                        {/* Preferred Start Date */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Preferred Start Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                                type="date"
                                name="startDate"
                                required
                            />
                            <span className="text-xs text-gray-500 mt-1">Select the date you want service to begin</span>
                        </div>

                        {/* Preferred Time */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Preferred Time <span className="text-gray-400 text-sm font-normal">(Optional)</span>
                            </label>
                            <select
                                name="preferredTime"
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 bg-white focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200 cursor-pointer"
                            >
                                <option value="" selected>Select preferred time</option>
                                <option value="morning">Morning (8:00 - 12:00)</option>
                                <option value="afternoon">Afternoon (12:00 - 17:00)</option>
                                <option value="evening">Evening (17:00 - 20:00)</option>
                                <option value="flexible">Flexible</option>
                            </select>
                            <span className="text-xs text-gray-500 mt-1">Choose your preferred time window</span>
                        </div>
                        
                    </div>

                    {/* Row 2 - Additional Comments */}
                    <div className="w-full mb-6">
                        <div className="flex flex-col">
                            <label className="text-base font-semibold text-gray-700 mb-2">
                                Additional Comments or Special Instructions <span className="text-gray-400 text-sm font-normal">(Optional)</span>
                            </label>
                            <textarea
                                className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200 resize-y min-h-[120px]"
                                name="additionalComments"
                                placeholder="e.g., Access instructions, parking information, specific areas to focus on, etc."
                                rows={4}
                            />
                            <span className="text-xs text-gray-500 mt-1">Let us know any special requirements or instructions</span>
                        </div>
                    </div>








                </div>

                {/** --------------------------------------------------------------------------------------- 
                    4.0 Button Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="w-full max-w-6xl px-4 mb-12">
                    <div className="bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8 shadow-md">
                        
                        {/* Info Section */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Get Your Quote?</h3>
                            <p className="text-gray-600 text-sm">
                                We'll review your request and send you a detailed quote within 24 hours
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-center items-center">
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group relative bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    Submit Quote Request
                                </span>
                            </button>
                            
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 pt-6 border-t border-amber-200">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Free quote</span>
                                </div>
                                <div className="hidden sm:block text-gray-400">•</div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>24-hour response</span>
                                </div>
                                <div className="hidden sm:block text-gray-400">•</div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    <span>No obligation</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Quote;
