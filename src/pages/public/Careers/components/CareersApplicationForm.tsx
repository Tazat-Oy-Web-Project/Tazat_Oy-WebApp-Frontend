import { useLanguage } from "../../../context/LanguageContext";


function CareersApplicationForm({ formObject, onFullNameChange, onEmailChange, onPhoneChange, onCityChange, onAvailabilityChange, onMessageChange, onConsentChange, onSubmit, selectedJobId }: any) {
    
    const { language } = useLanguage();


    return (
        <section id="apply" className="mt-12 scroll-mt-24">
            {/** --------------------------------------------------------------------------------------- 
                Section Header 
            --------------------------------------------------------------------------------------- **/}
            <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{language === "en" ? "Apply Now" : "Hae Nyt"}</h2>
                <p className="mt-2 text-base text-slate-600">
                    {language === "en" 
                        ? "Fill the form and a reply will be sent as soon as possible."
                        : "Täytä lomake ja vastaamme mahdollisimman pian."}
                </p>
            </div>

            {/** --------------------------------------------------------------------------------------- 
                Application Form 
            --------------------------------------------------------------------------------------- **/}
            <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
            >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                        <label className="text-sm font-semibold text-slate-700">
                            {language === "en" ? "Full Name" : "Koko Nimi"} <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="fullName"
                            value={formObject.fullName}
                            onChange={onFullNameChange}
                            required
                            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                            placeholder={language === "en" ? "e.g., Ryan Wickramaratne" : "esim. Matti Meikäläinen"}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700">
                            {language === "en" ? "Email" : "Sähköposti"} <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={formObject.email}
                            onChange={onEmailChange}
                            required
                            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                            placeholder={language === "en" ? "name@email.com" : "nimi@sahkoposti.fi"}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700">{language === "en" ? "Phone" : "Puhelin"}</label>
                        <input
                            name="phone"
                            value={formObject.phone}
                            onChange={onPhoneChange}
                            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                            placeholder="+358 ..."
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700">{language === "en" ? "City" : "Kaupunki"}</label>
                        <input
                            name="city"
                            value={formObject.city}
                            onChange={onCityChange}
                            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                            placeholder={language === "en" ? "e.g., Oulu" : "esim. Oulu"}
                        />
                    </div>
                    {/* Interested Role part should be changed. the field should be locked and when somebody clicks on apply this job from available jobs, the job id automatically pasted here*/}
                    <div>
                        <label className="text-sm font-semibold text-slate-700">
                            {language === "en" ? "Interested Role" : "Kiinnostava Tehtävä"} <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="role"
                            value={`${formObject.role.title} (${formObject.role.id})`}
                            required
                            readOnly
                            className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-600 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                            placeholder={language === "en" ? "Select a job above to auto-fill" : "Valitse tehtava ylla tayttaa automaattisesti"}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700">
                            {language === "en" ? "Availability" : "Saatavuus"}
                        </label>
                        <input
                            name="availability"
                            value={formObject.availability}
                            onChange={onAvailabilityChange}
                            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                            placeholder={language === "en" ? "e.g., Weekdays 9–15 / Weekends / Evenings" : "esim. Arkipäivisin 9–15 / Viikonloput / Illat"}
                        />
                    </div>
                </div>

                <div className="mt-5">
                    <label className="text-sm font-semibold text-slate-700">
                        {language === "en" ? "Message" : "Viesti"} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={formObject.message}
                        onChange={onMessageChange}
                        required
                        rows={5}
                        className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                        placeholder={language === "en" 
                            ? "Short intro + any experience + why this role is interesting..."
                            : "Lyhyt esittely + mahdollinen kokemus + miksi tämä tehtävä kiinnostaa..."}
                    />
                </div>

                <div className="mt-5 flex items-start gap-3">
                    <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formObject.consent}
                        onChange={onConsentChange}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                        required
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600">
                        {language === "en" 
                            ? "I consent to be contacted regarding this application."
                            : "Suostun yhteydenottoon tämän hakemuksen osalta."} <span className="text-red-500">*</span>
                    </label>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                        {language === "en"
                            ? "By submitting, the information is used only for recruitment purposes."
                            : "Lähettämällä tiedot käytetään vain rekrytointitarkoituksiin."}
                    </p>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-yellow-500 px-8 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        {language === "en" ? "Submit Application" : "Lähetä Hakemus"}
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </button>
                </div>
            </form>
        </section>
    );
}

export default CareersApplicationForm;



