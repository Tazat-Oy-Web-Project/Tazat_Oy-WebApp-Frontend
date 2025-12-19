import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";



function CleaningFrequency({ cleaningFrequencyPrinter }: { cleaningFrequencyPrinter: (frequency:string, customFrequency:string) => void }){
    const { language } = useLanguage();


    // ---- Cleaning Frequency (Radio Button) State Management ---- //

    const [selectedFrequency, setSelectedFrequency] = useState('')
    const [customFrequency, setCustomFrequency] = useState("");

    const handleFrequencyChange = ()=>{
        cleaningFrequencyPrinter(selectedFrequency, customFrequency);
    }



    return(
        <>
            <div className="mb-6 border-l-4 border-amber-600 pl-4 mt-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">{language === "en" ? "Cleaning Frequency" : "Siivouksen Tiheys"}</h2>
                <p className="text-sm text-gray-600">{language === "en" ? "How often do you need cleaning services?" : "Kuinka usein tarvitset siivouspalveluita?"}</p>
            </div>

            <div className="w-full mb-6">
                <label className="text-base font-semibold text-gray-700 mb-3 block">
                    {language === "en" ? "Select Frequency" : "Valitse Tiheys"} <span className="text-red-500">*</span>
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
                            className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                            required
                        /> 
                        <div className="ml-3">
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "One-time" : "Kertaluontoinen"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Single cleaning service" : "Yksittäinen siivouspalvelu"}</span>
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
                            className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                        /> 
                        <div className="ml-3">
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Daily" : "Päivittäin"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Every business day" : "Joka arkipäivä"}</span>
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
                            className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                        /> 
                        <div className="ml-3">
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Weekly" : "Viikoittain"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Once per week" : "Kerran viikossa"}</span>
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
                            className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                        /> 
                        <div className="ml-3">
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Bi-Weekly" : "Joka toinen viikko"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Every two weeks" : "Kahden viikon välein"}</span>
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
                            className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                        /> 
                        <div className="ml-3">
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Monthly" : "Kuukausittain"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Once per month" : "Kerran kuukaudessa"}</span>
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
                            className="w-5 h-5 text-amber-600 focus:ring-amber-500 focus:ring-2"
                        /> 
                        <div className="ml-3">
                            <span className="text-base font-semibold text-gray-800 block">{language === "en" ? "Custom" : "Mukautettu"}</span>
                            <span className="text-xs text-gray-600">{language === "en" ? "Specify below" : "Tarkenna alla"}</span>
                        </div>
                    </label>

                </div>

                {/* Custom Frequency Input - Show only when "Custom" is selected */}
                {selectedFrequency === 'custom' && (
                    <div className="mt-4">
                        <label className="text-base font-semibold text-gray-700 mb-2 block">
                            {language === "en" ? "Specify Custom Frequency" : "Tarkenna Mukautettu Tiheys"}
                        </label>
                        <input
                            className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200"
                            type="text"
                            name="customFrequency"
                            value={customFrequency}
                            onChange={(event) => {
                                setCustomFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
                            placeholder={language === "en" ? "e.g., Twice a week, Every 3 days, etc." : "esim. Kahdesti viikossa, Joka 3. päivä, jne."}
                        />
                        <span className="text-xs text-gray-500 mt-1 block">{language === "en" ? "Describe your preferred cleaning schedule" : "Kuvaile toivomasi siivousaikataulu"}</span>
                    </div>
                )}
            </div>
        
        </>
    )
}

export default CleaningFrequency;