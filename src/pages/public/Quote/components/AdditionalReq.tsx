import { useState } from "react";


function AdditionalReq({ additionalReqPrinter }: { additionalReqPrinter: (floorCleaning:boolean, windowCleaning:boolean, sanitization:boolean, wasteRemoval:boolean, carpetCleaning:boolean, kitchenCleaning:boolean, toiletCleaning:boolean) => void }){

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

        // Call the printer function with updated values
        additionalReqPrinter(
            name === 'floorCleaning' ? checked : inputs.floorCleaning,
            name === 'windowCleaning' ? checked : inputs.windowCleaning,
            name === 'sanitization' ? checked : inputs.sanitization,
            name === 'wasteRemoval' ? checked : inputs.wasteRemoval,
            name === 'carpetCleaning' ? checked : inputs.carpetCleaning,
            name === 'kitchenCleaning' ? checked : inputs.kitchenCleaning,
            name === 'toiletCleaning' ? checked : inputs.toiletCleaning,
        );
    };


    return(
        <>
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
        
        </>
    )
}

export default AdditionalReq;