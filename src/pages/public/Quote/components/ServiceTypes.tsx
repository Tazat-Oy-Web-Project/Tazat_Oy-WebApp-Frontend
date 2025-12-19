import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";


function ServiceTypes({ serviceTypesPrinter }: { serviceTypesPrinter: (serviceType:string, otherService:string) => void }){
    const { language } = useLanguage();

    // ---- Service Types State Management ---- //

    const [serviceType, setServiceType] = useState("");
    const [otherService, setOtherService] = useState("");

    const handleFormChange = ()=>{
        serviceTypesPrinter(serviceType, otherService);
    };


    return(
        <>
            <div className="mb-6 border-l-4 border-amber-600 pl-4 mt-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">{language === "en" ? "Service Selection" : "Palvelun Valinta"}</h2>
                <p className="text-sm text-gray-600">{language === "en" ? "Choose the type of cleaning service you need" : "Valitse tarvitsemasi siivouspalvelun tyyppi"}</p>
            </div>
            
            {/* Service Type Selection */}
            <div className="w-full mb-6">
                <div className="flex flex-col">
                    <label className="text-base font-semibold text-gray-700 mb-2">
                        {language === "en" ? "Service Type" : "Palvelutyyppi"} <span className="text-red-500">*</span>
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
                        <option value="" disabled>{language === "en" ? "Select a service type" : "Valitse palvelutyyppi"}</option>
                        <option value="office">{language === "en" ? "Office Cleaning" : "Toimistosiivous"}</option>
                        <option value="commercial">{language === "en" ? "Commercial Building Cleaning" : "Liiketilojen Siivous"}</option>
                        <option value="industrial">{language === "en" ? "Industrial Cleaning" : "Teollisuussiivous"}</option>
                        <option value="hospital">{language === "en" ? "Hospital/Medical Facility Cleaning" : "Sairaala/Terveydenhuollon Siivous"}</option>
                        <option value="retail">{language === "en" ? "Retail/Supermarket Cleaning" : "Kauppa/Marketin Siivous"}</option>
                        <option value="residential">{language === "en" ? "Residential Cleaning" : "Kotisiivous"}</option>
                        <option value="deep">{language === "en" ? "Deep Cleaning/Sanitation" : "Syväpuhdistus/Desinfiointi"}</option>
                        <option value="construction">{language === "en" ? "Post-Construction Cleaning" : "Rakennussiiivous"}</option>
                        <option value="other">{language === "en" ? "Other (Please specify below)" : "Muu (Tarkenna alla)"}</option>
                    </select>
                    <span className="text-xs text-gray-500 mt-1">{language === "en" ? "Select the service that best matches your needs" : "Valitse parhaiten tarpeisiisi sopiva palvelu"}</span>
                </div>
            </div>

            {/* Other Service Specification - Show only when "Other" is selected */}
            {serviceType === 'other' && (
                <div className="w-full mb-6">
                    <div className="flex flex-col">
                        <label className="text-base font-semibold text-gray-700 mb-2">
                            {language === "en" ? "Specify Other Service" : "Tarkenna Muu Palvelu"} <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                            type="text"
                            name="otherService"
                            value={otherService}
                            onChange={(e) => setOtherService(e.target.value)}
                            onBlur={handleFormChange}
                            placeholder={language === "en" ? "Please describe the service you need" : "Kuvaile tarvitsemasi palvelu"}
                            required
                        />
                        <span className="text-xs text-gray-500 mt-1">{language === "en" ? "Please specify what type of cleaning service you need" : "Tarkenna millaista siivouspalvelua tarvitset"}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default ServiceTypes;