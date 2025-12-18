import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import CareersHero from "./components/CareersHero";
import CareersWhyWorkWithUs from "./components/CareersWhyWorkWithUs";
import CareersOpenRoles from "./components/CareersOpenRoles";
import CareersApplicationForm from "./components/CareersApplicationForm";


function Careers() {


  // ---- Form State Management ---- //
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    role: "Cleaner",
    availability: "",
    message: "",
    consent: false,
  });


  // ---- Handle Form Input Changes ---- //
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };


  // ---- Handle Form Submission ---- //
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // UI only: connect to backend/email service later
    console.log("Application form:", form);
    alert("Thanks! Application submitted (demo).");
  };


  return (
    <div className="min-h-screen bg-slate-50">
      {/** --------------------------------------------------------------------------------------- 
          1.0 Navbar Component 
      --------------------------------------------------------------------------------------- **/}
      <NavbarComponent />

      {/** --------------------------------------------------------------------------------------- 
          2.0 Hero Section 
      --------------------------------------------------------------------------------------- **/}
      <CareersHero />

      {/** --------------------------------------------------------------------------------------- 
          3.0 Main Content Area 
      --------------------------------------------------------------------------------------- **/}
      <main className="mx-auto max-w-6xl px-4 py-12">
        {/** --------------------------------------------------------------------------------------- 
            3.1 Why Work With Us Section 
        --------------------------------------------------------------------------------------- **/}
        <CareersWhyWorkWithUs />

        {/** --------------------------------------------------------------------------------------- 
            3.2 Open Roles Section 
        --------------------------------------------------------------------------------------- **/}
        <CareersOpenRoles />

        {/** --------------------------------------------------------------------------------------- 
            3.3 Application Form Section 
        --------------------------------------------------------------------------------------- **/}
        <CareersApplicationForm 
          form={form} 
          onChange={onChange} 
          onSubmit={onSubmit} 
        />
      </main>

      {/** --------------------------------------------------------------------------------------- 
          4.0 Footer Component 
      --------------------------------------------------------------------------------------- **/}
      <FooterComponent />
    </div>
  );
}

export default Careers;
