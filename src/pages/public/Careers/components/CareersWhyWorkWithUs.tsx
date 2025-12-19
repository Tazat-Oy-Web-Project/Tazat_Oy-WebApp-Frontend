import { useLanguage } from "../../../context/LanguageContext";

function CareersWhyWorkWithUs() {
    const { language } = useLanguage();


    // ---- Benefits Data ---- //
    const benefits = [
        {
            icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: language === "en" ? "Fair & Clear Scheduling" : "Reilu & Selkeä Aikataulutus",
            desc: language === "en" 
                ? "Work hours planned ahead with clear communication and flexibility where possible."
                : "Työtunnit suunnitellaan etukäteen selkeällä viestinnällä ja joustavuudella mahdollisuuksien mukaan.",
        },
        {
            icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: language === "en" ? "Training & Support" : "Koulutus & Tuki",
            desc: language === "en"
                ? "Simple processes, checklists, and onboarding so the job feels confident from day one."
                : "Yksinkertaiset prosessit, tarkistuslistat ja perehdytys, jotta työ tuntuu varmalta ensimmäisestä päivästä lähtien.",
        },
        {
            icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: language === "en" ? "Respectful Team Culture" : "Kunnioittava Tiimikulttuuri",
            desc: language === "en"
                ? "A friendly environment where people are treated with respect and appreciation."
                : "Ystävällinen ympäristö, jossa ihmisiä kohdellaan kunnioittavasti ja arvostavasti.",
        },
        {
            icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: language === "en" ? "Quality Equipment" : "Laadukkaat Välineet",
            desc: language === "en"
                ? "Right tools and safe products provided to do a great job efficiently."
                : "Oikeat työkalut ja turvalliset tuotteet erinomaisen työn tehokkaaseen suorittamiseen.",
        },
        {
            icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: language === "en" ? "Growth Opportunities" : "Kasvumahdollisuudet",
            desc: language === "en"
                ? "A chance to learn, take responsibility, and grow into team-lead tasks over time."
                : "Mahdollisuus oppia, ottaa vastuuta ja kasvaa tiiminvetäjän tehtäviin ajan myötä.",
        },
        {
            icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            title: language === "en" ? "Meaningful Work" : "Merkityksellinen Työ",
            desc: language === "en"
                ? "Helping clients feel comfortable in clean homes and productive workspaces."
                : "Autamme asiakkaita tuntemaan olonsa mukavaksi puhtaissa kodeissa ja tuottavissa työtiloissa.",
        },
    ];


    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            {/** --------------------------------------------------------------------------------------- 
                Section Header 
            --------------------------------------------------------------------------------------- **/}
            <div className="flex items-start justify-between gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {language === "en" ? "Why Work With Us" : "Miksi Työskennellä Kanssamme"}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                        {language === "en"
                            ? "A supportive environment, clear expectations, and pride in doing great work — that's the goal. Here's what the team can expect."
                            : "Kannustava ympäristö, selkeät odotukset ja ylpeys hyvästä työstä — se on tavoite. Tässä mitä tiimi voi odottaa."}
                    </p>
                </div>

                <div className="hidden sm:grid h-14 w-14 rounded-2xl bg-linear-to-r from-orange-100 to-yellow-100 text-orange-700 place-items-center">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
            </div>

            {/** --------------------------------------------------------------------------------------- 
                Benefits Grid 
            --------------------------------------------------------------------------------------- **/}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => (
                    <div
                        key={benefit.title}
                        className="group rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 hover:shadow-md hover:border-orange-200 transition-all duration-300"
                    >
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-orange-100 to-yellow-100 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                            {benefit.icon}
                        </div>
                        <p className="mt-4 text-base font-extrabold text-slate-900">{benefit.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CareersWhyWorkWithUs;
