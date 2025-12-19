import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../../context/LanguageContext";

function BlogCTA() {
    const navigate = useNavigate();
    const { language } = useLanguage();

    const handleBookNow = () => {
        navigate('/quote');
    };

    return (
        <div className="mt-6 overflow-hidden rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 shadow-sm">
            <div className="p-5 text-white">
                {/* CTA Header */}
                <div className="flex items-center gap-2">
                    {/* Icon */}
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
                        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3a4 4 0 004 4h4a4 4 0 004-4V8a6 6 0 00-6-6zm-3 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" />
                        </svg>
                    </div>
                    {/* Title */}
                    <h3 className="text-sm font-extrabold">{language === "en" ? "Need a Hand?" : "Tarvitsetko Apua?"}</h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-white/85">
                    {language === "en" ? "Book a professional cleaning service today and get 20% off the first visit." : "Varaa ammattimainen siivouspalvelu tänään ja saat 20% alennuksen ensimmäisestä käynnistä."}
                </p>

                {/* Book Now Button */}
                <button onClick={handleBookNow} className="mt-4 w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-white/95  hover:cursor-pointer">
                    {language === "en" ? "Book Now" : "Varaa Nyt"}
                </button>
            </div>
        </div>
    );
}

export default BlogCTA;
