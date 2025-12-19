import { useLanguage } from "../../../context/LanguageContext";

interface SubmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function SubmissionModal({ isOpen, onClose }: SubmissionModalProps) {
    const { language } = useLanguage();
    
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-linear-to-b from-gray-50 via-amber-50 to-orange-50 z-40 transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100 animate-slideIn">
                    
                    {/* Success Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-green-100 rounded-full p-4">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={2.5} 
                                stroke="currentColor" 
                                className="w-12 h-12 text-green-600"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
                        {language === "en" ? "Quote Request Submitted!" : "Tarjouspyyntö Lähetetty!"}
                    </h2>

                    {/* Message */}
                    <p className="text-gray-600 text-center mb-6">
                        {language === "en" 
                            ? <>Thank you for your interest! We've received your quote request and our team will review it carefully. You'll receive a detailed quote within <span className="font-semibold text-amber-600">24 hours</span> via email.</>
                            : <>Kiitos kiinnostuksestasi! Olemme vastaanottaneet tarjouspyyntösi ja tiimimme käy sen huolellisesti läpi. Saat yksityiskohtaisen tarjouksen <span className="font-semibold text-amber-600">24 tunnin</span> kuluessa sähköpostitse.</>}
                    </p>

                    {/* Additional Info */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">{language === "en" ? "What's next?" : "Mitä seuraavaksi?"}</span>
                            <br />
                            • {language === "en" ? "Check your email for our response" : "Tarkista sähköpostisi vastauksemme varalta"}
                            <br />
                            • {language === "en" ? "Our team may contact you for clarification" : "Tiimimme saattaa ottaa yhteyttä lisätietojen saamiseksi"}
                            <br />
                            • {language === "en" ? "Review and approve the quote" : "Tarkista ja hyväksy tarjous"}
                        </p>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="w-full bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        {language === "en" ? "Close" : "Sulje"}
                    </button>

                </div>
            </div>
        </>
    );
}

export default SubmissionModal;
