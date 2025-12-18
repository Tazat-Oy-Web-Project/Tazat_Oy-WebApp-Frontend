import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactInfoCards from "./components/ContactInfoCards";
import ContactMap from "./components/ContactMap";
import ContactSocialMedia from "./components/ContactSocialMedia";

function Contact(){

    // ---- Form State Management ---- //
    const [form, setForm] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    // ---- Handle Form Input Changes ---- //
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // ---- Handle Form Submission ---- //
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Contact form:", form);
        alert("Thank you! Your message has been sent (demo).");
    };

    return(
        <div>
            {/* Navbar component */}
            <NavbarComponent />

            <div className="flex flex-col justify-start items-center min-h-screen bg-linear-to-b from-gray-50 via-amber-50 to-orange-50 w-full">

                {/** --------------------------------------------------------------------------------------- 
                    1.0 Header Part 
                --------------------------------------------------------------------------------------- **/} 
                <ContactHero />



                {/** --------------------------------------------------------------------------------------- 
                    2.0 Data Part 
                --------------------------------------------------------------------------------------- **/}
                <div className="grid grid-cols-1 xl:grid-cols-10 gap-5 w-full px-4 md:px-8">
                    
                    {/* 2.1 ----------------------- Left Column - Form Part (70%) -----------------------*/}
                    <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} />

                    {/* 2.2 ----------------------- Right Column - Info Part (30%) -----------------------*/}
                    <div className="flex flex-col xl:col-span-3 gap-6">
                        
                         {/* 2.2.1 ----------------------- Info Display - 3 Cards */}
                        <ContactInfoCards />

                        {/* 2.2.2 ----------------------- Map Display */}
                        <ContactMap />
                        
                        {/* 2.2.3 ----------------------- Social Media Links Display */}
                        <ContactSocialMedia />

                    </div>    
                    
                </div>


                
                
            </div>

        </div>
    )
}

export default Contact;
