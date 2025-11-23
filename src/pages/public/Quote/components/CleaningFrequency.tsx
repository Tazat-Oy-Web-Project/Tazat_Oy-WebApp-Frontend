import { useState } from "react";



function CleaningFrequency({ cleaningFrequencyPrinter }: { cleaningFrequencyPrinter: (frequency:string, customFrequency:string) => void }){


    // ---- Cleaning Frequency (Radio Button) State Management ---- //

    const [selectedFrequency, setSelectedFrequency] = useState('')
    const [customFrequency, setCustomFrequency] = useState("");

    const handleFrequencyChange = ()=>{
        cleaningFrequencyPrinter(selectedFrequency, customFrequency);
    }



    return(
        <>
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
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
                            onChange={(event) => {
                                setSelectedFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
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
                            value={customFrequency}
                            onChange={(event) => {
                                setCustomFrequency(event.target.value);
                                handleFrequencyChange();
                            }}
                            placeholder="e.g., Twice a week, Every 3 days, etc."
                        />
                        <span className="text-xs text-gray-500 mt-1 block">Describe your preferred cleaning schedule</span>
                    </div>
                )}
            </div>
        
        </>
    )
}

export default CleaningFrequency;