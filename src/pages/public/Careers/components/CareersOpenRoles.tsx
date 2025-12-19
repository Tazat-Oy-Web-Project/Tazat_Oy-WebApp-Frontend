import { useLanguage } from "../../../context/LanguageContext";

function CareersOpenRoles() {
    const { language } = useLanguage();


    // ---- Job Openings Data ---- //
    const jobs = [
        {
            role: language === "en" ? "Cleaner" : "Siivooja",
            type: language === "en" ? "Part-time / Full-time" : "Osa-aikainen / Kokoaikainen",
            location: "Oulu, Finland",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=70",
            points: language === "en" 
                ? [
                    "Home & office cleaning",
                    "Checklist-based tasks",
                    "Friendly client service",
                    "Flexible scheduling options"
                ]
                : [
                    "Koti- ja toimistosiivous",
                    "Tarkistuslistaan perustuvat tehtävät",
                    "Ystävällinen asiakaspalvelu",
                    "Joustavat aikatauluvaihtoehdot"
                ],
        },
        {
            role: language === "en" ? "Team Lead (Cleaning)" : "Tiiminvetäjä (Siivous)",
            type: language === "en" ? "Full-time" : "Kokoaikainen",
            location: "Oulu, Finland",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=70",
            points: language === "en"
                ? [
                    "Coordinate small team",
                    "Quality checks",
                    "Client communication",
                    "Training new members"
                ]
                : [
                    "Pienen tiimin koordinointi",
                    "Laatutarkastukset",
                    "Asiakasviestintä",
                    "Uusien jäsenten koulutus"
                ],
        },
    ];


    return (
        <section id="roles" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            {/** --------------------------------------------------------------------------------------- 
                Section Header 
            --------------------------------------------------------------------------------------- **/}
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{language === "en" ? "Open Roles" : "Avoimet Työpaikat"}</h2>
                    <p className="mt-2 text-base text-slate-600">
                        {language === "en" 
                            ? "Apply for a role below — the application form is at the bottom."
                            : "Hae alla olevaan tehtävään — hakulomake on sivun alaosassa."}
                    </p>
                </div>
            </div>

            {/** --------------------------------------------------------------------------------------- 
                Job Cards Grid 
            --------------------------------------------------------------------------------------- **/}
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                {jobs.map((job) => (
                    <div
                        key={job.role}
                        className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        {/* Job Image */}
                        <div className="relative h-40 overflow-hidden">
                            <img
                                src={job.image}
                                alt={job.role}
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
                                    <h3 className="text-lg font-extrabold text-slate-900">{job.role}</h3>
                                    <p className="mt-1 text-sm text-slate-600">{job.type}</p>
                                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {job.location}
                                    </p>
                                </div>
                            </div>
                            
                            <ul className="mt-5 space-y-2 text-sm text-slate-600">
                                {job.points.map((point) => (
                                    <li key={point} className="flex gap-2">
                                        <span className="mt-0.5 text-orange-600" aria-hidden="true">
                                            ✓
                                        </span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#apply"
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-yellow-500 px-5 py-3 text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                {language === "en" ? "Apply for this role" : "Hae tähän tehtävään"}
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CareersOpenRoles;
