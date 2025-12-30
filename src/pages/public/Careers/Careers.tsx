import { useState, useEffect } from "react";
import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import CareersHero from "./components/CareersHero";
import CareersWhyWorkWithUs from "./components/CareersWhyWorkWithUs";
import CareersOpenRoles from "./components/CareersOpenRoles";
import CareersApplicationForm from "./components/CareersApplicationForm";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Careers() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  // ---- Fetch Jobs from Backend ---- //
  useEffect(() => {

    try {

      setLoading(true);
      
      fetch(`${API_BASE_URL}/jobPosts`)

        .then(response => response.json())

        .then(response => {

          console.log("Fetched Jobs for Public:", response);
          setJobs(response);
          
        })
        .catch(error => {
          console.error('Error fetching jobs:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  }, []);


  // ---- Form State Management ---- //
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    role: { title: "", id: "" },
    availability: "",
    message: "",
    consent: false,
  });

  const onFullNameChange = (e:any) => setForm(prev => ({ ...prev, fullName: e.target.value }));
  const onEmailChange = (e:any) => setForm(prev => ({ ...prev, email: e.target.value }));
  const onPhoneChange = (e:any) => setForm(prev => ({ ...prev, phone: e.target.value }));
  const onCityChange = (e:any) => setForm(prev => ({ ...prev, city: e.target.value }));
  const onAvailabilityChange = (e:any) => setForm(prev => ({ ...prev, availability: e.target.value }));
  const onMessageChange = (e:any) => setForm(prev => ({ ...prev, message: e.target.value }));
  const onConsentChange = (e:any) => setForm(prev => ({ ...prev, consent: e.target.checked }));


  // ---- Handle Form Submission ---- //
  const onSubmit = (event: any) => {
    event.preventDefault();
    // UI only: connect to backend/email service later
    console.log("Application form:", form);
    alert("Thanks! Application submitted (demo).");
  };

  const onApplyRole = (jobTitle: any, jobId: any) => {
    setForm((prev) => ({ ...prev, role: { title: jobTitle, id: jobId } }));
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
        <CareersOpenRoles
          jobs={jobs}
          loading={loading}
          onApplyRole={onApplyRole}
        />

        {/** --------------------------------------------------------------------------------------- 
            3.3 Application Form Section 
        --------------------------------------------------------------------------------------- **/}
        <CareersApplicationForm 
          formObject={form} 
          onFullNameChange={onFullNameChange}
          onEmailChange={onEmailChange}
          onPhoneChange={onPhoneChange}
          onCityChange={onCityChange}
          onAvailabilityChange={onAvailabilityChange}
          onMessageChange={onMessageChange}
          onConsentChange={onConsentChange}
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
