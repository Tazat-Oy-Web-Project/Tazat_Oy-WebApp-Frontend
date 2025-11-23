import { useState } from "react"


function PreferredSchedule({ preferredSchedulePrinter }: { preferredSchedulePrinter: (preferredDate:string, preferredTime:string, additionalComments:string) => void }){

    // ---- Preferred Schedule State Management ---- //
    const [preferredDate, setPreferredDate] = useState("");
    const [preferredTime, setPreferredTime] = useState("");
    const [additionalComments, setAdditionalComments] = useState("");

    const handleFormChange = () => {
        preferredSchedulePrinter(preferredDate, preferredTime, additionalComments);
    };



    return(
        <>
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
                        value={preferredDate}
                        onChange={(e) => {
                            setPreferredDate(e.target.value);
                            handleFormChange();
                        }}
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
                        value={preferredTime}
                        onChange={(e) => {
                            setPreferredTime(e.target.value);
                            handleFormChange();
                        }}
                        className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 bg-white focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200 cursor-pointer"
                    >
                        <option value="">Select preferred time</option>
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
                        value={additionalComments}
                        onChange={(e) => {
                            setAdditionalComments(e.target.value);
                            handleFormChange();
                        }}
                        placeholder="e.g., Access instructions, parking information, specific areas to focus on, etc."
                        rows={4}
                    />
                    <span className="text-xs text-gray-500 mt-1">Let us know any special requirements or instructions</span>
                </div>
            </div>
        </>
    )
}

export default PreferredSchedule;