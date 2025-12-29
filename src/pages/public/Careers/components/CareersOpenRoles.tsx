import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";


function CareersOpenRoles({ jobs, loading, onApplyRole } : any) {
    const { language } = useLanguage();

    return (
        <section id="roles" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            {/** --------------------------------------------------------------------------------------- 
                Section Header 
            --------------------------------------------------------------------------------------- **/}
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{language === "en" ? "Open Roles" : "Avoimet Tyopaikat"}</h2>
                    <p className="mt-2 text-base text-slate-600">
                        {language === "en" 
                            ? "Apply for a role below - the application form is at the bottom."
                            : "Hae alla olevaan tehtavaan - hakulomake on sivun alaosassa."}
                    </p>
                </div>
                <Link
                    to="/careers/jobs"
                    className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                    {language === "en" ? "See all jobs" : "Katso kaikki tyot"}
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>

            {/** --------------------------------------------------------------------------------------- 
                Job Cards Grid 
            --------------------------------------------------------------------------------------- **/}
            {loading ? (
                <div className="mt-6 flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                </div>
            ) : jobs.length === 0 ? (
                <div className="mt-6 text-center py-12">
                    <p className="text-slate-600">{language === "en" ? "No open positions at the moment" : "Ei avoimia paikkoja tällä hetkellä"}</p>
                </div>
            ) : (
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                {jobs.slice(0, 4).map((element: any) => {
                    const jobId = element.id;
                    const jobTitle = element.jobTitle;
                    const jobDescription = element.jobDescription;
                    const jobFeaturedImageURL = element.jobPostImageURL;
                    const jobLocation = element.jobLocation;
                    const jobType = element.jobType;

                    return (
                        <div
                            key={jobId}
                            className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            {/* Job Image */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={jobFeaturedImageURL}
                                    alt={jobTitle}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/40"></div>
                                <span className="absolute top-3 right-3 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-700">
                                    {language === "en" ? "Hiring" : "Rekrytoidaan"}
                                </span>
                            </div>

                            {/* Job Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-extrabold text-slate-900">{jobTitle}</h3>
                                        <p className="mt-1 text-sm text-slate-600">{jobType?.join(', ')}</p>
                                        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {jobLocation}
                                        </p>
                                    </div>
                                </div>

                                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                                    {jobDescription?.slice(0, 3).map((element: any, idx: number) => (
                                        <li key={idx} className="flex gap-2">
                                            <span className="mt-0.5 text-orange-600" aria-hidden="true">
                                                •
                                            </span>
                                            <span>{element}</span>
                                        </li>
                                    ))}
                                    {jobDescription?.length > 3 && (
                                        <li className="text-sm text-slate-500 italic pl-5">
                                            {language === "en" 
                                                ? `+ ${jobDescription.length - 3} more requirements`
                                                : `+ ${jobDescription.length - 3} lisävaatimusta`}
                                        </li>
                                    )}
                                </ul>

                                <div className="mt-6 flex gap-3">
                                    <Link
                                        to={`/careers/jobs/${jobId}`}
                                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-orange-500 bg-white px-4 py-2.5 text-sm font-bold text-orange-600 hover:bg-orange-50 transition-all duration-300"
                                    >
                                        {language === "en" ? "Read More" : "Lue Lisää"}
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <a
                                        href="#apply"
                                        onClick={() => onApplyRole(jobTitle, jobId)}
                                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-yellow-500 px-4 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        {language === "en" ? "Apply Now" : "Hae Nyt"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            )}
        </section>
    );
}

export default CareersOpenRoles;
