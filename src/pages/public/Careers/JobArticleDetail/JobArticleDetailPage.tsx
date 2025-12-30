import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import CareersApplicationForm from "../components/CareersApplicationForm";
import { useLanguage } from "../../../context/LanguageContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function JobArticleDetailPage() {

    console.log("Rendering JobArticleDetailPage");
    
    const { language } = useLanguage();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [job, setJob] = useState<any>(null);

    // ---- Fetch Job from Backend ---- //
    useEffect(() => {
        if (!id) return;

        setLoading(true);
        
        fetch(`${API_BASE_URL}/jobPosts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Job not found');
                }
                return response.json();
            })
            .then(data => {
                setJob(data);
            })
            .catch(error => {
                console.error('Error fetching job:', error);
                setJob(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

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

    useEffect(() => {
        if (job) {
            setForm(prev => ({ ...prev, role: { title: job.jobTitle, id: job.id } }));
        }
    }, [job]);

    const onFullNameChange = (e:any) => setForm(prev => ({ ...prev, fullName: e.target.value }));
    const onEmailChange = (e:any) => setForm(prev => ({ ...prev, email: e.target.value }));
    const onPhoneChange = (e:any) => setForm(prev => ({ ...prev, phone: e.target.value }));
    const onCityChange = (e:any) => setForm(prev => ({ ...prev, city: e.target.value }));
    const onAvailabilityChange = (e:any) => setForm(prev => ({ ...prev, availability: e.target.value }));
    const onMessageChange = (e:any) => setForm(prev => ({ ...prev, message: e.target.value }));
    const onConsentChange = (e:any) => setForm(prev => ({ ...prev, consent: e.target.checked }));

    const onSubmit = (event: any) => {
        event.preventDefault();
        console.log("Application form:", form);
        alert("Thanks! Application submitted (demo).");
    };

    // ---- Always Start at Top ---- //
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [id]);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* =================================================================   TOP BAR */}
            <header className="sticky top-0 z-50 w-full border-b border-orange-200/30 bg-linear-to-r from-white via-orange-50 to-yellow-50 shadow-sm">
                <div className="mx-auto max-w-6xl px-4 py-3">
                    <Link
                        to="/careers/jobs"
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-100 transition-all duration-200"
                    >
                        <FaArrowLeft className="h-4 w-4" />
                        {language === "en" ? "Back to Jobs" : "Takaisin Töihin"}
                    </Link>
                </div>
            </header>

            {/* =================================================================   JOB HEADER */}
            {job && (
                <section className="bg-linear-to-r from-orange-500 to-yellow-500 py-12 px-4">
                    <div className="mx-auto max-w-4xl">
                        {/* Job Title */}
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            {job.jobTitle}
                        </h1>

                        {/* Job Meta Info */}
                        <div className="flex flex-wrap gap-4 text-white/90">
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-orange-100" />
                                <span className="font-medium">{job.jobLocation}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock className="text-orange-100" />
                                <span className="font-medium">{job.jobType?.join(', ')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBriefcase className="text-orange-100" />
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    job.jobStatus === 'open' 
                                        ? 'bg-white/20 border border-white/30' 
                                        : 'bg-red-500/30 border border-red-300'
                                }`}>
                                    {job.jobStatus === 'open' 
                                        ? (language === "en" ? "Open" : "Avoinna")
                                        : (language === "en" ? "Closed" : "Suljettu")}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* =================================================================   JOB CONTENT */}
            <main className="mx-auto max-w-4xl px-4 py-8">
                {loading ? (
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
                        <p className="text-slate-500">{language === "en" ? "Loading job details..." : "Ladataan työn tietoja..."}</p>
                    </div>
                ) : job ? (
                    <>
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                            {/* Job Image */}
                            {job.jobPostImageURL && (
                                <div className="relative h-64 overflow-hidden bg-linear-to-br from-orange-50 to-yellow-50">
                                    <img
                                        src={job.jobPostImageURL}
                                        alt={job.jobTitle}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
                                </div>
                            )}

                            {/* Job Details */}
                            <div className="p-8">
                                <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                                    <MdWork className="text-orange-600" />
                                    {language === "en" ? "Job Description" : "Työn Kuvaus"}
                                </h2>
                                
                                <ul className="space-y-3">
                                    {job.jobDescription?.map((desc: string, idx: number) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <span className="mr-3 text-orange-600 font-bold mt-1">•</span>
                                            <span className="text-base leading-relaxed">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* =============   APPLY NOW SECTION ============= */}
                        <section id="apply" className="scroll-mt-20">
                            <div className="mb-6">
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                                    {language === "en" ? "Apply for this Position" : "Hae Tähän Tehtävään"}
                                </h2>
                                <p className="text-slate-600">
                                    {language === "en" 
                                        ? "Fill out the form below to submit your application"
                                        : "Täytä alla oleva lomake lähettääksesi hakemuksesi"}
                                </p>
                            </div>

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
                        </section>
                    </>
                ) : (
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">
                            {language === "en" ? "Job Not Found" : "Työtä Ei Löydy"}
                        </h1>
                        <p className="text-slate-600 mb-6">
                            {language === "en" ? "The job you're looking for doesn't exist." : "Etsimääsi työtä ei ole olemassa."}
                        </p>
                        <Link
                            to="/careers/jobs"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            <FaArrowLeft />
                            {language === "en" ? "Back to All Jobs" : "Takaisin Kaikkiin Töihin"}
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}

export default JobArticleDetailPage;
