import { useState } from "react";


function ServiceTypes({ serviceTypesPrinter }: { serviceTypesPrinter: (serviceType:string, otherService:string) => void }){

    // ---- Service Types State Management ---- //

    const [serviceType, setServiceType] = useState("");
    const [otherService, setOtherService] = useState("");

    const handleFormChange = ()=>{
        serviceTypesPrinter(serviceType, otherService);
    };


    return(
        <>
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
                        value={serviceType}
                        required
                        onChange={(e) => {
                            setServiceType(e.target.value); 
                            handleFormChange();
                        }}
                        className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 bg-white focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200 cursor-pointer"
                    >
                        <option value="" disabled>Select a service type</option>
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
            {serviceType === 'other' && (
                <div className="w-full mb-6">
                    <div className="flex flex-col">
                        <label className="text-base font-semibold text-gray-700 mb-2">
                            Specify Other Service <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                            type="text"
                            name="otherService"
                            value={otherService}
                            onChange={(e) => setOtherService(e.target.value)}
                            onBlur={handleFormChange}
                            placeholder="Please describe the service you need"
                            required
                        />
                        <span className="text-xs text-gray-500 mt-1">Please specify what type of cleaning service you need</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default ServiceTypes;