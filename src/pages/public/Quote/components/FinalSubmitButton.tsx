import { useLanguage } from "../../../context/LanguageContext";

interface FinalSubmitButtonProps {
    onSubmit: () => void;
}

function FinalSubmitButton({ onSubmit }: FinalSubmitButtonProps){
    const { language } = useLanguage();

    return(
        <>
            <div className="w-full max-w-6xl px-4 mb-12">
                <div className="bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8 shadow-md">
                    
                    {/* Info Section */}
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{language === "en" ? "Ready to Get Your Quote?" : "Valmis Saamaan Tarjouksen?"}</h3>
                        <p className="text-gray-600 text-sm">
                            {language === "en" ? "We'll review your request and send you a detailed quote within 24 hours" : "Käsittelemme pyyntösi ja lähetämme sinulle yksityiskohtaisen tarjouksen 24 tunnin kuluessa"}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center items-center">
                        
                        {/* Submit Button */}
                        <button
                            type="submit"
                            onClick={onSubmit}
                            className="group relative bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                {language === "en" ? "Submit Quote Request" : "Lähetä Tarjouspyyntö"}
                            </span>
                        </button>
                        
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t border-amber-200">
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{language === "en" ? "Free quote" : "Ilmainen tarjous"}</span>
                            </div>
                            <div className="hidden sm:block text-gray-400">•</div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{language === "en" ? "24-hour response" : "24 tunnin vastaus"}</span>
                            </div>
                            <div className="hidden sm:block text-gray-400">•</div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <span>{language === "en" ? "No obligation" : "Ei sitoutumista"}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FinalSubmitButton;