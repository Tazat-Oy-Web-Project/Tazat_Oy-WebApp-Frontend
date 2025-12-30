import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import CareersApplicationForm from "./components/CareersApplicationForm";
import { useLanguage } from "../../context/LanguageContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export default function CareersJobs() {

    const { language } = useLanguage();

    const [loading, setLoading] = useState(true);   // This is to manage loading state
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 12; // 2 rows of 6 jobs on large screens


    // 1) ============================ Fetch Jobs from Backend ============================ //
    useEffect(() => {

        try {

            setLoading(true);   // Set loading to true before fetch
            
            fetch(`${API_BASE_URL}/jobPosts`)

                .then(response => response.json())

                .then(response => {

                    console.log("Fetched Jobs for Careers Jobs Page:", response);
                    setJobs(response);
                })

                .catch(error => {
                    console.error('Error fetching jobs:', error);
                })

                .finally(() => {
                    setLoading(false);  // Set loading to false after fetch is done
                });

        } 
        
        catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }, []);



    // 2) ============================ Application Form Data State Management ============================ //
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

    
    // 3) ============================ Handle Form Submission ============================ //
    const onSubmit = (event: any) => {

        event.preventDefault();
        // UI only: connect to backend/email service later
        console.log("Application form:", form);
        alert("Thanks! Application submitted (demo).");

    };

    
    // 4) ============================ Handle "Apply Now" Role Selection on every job card ============================ //
    const onApplyRole = (jobTitle: any, jobId: any) => {
        
        setForm((prev) => ({ ...prev, role: { title: jobTitle, id: jobId } }));
        
        // Scroll to application form
        const applySection = document.getElementById('apply');
        if (applySection) {
            applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    // 5) ============================ Pagination Logic ============================ //
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };



    return (
        <div className="min-h-screen bg-slate-50">
            {/* =================================================================   TOP BAR */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
                <div className="mx-auto max-w-6xl px-4 py-4">
                    <Link
                        to="/careers"
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-all duration-200"
                    >
                        <FaArrowLeft className="h-4 w-4" />
                        {language === "en" ? "Back to Careers" : "Takaisin Uriin"}
                    </Link>
                </div>
            </header>

            {/* =================================================================   HERO SECTION */}
            <section className="bg-linear-to-r from-orange-500 to-yellow-500 py-16 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            {language === "en" ? "Open Positions" : "Avoimet Työpaikat"}
                        </h1>
                        <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                            {language === "en" 
                                ? "Explore all available positions and apply for your dream role"
                                : "Tutustu kaikkiin avoimiin työpaikkoihin ja hae unelmiesi tehtävään"}
                        </p>
                    </div>
                </div>
            </section>

            {/* =================================================================   MAIN CONTENT */}
            <main className="mx-auto max-w-6xl px-4 py-12">
                
                {/* =============   JOB LISTINGS SECTION ============= */}
                <section className="mb-16">
                    <div className="mb-8">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                            {language === "en" ? "Available Positions" : "Saatavilla Olevat Tehtävät"}
                        </h2>
                        <p className="text-slate-600">
                            {language === "en" 
                                ? "Browse through our current openings and find the perfect fit for you"
                                : "Selaa nykyisiä avoimia paikkoja ja löydä sinulle sopiva"}
                        </p>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-600"></div>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
                            <MdWork className="text-6xl text-slate-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">
                                {language === "en" ? "No Open Positions" : "Ei Avoimia Paikkoja"}
                            </h3>
                            <p className="text-slate-500">
                                {language === "en" 
                                    ? "Check back soon for new opportunities"
                                    : "Tarkista pian uudet mahdollisuudet"}
                            </p>
                        </div>
                    ) : (
                        <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
                            {currentJobs.map((job: any) => (
                                <div 
                                    key={job.id} 
                                    className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                                >
                                    {/* Job Image */}
                                    {job.jobPostImageURL && (
                                        <div className="relative h-40 overflow-hidden bg-linear-to-br from-orange-50 to-yellow-50">
                                            <img 
                                                src={job.jobPostImageURL} 
                                                alt={job.jobTitle}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                                            
                                            {/* Status Badge */}
                                            <div className="absolute top-2 right-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                                    job.jobStatus === 'open' 
                                                        ? 'bg-amber-100 text-amber-700 border border-amber-200' 
                                                        : 'bg-red-100 text-red-700 border border-red-200'
                                                }`}>
                                                    {job.jobStatus === 'open' 
                                                        ? (language === "en" ? "Open" : "Avoinna")
                                                        : (language === "en" ? "Closed" : "Suljettu")}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Job Content */}
                                    <div className="p-4 flex-1 flex flex-col">
                                        {/* Title */}
                                        <h3 className="text-lg font-extrabold text-slate-900 mb-2 flex items-start gap-2">
                                            <FaBriefcase className="text-orange-600 shrink-0 mt-1" />
                                            <span className="line-clamp-2">{job.jobTitle}</span>
                                        </h3>

                                        {/* Location and Type */}
                                        <div className="flex flex-col gap-1.5 mb-3 text-xs">
                                            <div className="flex items-center gap-1 text-slate-600">
                                                <FaMapMarkerAlt className="text-orange-600" />
                                                <span className="font-medium truncate">{job.jobLocation}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-slate-600">
                                                <FaClock className="text-orange-600" />
                                                <span className="font-medium truncate">{job.jobType?.join(', ')}</span>
                                            </div>
                                        </div>

                                        {/* Job Description Preview */}
                                        <div className="mb-4 flex-1">
                                            <ul className="space-y-1">
                                                {job.jobDescription?.slice(0, 2).map((desc: string, idx: number) => (
                                                    <li key={idx} className="flex items-start text-xs text-slate-600">
                                                        <span className="mr-1.5 text-orange-600 mt-0.5">•</span>
                                                        <span className="line-clamp-1">{desc}</span>
                                                    </li>
                                                ))}
                                                {job.jobDescription?.length > 2 && (
                                                    <li className="text-xs text-slate-500 italic pl-3">
                                                        {language === "en" 
                                                            ? `+ ${job.jobDescription.length - 2} more`
                                                            : `+ ${job.jobDescription.length - 2} lisää`}
                                                    </li>
                                                )}
                                            </ul>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col gap-2 mt-auto">
                                            <Link
                                                to={`/careers/jobs/${job.id}`}
                                                className="w-full inline-flex items-center justify-center gap-1 rounded-lg border-2 border-orange-500 bg-white px-3 py-2 text-xs font-bold text-orange-600 hover:bg-orange-50 transition-all duration-300"
                                            >
                                                {language === "en" ? "Read More" : "Lue Lisää"}
                                            </Link>
                                            <button
                                                onClick={() => onApplyRole(job.jobTitle, job.id)}
                                                disabled={job.jobStatus !== 'open'}
                                                className="w-full py-2 px-3 bg-linear-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-xs font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                                            >
                                                <FaBriefcase className="text-xs" />
                                                {language === "en" ? "Apply Now" : "Hae Nyt"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* =============   PAGINATION ============= */}
                        {totalPages > 1 && (
                            <div className="mt-10 flex items-center justify-center gap-4">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-orange-500 bg-white text-orange-600 font-semibold hover:bg-orange-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <FaChevronLeft />
                                    {language === "en" ? "Previous" : "Edellinen"}
                                </button>

                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-slate-600">
                                        {language === "en" ? "Page" : "Sivu"} {currentPage} {language === "en" ? "of" : "/"} {totalPages}
                                    </span>
                                </div>

                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-orange-500 bg-white text-orange-600 font-semibold hover:bg-orange-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    {language === "en" ? "Next" : "Seuraava"}
                                    <FaChevronRight />
                                </button>
                            </div>
                        )}
                        </>
                    )}
                </section>

                {/* =============   APPLICATION FORM SECTION ============= */}
                <section id="apply" className="scroll-mt-20">                   

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
            </main>
        </div>
    );
}