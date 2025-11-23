import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import ProgressBar from "./components/ProgressBar";
import HeaderPart from "./components/HeaderPart";
import ContactInfo from "./components/ContactInfo";
import ServiceTypes from "./components/ServiceTypes";
import PropertyDetails from "./components/PropertyDetails";
import CleaningFrequency from "./components/CleaningFrequency";
import AdditionalReq from "./components/AdditionalReq";
import PreferredSchedule from "./components/PreferredSchedule";
import FinalSubmitButton from "./components/FinalSubmitButton";
import SubmissionModal from "./components/SubmissionModal";


function Quote(){

    // ---- Modal State ---- //
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ---- Contact Information State Printing ---- //

    // This function receives data from ContactInfo component and logs it to the console for now
    // But this fires every time an input field loses focus. Later we need to optimise this to send data to backend when the entire form is submitted
    const contactInfoPrinter = (name:string, company:string, email:string, phone:string) => {
        console.log("Full Name: ", name);
        console.log("Company Name: ", company);
        console.log("Email Address: ", email);
        console.log("Phone Number: ", phone);
    }


    // ---- Service Types State Printing ---- //

    const serviceTypesPrinter = (serviceType:string, otherService:string) => {
        console.log("Service Type: ", serviceType);
        console.log("Other Service Description: ", otherService);
    }


    // ---- Property Details State Printing ---- //

    const propertyDetailsPrinter = (spaceType:string, approximateSize:string, numberOfRooms:string, numberOfFloors:string, propertyAddress:string) => {
        console.log("Type of Space: ", spaceType);
        console.log("Approximate Size: ", approximateSize);
        console.log("Number of Rooms/Areas: ", numberOfRooms);
        console.log("Number of Floors: ", numberOfFloors);
        console.log("Property Address/Location: ", propertyAddress);
    }


    // ---- Cleaning Frequency State Printing ---- //
    const cleaningFrequencyPrinter = (frequency:string, customFrequency:string) => {
        console.log("Cleaning Frequency: ", frequency);
        console.log("Custom Frequency: ", customFrequency);
    }


    // ---- Additional Requirements State Printing ---- //
    const additionalReqPrinter = (floorCleaning:boolean, windowCleaning:boolean, sanitization:boolean, wasteRemoval:boolean, carpetCleaning:boolean, kitchenCleaning:boolean, toiletCleaning:boolean) => {
        console.log("Floor Cleaning: ", floorCleaning);
        console.log("Window Cleaning: ", windowCleaning);
        console.log("Sanitization: ", sanitization);
        console.log("Waste Removal: ", wasteRemoval);
        console.log("Carpet Cleaning: ", carpetCleaning);
        console.log("Kitchen Cleaning: ", kitchenCleaning);
        console.log("Toilet Cleaning: ", toiletCleaning);
    }


    // ---- Preferred Schedule State Printing ---- //
    const preferredSchedulePrinter = (preferredDate:string, preferredTime:string, additionalComments:string) => {
        console.log("Preferred Start Date: ", preferredDate);
        console.log("Preferred Time: ", preferredTime);
        console.log("Additional Comments: ", additionalComments);
    }





    return(
        <div>
            {/* Navbar component */}
            <NavbarComponent />
            
            
            
            <div className="flex flex-col justify-start items-center min-h-screen bg-linear-to-b from-gray-50 via-amber-50 to-orange-50 w-full">

                {/** --------------------------------------------------------------------------------------- 
                    1.0 Header Part 
                --------------------------------------------------------------------------------------- **/}
                
                <HeaderPart />

                {/** --------------------------------------------------------------------------------------- 
                    2.0 Progress Bar Part 
                --------------------------------------------------------------------------------------- **/}
                                    
                <ProgressBar />              




                {/** --------------------------------------------------------------------------------------- 
                    3.0 Data Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="flex flex-col justify-center items-start mt-8 mb-8 w-full max-w-6xl bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200">
                    

                    {/* 3.1 ----------------------- Contact Information Part -----------------------*/}

                    <ContactInfo contactInfoPrinter={contactInfoPrinter} />


                    {/* 3.2 ----------------------- Service Type Part -----------------------*/}

                    <ServiceTypes serviceTypesPrinter={serviceTypesPrinter} />



                    {/* 3.3 ----------------------- Property Details Part -----------------------*/}

                    <PropertyDetails propertyDetailsPrinter={propertyDetailsPrinter} />



                    {/* 3.4 ----------------------- Cleaning Frequency Part -----------------------*/}

                    <CleaningFrequency cleaningFrequencyPrinter={cleaningFrequencyPrinter} />



                    {/* 3.5 ----------------------- Additional Requirements Part -----------------------*/}

                    <AdditionalReq additionalReqPrinter={additionalReqPrinter} />


                    {/* 3.6 ----------------------- Preferred Schedule Part -----------------------*/}

                    <PreferredSchedule preferredSchedulePrinter={preferredSchedulePrinter} />

                </div>



                {/** --------------------------------------------------------------------------------------- 
                    4.0 FinalSubmitButton Part 
                --------------------------------------------------------------------------------------- **/}
                
                <FinalSubmitButton onSubmit={() => setIsModalOpen(true)} />



            </div>

            {/* Submission Modal */}
            <SubmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Quote;
