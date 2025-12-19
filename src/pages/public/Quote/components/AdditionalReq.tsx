import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";


function AdditionalReq({ additionalReqPrinter }: { additionalReqPrinter: (floorCleaning:boolean, windowCleaning:boolean, sanitization:boolean, wasteRemoval:boolean, carpetCleaning:boolean, kitchenCleaning:boolean, toiletCleaning:boolean) => void }){
    const { language } = useLanguage();

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
                <h2 className="text-3xl font-bold text-gray-800 mb-1">{language === "en" ? "Additional Requirements" : "Lisävaatimukset"}</h2>
                <p className="text-sm text-gray-600">{language === "en" ? "Select any additional services you need" : "Valitse tarvitsemasi lisäpalvelut"}</p>
            </div>

            <div className="w-full mb-6">
                <label className="text-base font-semibold text-gray-700 mb-3 block">
                    {language === "en" ? "Select Services" : "Valitse Palvelut"} <span className="text-red-500">*</span>
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
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Floor Cleaning & Mopping" : "Lattioiden Puhdistus"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Deep floor cleaning service" : "Syväpuhdistuspalvelu lattioille"}</span>
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
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Window Cleaning" : "Ikkunoiden Pesu"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Interior and exterior windows" : "Sisä- ja ulkoikkunat"}</span>
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
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Sanitization" : "Desinfiointi"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "High-touch surface disinfection" : "Kosketuspintojen desinfiointi"}</span>
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
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Waste Removal" : "Jätteiden Poisto"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Trash collection and disposal" : "Roskien keräys ja hävitys"}</span>
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
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Carpet Cleaning" : "Mattojen Puhdistus"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Deep carpet and upholstery" : "Mattojen ja verhoilun syväpuhdistus"}</span>
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
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Kitchen/Cafeteria Cleaning" : "Keittiö/Ruokala Siivous"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Food prep areas and appliances" : "Ruoanvalmistustilat ja laitteet"}</span>
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
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Toilet/Bathroom Cleaning" : "WC/Kylpyhuone Siivous"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Restroom sanitization" : "Saniteettitilojen desinfiointi"}</span>
                        </div>
                    </label>
                        
                </div>

                <p className="text-xs text-gray-500 mt-4">{language === "en" ? "You can select multiple services as needed" : "Voit valita useita palveluita tarpeen mukaan"}</p>

            </div>
        
        </>
    )
}

export default AdditionalReq;