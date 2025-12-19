import { useLanguage } from "../../../context/LanguageContext";

function BlogNewsletter() {
    const { language } = useLanguage();


    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Newsletter Header */}
            <div className="flex items-center gap-2">
                {/* Icon */}
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-50 text-amber-700">
                    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                        <path d="M2.94 6.34A2 2 0 014.5 5h11A2 2 0 0117.06 6.34L10 10.77 2.94 6.34z" />
                        <path d="M18 8.12l-7.4 4.32a1.2 1.2 0 01-1.2 0L2 8.12V14a2 2 0 002 2h12a2 2 0 002-2V8.12z" />
                    </svg>
                </div>
                {/* Title */}
                <h3 className="text-sm font-extrabold text-slate-900">{language === "en" ? "Weekly Tips" : "Viikottaiset Vinkit"}</h3>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-600">
                {language === "en" ? "Get free cleaning checklists and exclusive discounts sent to the inbox." : "Saat ilmaiset siivouslistat ja yksinomaiset alennukset sähköpostiisi."}
            </p>

            {/* Subscription Form */}
            <div className="mt-4 space-y-3">
                {/* Email Input */}
                <input
                    placeholder={language === "en" ? "Email address" : "Sähköpostiosoite"}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100"
                />
                {/* Subscribe Button */}
                <button className="w-full rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 active:bg-amber-800">
                    {language === "en" ? "Subscribe" : "Tilaa"}
                </button>
            </div>
        </div>
    );
}

export default BlogNewsletter;
