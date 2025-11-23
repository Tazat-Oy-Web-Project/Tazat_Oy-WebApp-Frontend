import { useState } from "react";


function ContactInfo({ contactInfoPrinter }: { contactInfoPrinter: (name:string, company:string, email:string, phone:string) => void }){
    
    // ---- Contact Information State Management ---- //

    const [fullName, setFullName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    
    // This function fires when an input field loses focus.
    const handleBlur = () => {
        contactInfoPrinter(fullName, companyName, email, phone);
    };

    return(
        <>
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
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        onBlur={handleBlur}
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
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        onBlur={handleBlur}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleBlur}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={handleBlur}
                        placeholder="+358 40 123 4567"
                        required
                    />
                    <span className="text-xs text-gray-500 mt-1">Include country code if outside Finland</span>
                </div>                    
                
            </div>
        </>
    )
}

export default ContactInfo;