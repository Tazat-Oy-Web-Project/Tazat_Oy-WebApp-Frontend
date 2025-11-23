import { useState } from "react";


function PropertyDetails({ propertyDetailsPrinter }: { propertyDetailsPrinter: (spaceType:string, approximateSize:string, numberOfRooms:string, numberOfFloors:string, propertyAddress:string) => void }){

    // ---- Property Details State Management ---- //
    const [spaceType, setSpaceType] = useState("");
    const [approximateSize, setApproximateSize] = useState("");
    const [numberOfRooms, setNumberOfRooms] = useState("");
    const [numberOfFloors, setNumberOfFloors] = useState("");
    const [propertyAddress, setPropertyAddress] = useState("");

    const handleFormChange = () => {
        propertyDetailsPrinter(spaceType, approximateSize, numberOfRooms, numberOfFloors, propertyAddress);

        console.log("Type of Space:", spaceType , "Approximate Size:", approximateSize, "Number of Rooms/Areas:", numberOfRooms, "Number of Floors:", numberOfFloors, "Property Address/Location:", propertyAddress);
    };



    return(
        <>
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
                        value={spaceType}
                        required
                        onChange={(e) =>{
                            setSpaceType(e.target.value);
                            handleFormChange();
                        }}
                        className="border-2 border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 bg-white focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition duration-200 cursor-pointer"
                    >
                        <option value="" disabled>Select type of space</option>
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
                            value={approximateSize}
                            onChange={(e) => {
                                setApproximateSize(e.target.value);
                            }}
                            onBlur={handleFormChange}
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
                        value={numberOfRooms}
                        onChange={(e) => {
                            setNumberOfRooms(e.target.value);
                        }}
                        onBlur={handleFormChange}
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
                        value={numberOfFloors}
                        onChange={(e) => {
                            setNumberOfFloors(e.target.value);
                        }}
                        onBlur={handleFormChange}
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
                        value={propertyAddress}
                        onChange={(e) => {
                            setPropertyAddress(e.target.value);
                        }}
                        onBlur={handleFormChange}
                        placeholder="Enter full address or city (e.g., Tekniikantie 12, 02150 Espoo)"
                        required
                    />
                    <span className="text-xs text-gray-500 mt-1">Provide the complete address or at least the city</span>
                </div>
                
            </div>
        </>
    )
}

export default PropertyDetails;