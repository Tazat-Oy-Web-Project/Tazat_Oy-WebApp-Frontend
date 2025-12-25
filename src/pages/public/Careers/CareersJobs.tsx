import { useEffect, useState } from "react";
import { jobsList } from "./data/jobs";
import CareersApplicationForm from "./components/CareersApplicationForm";


export default function CareersJobs() {

    const [selectedJobId, setSelectedJobId] = useState(null);



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
      <div>
        <div>
            <h1 className="font-bold">Careers Jobs Page</h1>
            {/* Job listings and related content will go here */}

            <div  className="grid grid-cols-2 gap-4">

                {
                    jobsList.map((element) => (
                        <div className="border-2 mb-3 mt-1" key={element.id}>
                            <img src={element.featuredImageFileId} alt={element.title} className="w-20 h-20"/>
                            <p>{element.title}</p>
                            <p>{element.type}</p>
                            <p>{element.location}</p>
                            <p>{element.description}</p>
                            <a 
                                href="#apply"
                                onClick={() => onApplyRole(element.title, element.id)}>
                                Apply Now
                            </a>

                        </div>
                    ))
                }
            </div>
            
        </div>

        <div>

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
                selectedJobId={selectedJobId}
            />

        </div>

      </div>
  );
}