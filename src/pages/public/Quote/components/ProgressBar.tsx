
function ProgressBar(){
    return(
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
    )
}

export default ProgressBar;