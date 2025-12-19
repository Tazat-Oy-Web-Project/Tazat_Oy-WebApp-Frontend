import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";


function PropertyDetails({ propertyDetailsPrinter }: { propertyDetailsPrinter: (spaceType:string, approximateSize:string, numberOfRooms:string, numberOfFloors:string, propertyAddress:string) => void }){
    const { language } = useLanguage();

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
                <h2 className="text-3xl font-bold text-gray-800 mb-1">{language === "en" ? "Property Details" : "Kohteen Tiedot"}</h2>
                <p className="text-sm text-gray-600">{language === "en" ? "Tell us about the space that needs cleaning" : "Kerro meille siivottavasta tilasta"}</p>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-6">

                {/* Type of Space Field */}
                <div className="flex flex-col">
                    <label className="text-base font-semibold text-gray-700 mb-2">
                        {language === "en" ? "Type of Space" : "Tilan Tyyppi"} <span className="text-red-500">*</span>
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
                        <option value="" disabled>{language === "en" ? "Select type of space" : "Valitse tilan tyyppi"}</option>
                        <option value="office">{language === "en" ? "Office" : "Toimisto"}</option>
                        <option value="warehouse">{language === "en" ? "Warehouse" : "Varasto"}</option>
                        <option value="retail">{language === "en" ? "Shop/Retail Store" : "Kauppa/Myymälä"}</option>
                        <option value="medical">{language === "en" ? "Medical Center/Clinic" : "Terveyskeskus/Klinikka"}</option>
                        <option value="educational">{language === "en" ? "Educational Building" : "Koulurakennus"}</option>
                        <option value="restaurant">{language === "en" ? "Restaurant/Café" : "Ravintola/Kahvila"}</option>
                        <option value="residential">{language === "en" ? "Apartment/House" : "Asunto/Talo"}</option>
                        <option value="industrial">{language === "en" ? "Industrial Facility" : "Teollisuustila"}</option>
                    </select>
                    <span className="text-xs text-gray-500 mt-1">{language === "en" ? "Choose the type that best describes your property" : "Valitse tyyppi joka parhaiten kuvaa kohdettasi"}</span>
                </div>

                {/* Approximate Size Input Field */}
                <div className="flex flex-col">
                    <label className="text-base font-semibold text-gray-700 mb-2">
                        {language === "en" ? "Approximate Size" : "Arvioitu Koko"} <span className="text-red-500">*</span>
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
                            placeholder={language === "en" ? "e.g., 150" : "esim. 150"}
                            required
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">m²</span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{language === "en" ? "Enter the total area in square meters" : "Syötä kokonaispinta-ala neliömetreinä"}</span>
                </div>                    
                
            </div>


            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-6">

                {/* Number of Rooms/Areas Field */}
                <div className="flex flex-col">
                    <label className="text-base font-semibold text-gray-700 mb-2">
                        {language === "en" ? "Number of Rooms/Areas" : "Huoneiden/Tilojen Määrä"} <span className="text-gray-400 text-sm font-normal">({language === "en" ? "Optional" : "Valinnainen"})</span>
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
                        placeholder={language === "en" ? "e.g., 8" : "esim. 8"}
                    />
                    <span className="text-xs text-gray-500 mt-1">{language === "en" ? "How many rooms or separate areas need cleaning" : "Kuinka monta huonetta tai tilaa tarvitsee siivousta"}</span>
                </div>

                {/* Number of Floors Field */}
                <div className="flex flex-col">
                    <label className="text-base font-semibold text-gray-700 mb-2">
                        {language === "en" ? "Number of Floors" : "Kerrosten Määrä"} <span className="text-gray-400 text-sm font-normal">({language === "en" ? "Optional" : "Valinnainen"})</span>
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
                        placeholder={language === "en" ? "e.g., 2" : "esim. 2"}
                    />
                    <span className="text-xs text-gray-500 mt-1">{language === "en" ? "How many floors in the building" : "Kuinka monta kerrosta rakennuksessa"}</span>
                </div>
                
            </div>

            {/* Row 3 */}
            <div className="w-full mb-6">

                {/* Address or City Field */}
                <div className="flex flex-col">
                    <label className="text-base font-semibold text-gray-700 mb-2">
                        {language === "en" ? "Property Address/Location" : "Kohteen Osoite/Sijainti"} <span className="text-red-500">*</span>
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
                        placeholder={language === "en" ? "Enter full address or city (e.g., Tekniikantie 12, 02150 Espoo)" : "Syötä osoite tai kaupunki (esim. Tekniikantie 12, 02150 Espoo)"}
                        required
                    />
                    <span className="text-xs text-gray-500 mt-1">{language === "en" ? "Provide the complete address or at least the city" : "Anna täydellinen osoite tai vähintään kaupunki"}</span>
                </div>
                
            </div>
        </>
    )
}

export default PropertyDetails;