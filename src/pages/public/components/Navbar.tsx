import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import BrandLogo from "../../../assets/icons/brang-logo.jpg";
import { useLanguage } from "../../context/LanguageContext";

function NavbarComponent() {
    // Language context
    const { language, setLanguage } = useLanguage();
    
    // State to control mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // State for language dropdown
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    // Toggle language dropdown
    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };
    
    // Change language
    const changeLanguage = (lang: "en" | "fi") => {
        setLanguage(lang);
        setIsLanguageDropdownOpen(false);
    };

    // Close mobile menu when a link is clicked
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Active link styling function
    const activeClass = (isActive: boolean) => 
        isActive 
            ? "text-orange-600 font-bold text-sm md:text-base lg:text-lg 2xl:text-xl px-2 md:px-3 lg:px-4 2xl:px-6 py-2 md:py-2.5 2xl:py-3 rounded-lg bg-orange-100 md:w-full lg:w-auto border-b-2 border-orange-500 transition-all duration-300 md:text-center lg:text-left" 
            : "text-gray-700 hover:text-orange-600 font-medium text-sm md:text-base lg:text-md xl:text-lg 2xl:text-xl px-2 md:px-1 lg:px-2 xl:px-5 2xl:px-6 py-2 md:py-2.5 2xl:py-3 rounded-lg transition-all duration-300 hover:bg-orange-50 md:w-full lg:w-auto md:text-center lg:text-left";

    return (
        <>
            {/** Making the whole Navbar Sticky that stays at top when scrolling */}
            <nav className="sticky top-0 z-50">
                {/** This is the Main Full navbar container */}
                <div className="bg-linear-to-r from-white via-orange-50 to-yellow-50 py-3 md:py-5 lg:py-7 shadow-lg border-b-2 border-orange-200/30">
                    {/** Whele Contents part (logo + navigation links + Get Quote button). This container takes for full width of the screen*/}
                    <div className="bg-amber-0 w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
                        {/** Now the actual contents part: Brand on left, Nav links in center (desktop), Actions on right */}
                        <div className="bg-red-0 flex items-center justify-between">
                        
                            {/** Brand Section - Left Side */}
                            <Link 
                                to="/" 
                                className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform duration-300"
                            >
                                <img 
                                    src={BrandLogo} 
                                    className="h-8 sm:h-10 md:h-11 lg:h-12 xl:h-14 drop-shadow-md" 
                                    alt="Tazat Oy Logo" 
                                />
                                <span className="self-center whitespace-nowrap text-lg sm:text-md md:text-lg lg:text-xl font-extrabold bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                                    Tazat Oy
                                </span>
                            </Link>

                            {/** Desktop Navigation Links - Center (hidden on mobile/tablet = shown after 1024px) */}
                            <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6 2xl:gap-8">
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => activeClass(isActive)} 
                                    end
                                >
                                    {language === "en" ? "Home" : "Etusivu"}
                                </NavLink>
                                <NavLink 
                                    to="/services" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    {language === "en" ? "Services" : "Palvelut"}
                                </NavLink>
                                <NavLink 
                                    to="/about" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    {language === "en" ? "About Us" : "Tietoa Meistä"}
                                </NavLink>
                                <NavLink 
                                    to="/careers" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    {language === "en" ? "Work With Us" : "Töihin Meille"}
                                </NavLink>
                                <NavLink 
                                    to="/blog" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    {language === "en" ? "Blog" : "Blogi"}
                                </NavLink>
                                <NavLink 
                                    to="/contact" 
                                    className={({ isActive }) => activeClass(isActive)}
                                >
                                    {language === "en" ? "Contact" : "Yhteystiedot"}
                                </NavLink>
                            </div>

                            {/** Action Buttons - Right Side */}
                            <div className="flex items-center gap-2 md:gap-3 lg:gap-5">
                                {/** Language Selector */}
                                <div className="relative">
                                    <button
                                        onClick={toggleLanguageDropdown}
                                        className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border-2 border-orange-200 bg-white hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 shadow-sm hover:shadow-md"
                                        aria-label="Select language"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                        </svg>
                                        <span className="text-xs sm:text-sm font-bold text-gray-700 uppercase">{language}</span>
                                        <svg className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-600 transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    {/** Language Dropdown */}
                                    {isLanguageDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border-2 border-orange-200 overflow-hidden z-50">
                                            <button
                                                onClick={() => changeLanguage("en")}
                                                className={`w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-orange-50 transition-colors duration-200 flex items-center gap-2 ${language === "en" ? "bg-orange-100 text-orange-700" : "text-gray-700"}`}
                                            >
                                                <span className="text-lg">🇬🇧</span>
                                                English
                                            </button>
                                            <button
                                                onClick={() => changeLanguage("fi")}
                                                className={`w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-orange-50 transition-colors duration-200 flex items-center gap-2 ${language === "fi" ? "bg-orange-100 text-orange-700" : "text-gray-700"}`}
                                            >
                                                <span className="text-lg">🇫🇮</span>
                                                Finnish
                                            </button>
                                        </div>
                                    )}
                                </div>
                                
                                {/** Get a Quote Button */}
                                <Link to="/quote" className="group">
                                    <button className="relative overflow-hidden bg-linear-to-r from-orange-500 to-yellow-500 text-white font-bold text-xs sm:text-sm md:text-sm lg:text-base px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-2.5 lg:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-orange-300">
                                        <span className="relative z-10">{language === "en" ? "Get a Quote" : "Pyydä Tarjous"}</span>
                                        <span className="absolute inset-0 rounded-full bg-linear-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                                    </button>
                                </Link>

                                {/** Mobile Menu Toggle Button (only visible before md = shown at less than 768px) */}
                                <button
                                    onClick={toggleMobileMenu}
                                    className="md:hidden bg-pink-0 text-orange-600 hover:text-white hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 rounded-lg p-2 sm:p-2.5 transition-all duration-300 shadow-md scale-90 sm:scale-95"
                                    aria-label="Toggle navigation menu"
                                >
                                    {isMobileMenuOpen ? (
                                        // Close Icon (X)
                                        <svg 
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M6 18L18 6M6 6l12 12" 
                                            />
                                        </svg>
                                    ) : (
                                        // Hamburger Icon (3 lines)
                                        <svg 
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M4 6h16M4 12h16M4 18h16" 
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/** Mobile/Tablet Navigation Menu (visible on sm and md, 2-row grid) */}
                        <div 
                            className={`
                                ${isMobileMenuOpen ? 'flex flex-col' : 'hidden'}
                                md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-2 md:justify-items-center
                                lg:hidden
                                mt-4 p-3 sm:p-4
                                bg-white sm:bg-pink-0
                                rounded-xl sm:rounded-none 
                                shadow-lg sm:shadow-none 
                                backdrop-blur-xl 
                                border border-orange-100/50 sm:border-0
                            `}
                        >
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => activeClass(isActive)} 
                            onClick={closeMobileMenu}
                            end
                        >
                            {language === "en" ? "Home" : "Etusivu"}
                        </NavLink>
                        <NavLink 
                            to="/services" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            {language === "en" ? "Services" : "Palvelut"}
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            {language === "en" ? "About Us" : "Tietoa Meistä"}
                        </NavLink>
                        <NavLink 
                            to="/careers" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            {language === "en" ? "Work With Us" : "Töihin Meille"}
                        </NavLink>
                        <NavLink 
                            to="/blog" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            {language === "en" ? "Blog" : "Blogi"}
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => activeClass(isActive)}
                            onClick={closeMobileMenu}
                        >
                            {language === "en" ? "Contact" : "Yhteystiedot"}
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavbarComponent;
